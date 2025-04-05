// import React from "react";
// import "./Hero.css"; // we'll add the marquee animation here

// const Hero = () => {
//   return (
//     <section className="mb-8 relative overflow-hidden">
//       {/* Hero Image */}
//       <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
//         <img
//           src="https://public.readdy.ai/ai/img_res/78bc4414b6f774f7f351e588591bf300.jpg"
//           alt="Collection of T-shirts"
//           className="w-full h-full object-cover object-top"
//         />
//       </div>

//       {/* Scrolling Banner */}
//       <div className="w-full bg-yellow-300 py-2 overflow-hidden">
//         <div className="flex whitespace-nowrap animate-marquee">
//           <span className="mx-2 font-medium">• NEW SEASON</span>
//           <span className="mx-2 font-medium">• %20 DISCOUNT</span>
//           <span className="mx-2 font-medium">• NEW SEASON</span>
//           <span className="mx-2 font-medium">• %20 DISCOUNT</span>
//           <span className="mx-2 font-medium">• NEW SEASON</span>
//           <span className="mx-2 font-medium">• %20 DISCOUNT</span>
//           <span className="mx-2 font-medium">• NEW SEASON</span>
//           <span className="mx-2 font-medium">• %20 DISCOUNT</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="mb-8 relative overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-full">
        <img
          src="https://public.readdy.ai/ai/img_res/78bc4414b6f774f7f351e588591bf300.jpg"
          alt="Collection of T-shirts"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Scrolling Banner */}
      <div className="w-full bg-yellow-300 py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="mx-2 font-medium">• NEW SEASON</span>
          <span className="mx-2 font-medium">• %20 DISCOUNT</span>
          <span className="mx-2 font-medium">• NEW SEASON</span>
          <span className="mx-2 font-medium">• %20 DISCOUNT</span>
          <span className="mx-2 font-medium">• NEW SEASON</span>
          <span className="mx-2 font-medium">• %20 DISCOUNT</span>
          <span className="mx-2 font-medium">• NEW SEASON</span>
          <span className="mx-2 font-medium">• %20 DISCOUNT</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
