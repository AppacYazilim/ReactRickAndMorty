import { useInfiniteQuery } from "react-query";
import config from "../config";
import { EpisodesResponse } from "../types/responseTypes";



export default function useRickAndMortyEpisodes() {
  return useInfiniteQuery<EpisodesResponse>("episodes", (query) => fetch(query.pageParam ?? `${config.API_URL}/episode`).then(res => res.json()),
    { getNextPageParam: (lastPage, pages) => lastPage.info.next });
}