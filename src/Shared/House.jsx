import Home from "../Pages/Home/Home";
import { useState, useEffect } from "react";
import SpotCard from "../Pages/SpotCard/SpotCard";
import AllComments from "./AllComments";
import "animate.css";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../Hook/useAxiosPublic";

const House = () => {
    // const axiosPublic = useAxiosPublic();
    const [spots, setSpots] = useState([])
    useEffect( () =>{
        fetch('https://tourism-management-server-jet.vercel.app/spot')
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setSpots(data)
            })
    })
    

    return (
        <div>
            <Home></Home>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-28 gap-4 md:mt-96 text-center sm:pl-6 md:pl-8 lg:pl-16">
                {Array.isArray(spots) && spots.map(spot => (
                    <SpotCard
                        key={spot._id}
                        spot={spot}
                        spots={spots}
                        setSpots={setSpots}
                    ></SpotCard>
                ))}
            </div>
            <h3 className="text-center text-5xl text-blue-950 font-extrabold mt-14 animate__animated animate__bounce animate__infinite">Comment</h3>
            <h2 className="text-center text-3xl text-blue-400 font-extrabold mt-4 mb-12">From Users</h2>
            <AllComments></AllComments>
        </div>
    );
};

export default House;
