import React from "react";

const VisitedSpot = ({visitedSpot}) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={visitedSpot.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Spot : {visitedSpot.tourSpot}</h2>
        <p>Description :  {visitedSpot.description}</p>
        
      </div>
    </div>
  );
};

export default VisitedSpot;
