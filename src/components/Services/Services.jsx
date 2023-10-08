import ServiceCard from "./ServiceCard";


const Services = ({services}) => {
    console.log(services);
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Our Services</h2>
            <p className="text-4xl font-bold text-center">We Provide Best Quality Treatment</p>
            <div className="my-6 w-[80%] mx-auto gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                        services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;