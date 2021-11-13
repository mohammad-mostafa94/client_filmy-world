import { createUserWithEmailAndPassword, getAuth, getIdToken, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/HomePage/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError , setAuthError] = useState('');
 
    
    const [token, setToken] = useState('');

    const auth = getAuth();

    // register user
    const registerUser = (email,password,name,location,history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
                history.replace(destination);
            setAuthError('');
            
            const newUser = {email,displayName:name};
            setUser(newUser);


            // send data to database
            saveData(email,name,'POST',"user");



            // send name firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
                }).then(() => {
                    setAuthError('');
                }).catch((error) => {
                    
                });
            
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    };

    // sign in user
    const  signInUser = (email, password, location, history) =>{
            setIsLoading(true);
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            }).finally(()=>setIsLoading(false));
    }

    

    //observer user state change
    useEffect(()=>{                         
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

                // token
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    });

            } else {
                setUser({});
            }
            setIsLoading(false)
            });
            return () => unsubscribe;
    },[auth]);


    const saveData = (email,displayName, method,role) => {
        const user = {email, displayName,role};
        fetch("https://vast-mesa-82001.herokuapp.com/person",{
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        fetch(`https://vast-mesa-82001.herokuapp.com/person?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);

    const isAdmin = admin?.role === "admin"? true : false;

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            // const destination = location?.state?.from || '/';
                // history.replace(destination);
            }).catch((error) => {
                // An error happened.
            }).finally(()=>setIsLoading(false));
    }

    return (
        {
            user,
            isAdmin,
            token,
            authError,
            isLoading,
            registerUser,
            signInUser,
            logOut,
        }
    );
};

export default useFirebase;