import Swal from "sweetalert2";
import Menu from "../../Shared/Menu";
import { Link, useLoaderData } from "react-router-dom";
import 'animate.css';

const UpdateTouristSpot = () => {

   const spot  = useLoaderData()
   const {image,
    tourSpot,
    country,
    location,
    description,
    cost,
    season,
    time,
    total,
    email,
    name} = spot;
  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const tourSpot = form.tourSpot.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const total = form.total.value;
    const email = form.email.value;
    const name = form.name.value;
    console.log(image, tourSpot, country, location, description, cost, season, time, total, email, name);

    const updatedSpot = {
        image,
        tourSpot,
        country,
        location,
        description,
        cost,
        season,
        time,
        total,
        email,
        name
    };

    //server side for sending data
    fetch(`https://tourism-management-server-jet.vercel.app/spot/${updatedSpot._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedSpot)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Tourist Spot Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire({
            title: 'Error!',
            text: 'An unexpected error occurred',
            icon: 'error',
            confirmButtonText: 'Okay'
        });
    });
};

  return (
    <div>
      <Menu></Menu>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update a Tourists Spot now!</h1>
          </div>
          <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="flex justify-between space-x-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="image URL"
                    className="input input-bordered"
                    defaultValue={image}
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Tourists Spot Name</span>
                  </label>
                  <input
                    type="text"
                    name="tourSpot"
                    placeholder="tourists_spot_name"
                    defaultValue={tourSpot}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between space-x-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Country Name</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="country_Name"
                    defaultValue={country}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="location"
                    defaultValue={location}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="short description"
                  defaultValue={description}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="flex justify-between space-x-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Average Cost</span>
                  </label>
                  <input
                    type="text"
                    name="cost"
                    placeholder="Average cost"
                    className="input input-bordered"
                    defaultValue={cost}
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Seasonality</span>
                  </label>
                  <input
                    type="text"
                    name="season"
                    placeholder="Seasonality"
                    defaultValue={season}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="flex">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Travel Time</span>
                  </label>
                  <input
                    type="text"
                    name="time"
                    placeholder="trave time"
                    defaultValue={time}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Total Visitors Per Year</span>
                  </label>
                  <input
                    type="text"
                    name="total"
                    placeholder="totalVisitorsPerYear"
                    defaultValue={total}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              {/* user details */}
              <div className="flex justify-between space-x-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">User Email: </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="user email"
                    defaultValue={email}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">User Name: </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    defaultValue={name}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Update </button>
              </div>
            </form>
            <p className="text-2xl font-bold text-center ">Do you want to add new spot instead of update </p>
            <p className="text-center text-xl font-bold mb-4">Then Click below</p>
            <p className="text-center text-xl animate__animated animate__bounce animate__infinite mb-4"><span className="text-pink-500 font-semibold"></span><span className="text-blue-800 font-extrabold underline animate__animated animate__bounce animate__infinite"><Link  to="/addspots">Add New Spot</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTouristSpot;
