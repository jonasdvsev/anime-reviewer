import Image from "next/image";
import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import { motion } from "framer-motion";
import { MotionDiv } from "./MotionDiv";
import { easeIn } from "framer-motion/dom";
export default function AnimeCard({
  image,
  name,
  score,
  index,
  episodes,
  episodes_aired,
  kind,
}: any) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <MotionDiv
      variants={variants}
      initial={"hidden"}
      animate={"visible"}
      transition={{ delay: index * 0.25, ease: "easeInOut", duration: 0.5 }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-60 hover:scale-110 hover:cursor-pointer "
    >
      <div className="relative w-full h-[37vh] ">
        <Image
          src={`https://shikimori.one${image}`}
          alt={name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl  w-full">{name}</h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">{kind}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-base text-white font-bold">
              {episodes || episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <StarRateIcon />
            <p className="text-base font-bold text-[#FFAD49]">{score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export const AnimeTitle = ({ children }: { children: string }) => {
  return <p className="text-white line-clamp-1">{children}</p>;
};
