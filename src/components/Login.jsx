import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, ',', password)
        
        // signIn user
        signInUser(email, password)
            .then(userCredential => {
                console.log(userCredential.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error)
            })
    }

    // google handle
    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(userCredential => {
                console.log(userCredential.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {/* Form */}
                        <form className="card-body" onSubmit={handleLogin}>
                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                {/* forget password */}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/* Login Button */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        {/*go to register page  */}
                        <div className="mb-5 ml-7">
                            <p className="text-sm font-bold">New User? Please <span><Link className="link link-secondary"  to={'/register'}>Register! </Link>here</span></p>
                        </div>
                        <div className="text-center mb-4">
                            <button onClick={handleGoogleLogIn} className="btn btn-ghost bg-purple-700">sign in with google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;