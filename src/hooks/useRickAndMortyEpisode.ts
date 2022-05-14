import { useQuery } from "react-query";
import { EpisodeResponse } from "../types/responseTypes";

export default function useRickAndMortyEpisode(url: string) {
  return useQuery<EpisodeResponse>(["episode", url], () => fetch(`${url}`).then(res => res.json()));
}