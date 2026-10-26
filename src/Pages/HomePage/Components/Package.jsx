import { Star } from "lucide-react";
import img1 from "../../../assets/images (10).jpg";
import img2 from "../../../assets/images (11).jpg";
import img3 from "../../../assets/images (12).jpg";
import img4 from "../../../assets/images (13).jpg";

const Package = () => {
  return (
    <>
      <div className="text-center mt-10">
        <p className="text-gray-600 mb-5">Our Packages</p>
        <h1 className="text-4xl font-bold ">
          Browser Our <span className="text-sky-700"> Travel Package</span>{" "}
        </h1>
                  <p className=" mb-5">Handpicked packages for an amazing travel experience.</p>

      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 m-4 mb-10">
        <div className="bg-white shadow-2xl rounded-2xl w-80 h-120">
          <img src={img1} alt="img" className="h-70 w-70 lg:w-80 rounded-2xl" />
          <div className=" px-10 py-6">
            <h3 className="font-bold text-2xl">Himalayan Tour</h3>
            
            <h4 className="text-sky-700 font-bold text-2xl"> ₹12,999</h4>
            <div className="flex justify-between items-center mb-3">
              <p>4 Days /3 Night</p>
              <button className=" bg-gray-300 font-bold  text-sky-600 text-xl text-center p-1 rounded-full">
                →
              </button>
            </div>{" "}
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-2xl w-70 lg:w-80 h-120">
          <img src={img2} alt="img" className="h-70 w-70 lg:w-80 rounded-2xl" />
          <div className=" px-10 py-6">
            <h3 className="font-bold text-2xl">Kerala Tour</h3>

            <h4 className="text-sky-700 font-bold text-2xl"> ₹6,999</h4>
            <div className="flex justify-between items-center mb-3">
              <p>4 Days /3 Night</p>
              <button className=" bg-gray-300 font-bold  text-sky-600 text-xl text-center p-1 rounded-full">
                →
              </button>
            </div>{" "}
          </div>
        </div>
        <div className="bg-white shadow-2xl rounded-2xl w-80 h-120">
          <img src={img3} alt="img" className="h-70 w-70 lg:w-80 rounded-2xl" />
          <div className=" px-10 py-6">
            <h3 className="font-bold text-2xl">Rajasthan Tour</h3>
            
            <h4 className="text-sky-700 font-bold text-2xl"> ₹55,999</h4>
            <div className="flex justify-between items-center mb-3">
              <p>4 Days /3 Night</p>
              <button className=" bg-gray-300 font-bold  text-sky-600 text-xl text-center p-1 rounded-full">
                →
              </button>
            </div>{" "}
          </div>
        </div>
        <div className="bg-white shadow-2xl rounded-2xl w-80 h-120">
          <img src={img4} alt="img" className="h-70 w-70 lg:w-80 rounded-2xl" />
          <div className=" px-10 py-6">
            <h3 className="font-bold text-2xl">Europe Tour</h3>
          
            <h4 className="text-sky-700 font-bold text-2xl"> ₹28,999</h4>
            <div className="flex justify-between items-center mb-3">
              <p>4 Days /3 Night</p>
              <button className=" bg-gray-300 font-bold  text-sky-600 text-xl text-center p-1 rounded-full">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
