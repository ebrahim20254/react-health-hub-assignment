/* eslint-disable no-constant-condition */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess]  = useState('');
    const { createUser } = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        if(password.length < 6){
          setRegisterError('Password should be at least 6 characters or long ');
          return;
        }
        else if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
          setRegisterError(" password doesn't match")
        }
        else{
          toast("Wow so easy success!");
        }

        // reset user 
        setRegisterError('');
        setSuccess('');

        // create user 
        createUser(email, password)
        .then(result =>{
          toast("Wow so easy success!", result);
            setSuccess('user  created successfully')
        })
        .catch(error =>{
            console.error(error)
            setRegisterError(error.message)
        })
    }
    return (
        <div className="hero-content flex-col lg:flex-row-reverse my-20">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <p>{registerError}</p>
          <form onSubmit={handleRegister} className="card-body ">
            <h2 className=" text-center text-3xl font-semibold">Please Register</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {
            registerError && <p className=" text-red-500">{registerError}</p>
          }
          {
            success && <p className=" text-green-700">{success}</p>
          }
          <ToastContainer />
         <p className=" text-center mb-4">Already have an account? <Link className=" text-blue-600 font-bold" to="/login">Login</Link></p>
        </div>
      </div>
    );
};

export default Register;