"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./ui/Card";
import fetchAnime from "@/actions/AnimeList";
import { SpinnerCircular } from "spinners-react";

export type Card = JSX.Element;
let page = 2;

export default function LoadMore() {
  const [data, setData] = useState<Card[]>([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res: any) => {
        setData([...data, ...res]);

        page++;
        console.log(page);
      });
    }
  }, [inView, data]);
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </div>
      <div ref={ref} className="flex justify-center">
        <SpinnerCircular size={100} />
      </div>
    </>
  );
}
