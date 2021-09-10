import { AppType } from "@/shared/interfaces";
import { IRootState } from "./../../interfaces";

export const state: IRootState = {
  root: true,
  version: "0.0.1",
  userlists: [],
  deviceType: AppType.MOBILE_WEB
};
