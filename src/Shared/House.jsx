import { useLoaderData } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { useState } from "react";
import SpotCard from "../Pages/SpotCard/SpotCard";


const House = () => {

    const loadedSpots = useLoaderData();
    const [spots, setSpots] = useState(loadedSpots);

    return (
        <div>
            <Home></Home>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-28 gap-4 md:mt-96">
            {
                spots.map(spot =><SpotCard
                key={spot._id}
                spot={spot}
                spots={spots}
                setSpots={setSpots}>
                </SpotCard>)
            }

            </div>
        </div>
    );
};

export default House;
