import picture1 from '../../assets/operation.png'
import picture2 from '../../assets/doctor.pnj.webp'
import picture3 from '../../assets/rehabilitation.png'
import picture4 from '../../assets/services.pnj.webp'
import picture5 from '../../assets/card.jpeg'

const MedicalRoom = () => {
    return (
        <div className='my-12'>
            <h2 className="text-4xl text-center my-4 font-bold">Medical Care Rooms</h2>
          <div className=' lg:flex md:col-span-2 w-[80%] mx-auto my-8'>
            <div className="">
                {/* care-1  */}
                <div className=' flex justify-center items-center gap-8 order-1'>
                    <div>
                        <img className='w-[100px] rounded-xl bg-gray-200' src={picture1} alt="" />
                    </div>
                    <div>
                        <h2 className=' text-2xl font-bold'>Operation Theatre</h2>
                        <p className=''>A theater of operations is a military term for a specific geographic area where military actions and campaigns are conducted, often requiring joint and multinational coordination for success.</p>
                    </div>
                </div>

                {/* care-2  */}
                <div className=' flex justify-center items-center gap-8 order-2 my-4'>
                    <div>
                        <img className='w-[100px] rounded-xl bg-gray-200' src={picture2} alt="" />
                    </div>
                    <div>
                        <h2 className=' text-2xl font-bold'>Qualified Doctor</h2>
                        <p className=''>A qualified doctor is a healthcare professional with extensive medical training and the expertise to diagnose and treat a wide range of medical conditions, promoting the health and well-being of their patients. Their role is essential in the healthcare system.</p>
                    </div>
                </div>

                {/* <care-3>  */}
                <div className=' flex justify-center items-center gap-8 order-3 my-4'>
                    <div>
                        <img className='w-[100px] rounded-xl bg-gray-200' src={picture3} alt="" />
                    </div>
                    <div>
                        <h2 className=' text-2xl font-bold'>Rehabilitation Centre</h2>
                        <p className=''>Rehabilitation centers are dedicated facilities that provide a range of specialized services and therapies to help individuals recover from physical injuries, manage chronic illnesses, overcome substance abuse, and improve their overall quality of life..</p>
                    </div>
                </div>

                {/* care-4  */}
                <div className=' flex justify-center items-center gap-8 order-4 my-4'>
                    <div>
                        <img className='w-[100px] rounded-xl bg-gray-200' src={picture4} alt="" />
                    </div>
                    <div>
                        <h2 className=' text-2xl font-bold'>Emergency Services</h2>
                        <p className=''>Emergency services refer to the organizations and personnel responsible for responding to various emergencies, such as medical, fire, and rescue situations. They play a crucial role in safeguarding public safety and providing rapid assistance during crises.</p>
                    </div>
                </div>
                {/* doctor and patient image  */}
            </div>
            <div>
                 <img className=' rounded-xl h-[100%]' src={picture5} alt="" />
              </div>
        </div>
      </div> 
    );
};

export default MedicalRoom;