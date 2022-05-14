import { useQuery } from "react-query";
import { CharacterResponse } from "../types/responseTypes";




export default function useRickAndMortyCharacter(url: string) {
  return useQuery<CharacterResponse>(["character", url], () => fetch(url).then(res => res.json()));
}