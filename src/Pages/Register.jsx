import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./../providers/AuthProvider";
import Menu from "../Shared/Menu";

const Register = () => {
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

    return (
        <div>
            <Menu></Menu>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        
                    </div>
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
                        <p className="text-center mt-14">
                            Already have an account ?{" "}
                            <Link className="text-blue-950 font-bold" to="/signin">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
