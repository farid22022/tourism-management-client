import { Link } from "react-router-dom";

const BangladeshSpot = () => {
  return (
    <ul className="menu bg-transparent w-56 rounded-box text-white text-2xl">
      <Link to="/bangladesh"><li><a>Bangladesh</a></li></Link>
      <li><a>Thailand</a></li>
      <li><a>Indonesia</a></li>
      <li><a> Malaysia</a></li>
      <li><a>Vietnam</a></li>
      <li><a> Cambodia</a></li>
    </ul>
  );
};

export default BangladeshSpot;
