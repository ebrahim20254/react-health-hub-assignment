import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {id, image, service_description, service_name, price} = service || {}
    return (
        <div>
           <div className="card  gap-8 bg-gray-200 shadow-xl">
          <figure className="">
          <img src={image} alt="Shoes" className="rounded-xl " />
          </figure>
           <div className=" text-center">
           <h2 className="text-center text-2xl font-bold">{service_name}</h2>
          <p className="my-4">{service_description}</p>
           <h3><span className="text-xl font-semibold text-blue-600">Cost</span>: ${price}</h3>
          <button
             className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xl font-bold   uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100     active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-blue-400"
            type="button">
          <Link to={`/detail/${id}`}>Service Detail</Link>
          </button>
         </div>
       </div>
     </div>
    );
};

export default ServiceCard;