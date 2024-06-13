import React from "react";

export default function Hero() {
  return (
    <section
      className="h-[45rem] w-full max-w-[1920px] flex justify-center shadow-xl "
      style={{
        backgroundImage:
          "linear-gradient(rgba(123, 119, 121, 0.8), rgba(20, 20, 20, 0.8)), url(/hero-image.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundPosition: "center",
        background: "linear-gradient",
      }}
    >
      <div className="flex flex-col justify-center items-center lg:items-end w-full lg:pr-10 max-w-[1440px] ">
        <p className="text-slate-300 font-semibold text-5xl lg:text-9xl font-serif lg:pr-80">
          Anime
        </p>
        <p className="text-slate-300 font-semibold text-5xl lg:text-9xl font-serif">
          Reviewer
        </p>
      </div>
    </section>
  );
}
