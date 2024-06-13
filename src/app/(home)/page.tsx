import fetchAnime from "@/actions/AnimeList";
import LoadMore from "@/components/LoadMore";
import Card from "@/components/ui/Card";
import { Main } from "next/document";
import Image from "next/image";

export default async function Home() {
  const data = await fetchAnime(1);
  return (
    <main className=" flex justify-center flex-col m py-10 gap-10 md:gap-20">
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}
