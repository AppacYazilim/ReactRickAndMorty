import CharacterModel from "../models/characterModel";
import EpisodeModel from "../models/episodeModel";

export interface Response<T> {
  info:    Info;
  results: T;
}

export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export type EpisodesResponse = Response<EpisodeModel[]>;
export type EpisodeResponse = EpisodeModel;
export type CharacterResponse = CharacterModel;