import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Hooks/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();



    const handleRegister = e => {

        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;



        setSuccess('')
        setRegisterError('')

        if (password.length < 6) {
            setRegisterError('password Should be At Least 6 Characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Password Should Have At Least One Uppercase")
            return;
        }
        else if (!/[!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/.test(password)) {
            setRegisterError('You Should Have At Least One Special Character')
            return;
        }
        else {
            setRegisterError("");
            setSuccess(toast("Registration Successful!!"))
        }


        createUser(email, password)
            .then(result => {
                console.log(result);
                navigate('/');

            })
            .catch(error => {
                console.log(error);

            })




    }


    return (
        <div>
            <div className="hero min-h-screen">

                

                <div className="rounded-lg pb-8 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
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
                        <div className="mx-auto mt-6">
                            <button className="hover:bg-[#129cb8] hover:text-white rounded px-16 font-medium border py-2 ">Register</button>
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-600 text-center">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-600 text-center">{success}</p>
                    }
                    <p className="text-center">Already Have an account? Please <Link to="/login" className="text-[#129cb8]">Login</Link></p>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;