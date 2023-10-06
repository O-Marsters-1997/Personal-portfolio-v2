import { map } from "nanostores";

export const storeMap = map<Record<string, boolean>>({
  mobileNavigationOpen: false,
  darkMode: true,
});
