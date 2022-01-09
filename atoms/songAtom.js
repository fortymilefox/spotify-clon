import { atom } from "recoil";

export const currentTrackIdState = atom({
  key: "currentTrackIdState",
  default: null, //default or initial value
});

export const isPlayingState = atom({
  key: "isPlayingState",
  default: false,
});