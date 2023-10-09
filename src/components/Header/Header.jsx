import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user,  logOut } = useContext(AuthContext);

  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()
  }

    const links = <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/service">Services</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li>
    </>

    return (
        <div className=" mt-4 mb-6">
       <div className="navbar bg-gray-200 py-4 px-4 w-[90%] text-center mx-auto ">
  <div className="navbar-canter mx-auto">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-3xl font-bold mr-12 ">HealthCare</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ?
      <button onClick={handleSignOut} className="btn">Log Out</button>
      :
      <Link to="/login">
        <button className="btn">Login</button>
      </Link>
    }
  </div>
</div>
        </div>
    );
};

export default Header;