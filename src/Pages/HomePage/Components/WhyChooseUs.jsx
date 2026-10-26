
import { Plane, Headphones, ShieldCheck, Map, Heart } from "lucide-react";
import img1 from "../../../assets/bgimg.png";
import card from "../../../assets/pic4.jpg";
import card2 from "../../../assets/pic3.jpg";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Plane,
      title: "Best Travel Deals",
      desc: "Get the best prices on flights, hotels and packages.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "We're always here to help you.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      desc: "Your safety is our priority.",
    },
    {
      icon: Map,
      title: "Customized Packages",
      desc: "Tailor-made trips as per your needs.",
    },
  ];

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      {/* Background */}
      <img
        src={img1}
        alt="Travel background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-[1.5fr_1fr]">

        {/* Left Side */}
        <div>
          <h5 className="mb-2 text-sm font-semibold tracking-widest text-gray-600">
            WHY CHOOSE US
          </h5>

          <h2 className="text-3xl font-bold md:text-4xl">
            Your Trusted{" "}
            <span className="text-sky-600">Travel Partner</span>
          </h2>

          <p className="mt-3 text-gray-600">
            We make travel simple, safe and memorable with the best
            services and personalized experiences.
          </p>

          {/* Features */}
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex flex-col items-start gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-600 text-white">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="max-w-52 text-sm text-gray-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

<div className="relative mx-auto h-[350px] w-full max-w-[400px]">

  <img
    src={card}
    alt="Beach destination"
    className="absolute top-5 left-5 z-10
    h-52 w-60 rounded-md border-4 border-white
    object-cover shadow-xl rotate-[-5deg]"
  />

  <img
    src={card2}
    alt="Travel destination"
    className="absolute top-34 left-45 z-20
    h-52 w-60 rounded-md border-4 border-white
    object-cover shadow-xl rotate-[5deg]"
  />
  <div>
    <h3 className="text-blue-950 font-bold font-sans mt-85 text-2xl">Collect Moments <br /> Not Things <Heart /> </h3>
  </div>
</div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
