import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import VisitedSpot from "./VisitedSpot";
import Menu from "./Menu";

const UserProfile = () => {

    const visitedSpots = useLoaderData()
  const { user, setLoading } = useContext(AuthContext);
  console.log(user);
  setLoading(false);

  return (
    <div>
        <Menu></Menu>
      <div className="">
        <figure>
          
            {
                user?
                <img src={user?.image}/>
                :
                <span className="loading loading-spinner text-error text-center text-6xl"></span>
            }
          
        </figure>
        {/* <p>Name : {user.displayname}</p> */}
        {/* <p className="text-2xl text-center text-slate-700 font-bold">Email : <span className="text-center font-extrabold text-2xl text-green-950">{user.email}</span></p> */}
        <div className="">
          {/* <h2 className="card-title">{user.displayname}</h2> */}
          <div>
            <p className="text-center text-3xl font-serif font-extrabold mb-12"> Total Visited places :<span className="text-red-800"><span className="countdown font-mono text-4xl">
  <span style={{"--value":visitedSpots.length}}></span>
</span></span></p>
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
                {
                    visitedSpots.map(visitedSpot =><VisitedSpot
                    key={visitedSpot._id}
                    visitedSpot={visitedSpot}>
                    </VisitedSpot>)
                }
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
