import { Link } from "react-router-dom";

const List = ({list}) => {
    const {
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
    } = list;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">
            Place Name :
            <span className="text-red-600 font-serif font-semibold">
              {name}
            </span>
          </h2>
          <p className="text-3xl font-extrabold text-blue-600">description: </p>
          <p className="font-serif text-xl">{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/spotcarddetails/${_id}`}>
              <button className="bg-cyan-400 btn btn-primary text-xl border-b-4 border-cyan-800">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;