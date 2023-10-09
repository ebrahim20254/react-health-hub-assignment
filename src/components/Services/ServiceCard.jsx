import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {id, image, service_description, service_name, price} = service || {}
    return (
        <div>
            <div className="card  gap-8 bg-gray-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-6">{service_name}</h2>
    <p className="my-4">{service_description}</p>
    <button
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none bg-blue-400"
      type="button"
    >
      <Link to={`/detail/${id}`}>Service Detail</Link>
    </button>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;