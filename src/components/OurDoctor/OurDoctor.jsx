 import doctor1 from '../../assets/pleased-middle-aged-male-doctor.jpg'
 import doctor2 from '../../assets/happy-young-female-doctor.jpg'
 import doctor3 from '../../assets/portrait-confident-male.jpg'
 import doctor4 from '../../assets/young-female-doctor.jpg'

const OurDoctor = () => {
    return (
        <div>
            <div className=" text-center">
            <button className=" bg-gray-200  rounded-full  px-6 py-2 text-xl">Doctors</button>
                <h2 className="text-4xl font-bold">Our Experience Doctors</h2>
            </div>
           <div data-aos="zoom-out-right" className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8 gap-8  w-[80%] mx-auto'>
             {/* card -1 */}
             <div className="card bg-base-100 shadow-xl">
               <figure><img src={doctor1} alt="Shoes" /></figure>
               <div className="card-body">
               <h2 className="card-title text-2xl font-bold">Dr. James Anderson</h2>
               <p className='font-bold'><span className=" text-blue-600 text-xl">Department</span> : Neurology</p>
               <div className="card-actions justify-end">
               <p>Neurology explores the intricate workings of the nervous system, diagnosing and treating conditions affecting the brain, spinal cord, and nerves.</p>
               </div>
              </div>
             </div>
             {/* card -2 */}
             <div className="card bg-base-100 shadow-xl">
               <figure><img src={doctor2} alt="Shoes" /></figure>
               <div className="card-body">
               <h2 className="card-title text-2xl font-bold">Dr. Emily Smith</h2>
               <p className='font-bold'><span className=" text-blue-600 text-xl">Department</span> : Pediatrics</p>
               <p>Pediatrics is a medical specialty dedicated to children's health, offering care and guidance from infancy through adolescence for their well-being.</p>
              </div>
             </div>
             {/* card -3 */}
             <div className="card bg-base-100 shadow-xl">
               <figure><img src={doctor3} alt="Shoes" /></figure>
               <div className="card-body">
               <h2 className="card-title text-2xl font-bold">Dr. Benjamin Taylor</h2>
               <p className='font-bold'><span className=" text-blue-600 text-xl">Department</span> : Dermatology</p>
               <p>Dermatology focuses on skin health, diagnosing and treating conditions such as acne, eczema, and skin cancer for optimal dermatological care.</p>
              </div>
             </div>
             {/* card -4 */}
             <div className="card bg-base-100 shadow-xl">
               <figure><img src={doctor4} alt="Shoes" /></figure>
               <div className="card-body">
               <h2 className="card-title text-2xl font-bold">Dr. Sarah Martinez</h2>
               <p className='font-bold'><span className=" text-blue-600 text-xl">Department</span> :  Obstetrics and Gynecology</p>
               <p>Obstetrics and Gynecology is a medical field specializing in women's reproductive health, covering pregnancy, childbirth, and gynecological care.</p>
              </div>
             </div>
         </div>
      </div>
    );
};

export default OurDoctor;