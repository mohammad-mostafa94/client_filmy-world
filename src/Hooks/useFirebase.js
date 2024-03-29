import { createUserWithEmailAndPassword, getAuth, signInWithPopup, getIdToken, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/HomePage/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');


    // const [token, setToken] = useState('');

    const auth = getAuth();

    // register user
    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');

                const newUser = { email, displayName: name };
                setUser(newUser);


                // send data to database
                saveData(email, name, 'PUT');

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
            .finally(() => setIsLoading(false));
    };



    // const googleSignIn = (location, history) => {
    //     setIsLoading(true);

    //     const provider = new GoogleAuthProvider();

    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             setAuthError('');
    //             const user = result.user;
    //             saveData(user.email, user.displayName, 'PUT');
    //             const destination = location?.state?.from || '/';
    //             history.replace(destination);
    //         }).catch((error) => {
    //             setAuthError(error.message);
    //         }).finally(() => setIsLoading(false));
    // }
    const googleSignIn = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();

        return signInWithPopup(auth, provider)
            .finally(() => setIsLoading(false));
    }


    // sign in user
    const signInUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }



    //observer user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

                // token
                getIdToken(user)
                    .then(idToken => {
                        // setToken(idToken);
                    });

            } else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);

    const saveData = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://vast-mesa-82001.herokuapp.com/person", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://vast-mesa-82001.herokuapp.com/persons/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [user.email]);

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));
    }

    return (
        {
            user,
            admin,
            // token,
            authError,
            isLoading,
            googleSignIn,
            registerUser,
            signInUser,
            logOut,
        }
    );
};

export default useFirebase;