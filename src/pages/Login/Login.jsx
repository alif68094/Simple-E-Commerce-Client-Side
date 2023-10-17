import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthProvider";

const Login = () => {

    const {signInUser} = useContext(AuthContext)
    const [logInError, setLogInError] = useState('')
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        setLogInError('')


        signInUser(email, password)
        .then(result => {
            console.log(result);
            e.target.reset();
            navigate('/')
            
        })
        .catch(error => {
            console.log(error);
            setLogInError("Email/Password Doesn't Match")
           
        })
    }

    const {googleSignIn} = useContext(AuthContext)
    const handleGoogle = () => {
            googleSignIn()
            .then(res => {
                console.log(res)
                navigate('/')
                
            })
            .catch(error => console.log(error))
    }

   
    return (
        <div className="hero min-h-screen bg-base-200">
           
                <div className="  rounded-lg pb-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className=" mx-auto mt-6">
                            <button className="hover:bg-black hover:text-white rounded px-16 font-medium border py-2 ">Login</button>
                        </div>
                        </form>
                        {
                            logInError && <p className="text-center text-red-600">{logInError}</p>
                        }
                        <p className="text-center">New Here? Please <Link to="/register" className="text-blue-600">Register</Link></p>
                        <p className="text-center">Or</p>
                        <p className="text-center text-blue-600"><button onClick={handleGoogle}>SignIn With Google</button></p>
                </div>
                
            </div>
        
    );
};

export default Login;