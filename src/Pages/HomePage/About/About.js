import React from 'react';

const About = () => {
    return (
        <div className="bg-secondary py-3 px-5 text-center">
            <h1 className="text-warning">About Us</h1>
            <p className="text-white w-75 mx-auto">"Filmy World" is the ultimate digital network for all things movies, serving more than 67 million unique visitors per month globally with best-in-class movie information, ticketing to more than 45,000 screens, trailers and original video, home entertainment and fan merchandise. Its portfolio includes leading online ticketers Fandango, MovieTickets.com and Flixster in the U.S.; Ingresso in Brazil and Fandango Latin America, as well as world-renowned movie review site Rotten Tomatoes and Movieclips, the #1 movie trailers and content channel on YouTube. Fandango's movie discovery and ticketing innovations can also be found on mobile, social, AI and voice platforms from Apple, Facebook, Google, Amazon, and others.</p>
            <h1 className="text-warning mt-5 pt-5">Developer</h1>
            <div>
                <img className="w-25 rounded-circle p-5" src="https://i.ibb.co/HGYkhVH/square.jpg" alt="" />
                <h2 className="text-white">Mohammad Mostafa</h2>
                <p>Student of Programming Hero</p>
            </div>
        </div>
    );
};

export default About;