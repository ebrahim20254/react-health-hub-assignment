import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import MedicalRoom from "../MedicalRoom/MedicalRoom";
import OurDoctor from "../OurDoctor/OurDoctor";
import Services from "../Services/Services";

const Home = () => {
    const services = useLoaderData()
    // console.log(services);
    return (
        <div className="">
            <Banner></Banner>
            <MedicalRoom></MedicalRoom>
            <OurDoctor></OurDoctor>
            <Services services={services}></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;