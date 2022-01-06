import { atom } from "recoil";

export const playlistState = atom({
  key: "playlistState",
  default: null,
});

export const playlistIdState = atom({
  //KEY MUST BE UNIQUE TO EACH ATOM
  key: "playlistIdState",
  default: '37i9dQZF1DX6AWGsjpYHPA'
});