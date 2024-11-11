import axios from "axios";

import { Platform } from "react-native";

const BASE_URL_API =
  Platform.OS === "android" ? "http://10.0.2.2:3000" : "http://localhost:3000";

export const myAxios = axios.create({
  baseURL: `${BASE_URL_API}`,
});
