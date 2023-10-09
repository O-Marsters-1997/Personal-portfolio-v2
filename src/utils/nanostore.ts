import { map } from "nanostores";

export const storeMap = map<Record<string, any>>({
  mobileNavigationOpen: false,
  darkMode: true,
});
