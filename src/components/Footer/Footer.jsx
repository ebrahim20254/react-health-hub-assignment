

const Footer = () => {
    return (
        <footer className="footer p-10 bg-blue-200 text-base-content">
        <nav>
          <header className="footer-title">Medical Care</header> 
          <a className="link link-hover">About</a> 
          <a className="link link-hover">About Services</a> 
          <a className="link link-hover">About Departments</a> 
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Contact Us</a>
        </nav> 
        <nav>
        <header className="footer-title">The Services</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Dental Surgery</a> 
          <a className="link link-hover">Diagnose & Research</a>
          <a className="link link-hover">Drug / Medicines</a>
        </nav> 
        <nav>
          <header className="footer-title">Departments</header> 
          <a className="link link-hover">Dental Care</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Dental Surgery</a> 
          <a className="link link-hover">Diagnose & Research</a>
          <a className="link link-hover">Drug / Medicines</a>
        </nav> 
        <form>
          <header className="footer-title">Newsletter</header> 
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label> 
            <div className="relative">
              <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    );
};

export default Footer;