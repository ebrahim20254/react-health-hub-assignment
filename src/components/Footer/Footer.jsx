

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-700 w-[90%] mx-auto mt-12 text-xl text-white rounded-xl">
        <nav>
          <header className=" text-blue-600 font-bold text-2xl ">Medical Care</header> 
          <a className="text-sm ">About</a> 
          <a className="text-sm ">Services</a>
          <a className="text-sm ">Contact Us</a>
        </nav> 
        <nav>
        <header className="text-blue-600 font-bold text-2xl">The Services</header> 
          <a className="text-sm ">Hematology</a> 
          <a className="text-sm ">Emergency medicine</a> 
          <a className="text-sm ">Dental Surgery</a> 
        </nav> 
        <nav>
          <header className="text-blue-600 font-bold text-2xl">Departments</header> 
          <a className="text-sm ">Department of Orthopaedics</a> 
          <a className="text-sm ">Diagnose & Research</a>
          <a className="text-sm ">Drug / Medicines</a>
        </nav> 
        <form>
          <header className="text-blue-600 font-bold text-2xl">Newsletter</header> 
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="text-white">Enter your email address</span>
            </label> 
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </fieldset>
          <p className=" text-xs my-4">Copyright © 2023 - All right reserved</p>
        </form>
      </footer>
      
    );
};

export default Footer;