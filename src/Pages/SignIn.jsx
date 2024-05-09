import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext} from "./../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub , FaFacebook } from "react-icons/fa6";
import {  } from "react-icons/fa";
import Menu from "../Shared/Menu";


const Login = () => {

  const {signIn, googleLogin, gitHubLogin} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location) ;


  const handleLogin =(e) =>{
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      console.log(form.get('email'));
      const email = form.get('email');
      const password = form.get('password');
      console.log(email, password);
      signIn(email, password)
        .then(result=>{
          console.log(result.user)
          navigate(location?.state? location.state:'/')

        })
        .catch(error =>{
          console.log(error)
        })
       googleLogin(email, password)
        .then(result =>{
            console.log(result.user);
            navigate(location?.state? location.state:'/')
        })
       gitHubLogin(email, password)
        .then(result =>{
            console.log(result.user);
            navigate(location?.state? location.state:'/')
        })
        
  }
  return (
    <div>
        <Menu></Menu>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>

            <p className="text-xl text-center mb-4">Login with</p>
            <ul className="flex justify-around px-20">
                <li className="text-2xl" onClick={googleLogin}><FcGoogle></FcGoogle></li>
                <li className="text-2xl" onClick={gitHubLogin}><FaGithub></FaGithub></li>
                <li className="text-2xl" onClick={gitHubLogin}><FaFacebook></FaFacebook></li>
            </ul>

            <p className="text-center mt-14 mb-4">Do not have an account ? <Link className="text-blue-950 font-bold" to="/register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
