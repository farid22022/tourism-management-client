import  { useState } from 'react';
import {  useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaGithub , FaFacebook } from "react-icons/fa6";
import {  } from "react-icons/fa";
import './style.css'; // Import your CSS file
import { AuthContext } from '../providers/AuthProvider';

const SigInUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(photo, name)

        // Password verification
        if (!password.match(/[A-Z]/)) {
            setError('Password must contain at least one uppercase letter.');
            return;
        }
        if (!password.match(/[a-z]/)) {
            setError('Password must contain at least one lowercase letter.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        // Clear previous errors
        setError('');

        createUser(email, password)
            .then(result => {
                // Show success toast/alert
                alert('Registration successful!');
                console.log(result);
            })
            .catch(error => {
                // Show error toast/alert
                alert('Registration failed. Please try again.');
                console.log(error);
            });
    };
    const [isSignIn, setIsSignIn] = useState(true);
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

    const toggle = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div id="container" className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
            {/* FORM SECTION */}
            <div className="row">
                {/* SIGN UP */}
                <div className="col align-items-center flex-col sign-up">
                    <div className="form-wrapper align-items-center">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                            {/* Display error message */}
                            {error && <p className="text-red-500">{error}</p>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="name"
                                    name="name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="photo url"
                                    name="photo"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

            <p className="text-xl text-center mb-4">Sign Up with</p>
            <ul className="flex justify-around px-20">
                <li className="text-2xl" onClick={googleLogin}><FcGoogle></FcGoogle></li>
                <li className="text-2xl" onClick={gitHubLogin}><FaGithub></FaGithub></li>
                <li className="text-2xl" onClick={gitHubLogin}><FaFacebook></FaFacebook></li>
            </ul>
            <button onClick={toggle}>{isSignIn ? 'Sign in here' : 'Sign up here'}</button>
          </div>
                    </div>
                </div>
                {/* END SIGN UP */}
                {/* SIGN IN */}
                <div className="col align-items-center flex-col sign-in">
                    <div className="form-wrapper align-items-center">
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
            <button onClick={toggle}>{isSignIn ? 'Sign in here' : 'Sign up here'}</button>
          </div>
                    </div>
                </div>
                {/* END SIGN IN */}
            </div>
            {/* END FORM SECTION */}
            {/* CONTENT SECTION */}
            <div className="row content-row">
            {/* SIGN IN CONTENT */}
            <div className="col align-items-center flex-col">
                <div className="text sign-in">
                    <p >Please Sign In </p>
                </div>
            </div>
            {/* END SIGN IN CONTENT */}
            {/* SIGN UP CONTENT */}
            <div className="col align-items-center flex-col">
                <div className="text sign-up">
                    <p>Please Sign Up</p>
                </div>
            </div>
            {/* END SIGN UP CONTENT */}
        </div>
            {/* END CONTENT SECTION */}
            <button onClick={toggle}> Button
                {isSignIn ? 'Sign up here' : 'Sign in here'}
            </button>
        </div>
    );
};

export default SigInUp;
