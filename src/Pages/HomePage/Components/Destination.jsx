import { Star } from "lucide-react";
import img1 from "../../../assets/pic1.jpg";
import img2 from "../../../assets/pic2.jpg";
import img3 from "../../../assets/pic3.jpg";
import img4 from "../../../assets/pic4.jpg";

const Destination = () => {
  return (
    <>
      <div className="text-center mt-10">
        <p className="text-gray-600 mb-5">TOP DESTINATION</p>
        <h1 className="text-4xl font-bold m-4">
          Popular <span className="text-sky-700">Destination</span>{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 m-4 mb-10">
        <div className="bg-white shadow-2xl rounded-2xl w-80 h-120">
          <img src={img1} alt="img" className="h-70 w-70 lg:w-80 rounded-2xl" />
          <div className=" px-10 py-6">
            <h3 className="font-bold text-2xl">Mumbai</h3>
            <p className="my-3">Maharastra</p>
            <p className="flex">
              {" "}
              <Star
                size={25}
                className="fill-yellow-400 text-yellow-500"
              />{" "}
              4.8(1.2k Review){" "}
            </p>
            <h4 className="text-sky-700 font-bold text-2xl"> ₹8,999</h4>
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
            <h3 className="font-bold text-2xl">Manali</h3>
            <p className="my-3">Himachal Pradesh</p>
            <p className="flex">
              {" "}
              <Star
                size={25}
                className="fill-yellow-400 text-yellow-500"
              />{" "}
              4.9(1.2k Review){" "}
            </p>
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
            <h3 className="font-bold text-2xl">Maldives</h3>
            <p className="my-3">International</p>
            <p className="flex">
              {" "}
              <Star size={25} className="fill-yellow-400 text-yellow-500" /> 4.7
              (1.5K Reviews){" "}
            </p>
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
            <h3 className="font-bold text-2xl">Paris</h3>
            <p className="my-3">France</p>
            <p className="flex">
              {" "}
              <Star size={25} className="fill-yellow-400 text-yellow-500" /> 4.8
              (980 Reviews){" "}
            </p>
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

export default Destination;
