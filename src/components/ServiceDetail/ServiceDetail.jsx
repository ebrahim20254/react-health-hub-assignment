import { Link } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";


const ServiceDetail = () => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/zGfc56j/health-Center.jpg" alt="Shoes" className="rounded-xl w-[60%]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className=" text-3xl font-bold">HealthCare</h2>
    <p className="w-[50%] text-xl">Medical healthcare promotes well-being through prevention, diagnosis, treatment, and support. It encompasses diverse fields like medicine, nursing, and therapy to enhance physical and mental health.</p>
    <div className="card-actions">
      <button className="btn btn-primary px-8 my-4"><Link to="/">About Us</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceDetail;