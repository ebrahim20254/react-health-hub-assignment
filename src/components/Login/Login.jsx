import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";


const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [success, setSuccess] = useState()
    const {signIn} = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();
    console.log('location in the login page', location);

    const handleLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        if(password.length < 6){
          setLoginError('Password should be at least 6 characters or long ');
          return;
        }
        else if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
          setLoginError(" password doesn't match")
        }
        else{
          toast("Wow so easy success!");
        }

        // reset user 
        setLoginError('');
        setSuccess('')

        // create signIn 
        signIn(email, password)
        .then(result =>{
            console.log(result.user)
            setSuccess('user successfully')

            // navigate user 
            navigate(location?.state ? location.state : '/');
           
        })
        .catch(error =>{
            console.error(error)
            setLoginError(error.message)
        })
    }
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
      signInWithPopup(auth, provider)
      .then(result=>{
        const user =  result.user;
        console.log(user);
      })
      .catch(error=>{
        console.log('error', error.message);
      })
    }
    return (
        <div className="hero-content flex-col lg:flex-row-reverse my-20">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          { 
             loginError && <p className="text-red-600">{loginError}</p>
          }
          {
            success && <p className=" text-green-600">{success}</p>
          }
           <ToastContainer />
          <form onSubmit={handleLogin} className="card-body ">
            <h2 className=" text-center text-3xl font-semibold">Please Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <button onClick={handleGoogleSignIn} className="btn btn-secondary"><FaGoogle></FaGoogle> Google</button>
          </form>
          <p className=" text-center mb-4">Do not have an account <Link className=" text-blue-600 font-bold" to="/register">Register</Link></p>
        </div>
      </div>
    );
};

export default Login;