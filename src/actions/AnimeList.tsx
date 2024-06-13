import AnimeCard from "@/components/ui/Card";
import React from "react";

export default async function fetchAnime(page: Number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=12&order=ranked`
  );

  const data = await response.json();

  return data.map((anime: any, index: number) => (
    <AnimeCard
      key={anime.id}
      name={anime.name}
      image={anime.image.original}
      score={anime.score}
      index={index}
      episodes={anime.episodes}
      episodes_aired={anime.episodes_aired}
      kind={anime.kind}
    />
  ));
}
