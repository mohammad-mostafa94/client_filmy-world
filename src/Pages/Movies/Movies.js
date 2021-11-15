import React, { useEffect, useState } from 'react';
import { Circle } from 'react-spinners-css';
import BestFilms from '../../Pages/HomePage/BestFilms/BestFilms';

const Movies = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        fetch('https://vast-mesa-82001.herokuapp.com/filmy')
            .then(res => res.json())
            .then((data) => setFilms(data))
    }, []);
    return (
        <div>
            <div className="mt-4 row justify-content-between g-4">

                {
                    (films.length === 0) ? (
                        <Circle color="#be97e8" size={200} />
                    ) : (
                        films.map(nowShow => <BestFilms
                            key={nowShow._id}
                            nowShow={nowShow}>
                        </BestFilms>)
                    )

                }
            </div>
        </div>
    );
};

export default Movies;