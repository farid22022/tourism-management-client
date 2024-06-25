import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Menu from "../../Shared/Menu";

const SpotCardDetails = () => {
  const spotPlaces = useLoaderData();
  console.log(spotPlaces);
  const { _id } = useParams();
//   const idInt = parseInt(_id);
  const spotPlace = spotPlaces.find((spotPlace) => spotPlace._id === _id);
  console.log(spotPlace);
    


  const VisitedSpot = {
    _id: spotPlace._id,
    image: spotPlace.image,
    tourSpot: spotPlace.tourSpot,
    country: spotPlace.country,
    location: spotPlace.location,
    description: spotPlace.description,
    cost: spotPlace.cost,
    season: spotPlace.season,
    time: spotPlace.time,
    total: spotPlace.total,
    email: spotPlace.email,
    name: spotPlace.name,
  };
  

  // server side for sending data
  const handleVisit = () =>{
    fetch("https://tourism-management-server-jet.vercel.app/visitedspot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(VisitedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added to Your profile Successfully",
            icon: "success",
            confirmButtonText: "Great",
          });
        }
      });
  }
  

  const handleDelete = _id =>{
    console.log(_id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

        fetch(`https://tourism-management-server-jet.vercel.app/spot/${_id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0 ){
                    Swal.fire({
                            title: "Deleted!",
                            text: "This Spot Place has been deleted.",
                            icon: "success"
                        }).then(() =>{
                          window.location.href="/";
                        });
                        
                }
                
            })
            .catch(error =>{
              console.log('Error deleting item:',error)
            });
        }

      });

  }

  const handleFeedback = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const email = form.email.value;
    const feedBack = form.feedback.value;
    console.log(
      
      email,
      feedBack
    );

    const newSpot = {
      
      email,
      feedBack
    };

    //server side for sending data
    fetch("https://tourism-management-server-jet.vercel.app/feed", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Feedback added Spot Place is Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="text-center md:pl-12 md:pr-12">
      <Menu></Menu>
      <div className={`card card-compact col-span-3 bg-base-100 shadow-xl row-span-1/12`}>
      <figure>
        <img 
          className="rounded-3xl shadow-2xl"
          src={spotPlace.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
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
          <button onClick={handleVisit} className="btn btn-primary border-b-4 border-indigo-950 bg-indigo-500">Visited !</button>
        </div>
        <div>
        <Link to={`/updatetourspot/${_id}`}><button className="bg-cyan-400 btn btn-primary text-xl border-b-4 border-cyan-800">Update Spot</button></Link>
        <button onClick={() =>handleDelete(_id)} className="bg-cyan-400 btn btn-primary text-xl border-b-4 border-cyan-800">Delete Spot</button>
        </div>
      </div>
      </div>
      <h3 className={"text-3xl font-extrabold text-center text-blue-850"}>Say About Tour Spot  </h3>
      <div className={`text-end mt-12`}>
        <form onSubmit={handleFeedback} className="">
          <div className="">
            <label className="">
              <span className="label-text text-xl font-bold">Email</span>
            </label>
            <input type="email" 
                  placeholder="Email"
                  name="email"
                  className="input input-bordered" required />
          </div>
          <div className="">
            <label className="h-48">
              <span className="label-text text-xl font-bold h-48">Feed Back</span>
            </label>
            <input 
                type="text"
                placeholder="Your Feedback"
                name="feedback" 
                className="input input-bordered h-48 pl-2 text-start" 
                required 
            />

          </div>
          
          <div className="form-control mt-6">
            <button className="btn btn-primary">Comment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SpotCardDetails;
