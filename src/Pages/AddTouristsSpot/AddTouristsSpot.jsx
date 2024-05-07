const AddTouristsSpot = () => {
    //image, spot, country ,location ,description, cost, season, time, 
    //total, email, name

    const handleAdd = e =>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const time = form.time.value;
        const total = form.total.value;
        const email = form.email.value;
        const name = form.name.value;
        console.log(image, spot, country ,location ,description, cost, season, time, total, email, name);
    }

  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add Tourists Spot now!</h1>
        </div>
        <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleAdd} className="card-body">
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
                    required
                />
                </div>
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Tourists Spot Name</span>
                </label>
                <input
                    type="text"
                    name="spot"
                    placeholder="tourists_spot_name"
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
                    className="input input-bordered"
                    required
                />
                </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Add </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
