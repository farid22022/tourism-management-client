import { useLoaderData, useParams } from "react-router-dom";
/**
 *     const {
        _id,
        image, 
        tourSpot, 
        country ,
        location ,
        description, 
        cost, 
        season, 
        time, 
        total, 
        email, 
        name
    } = spot;
 */
const SpotCardDetails = () => {
  const spotPlaces = useLoaderData();
  console.log(spotPlaces);
  const { _id } = useParams();
//   const idInt = parseInt(_id);
  const spotPlace = spotPlaces.find((spotPlace) => spotPlace._id === _id);
  console.log(spotPlace)

  return (
    <div className="card card-compact w-3/5 bg-base-100 shadow-xl">
      <figure>
        <img 
          src={spotPlace.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title text-3xl">Spot Name : <span className="text-3xl font-serif text-red-800 font-extrabold">{spotPlace.tourSpot}</span></h2>
        <div className="flex">
            <p className="text-3xl">Location : <span className="text-blue-500 font-bold font-sans">{spotPlace.location}</span></p>
            <p className="text-3xl">Country : {spotPlace.country}</p>
        </div>
        <p className="text-2xl text-green-950 font-extrabold">Description : </p>
        <p>{spotPlace.description}</p>
        <div className="flex">
            <p className="text-xl font-bold">Cost : <span className="text-red-700">{spotPlace.cost}</span></p>
            <p className="text-2xl">Time : <span className="font-serif text-yellow-500 font-bold">{spotPlace.time}</span></p>
        </div>
        <div>
            <p className="text-2xl">Season : <span className="text-lime-600 font-bold ">{spotPlace.season}</span></p>
        </div>
        <p className="text-xl">Total visited people  : <span className="text-red-700 font-extrabold">{spotPlace.total}</span> /year</p>
        <p className="text-blue-900 text-3xl font-bold">Contact Details</p>
        <div>
            <p className="text-red-800 text-2xl">Email : <span className="text-red-950 font-bold">{spotPlace.email}</span></p>
            
        </div>
        <p className="text-2xl">
            Tour Manager : <span className="text-blue-500 font-serif font-extrabold">{spotPlace.name}</span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary border-b-4 border-indigo-950 bg-indigo-500">Buy Now</button>
          <button className="btn btn-primary border-b-4 border-indigo-950 bg-indigo-500">Visited !</button>
        </div>
      </div>
    </div>
  );
};

export default SpotCardDetails;
