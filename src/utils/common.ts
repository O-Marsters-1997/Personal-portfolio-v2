import type { MapStore } from "nanostores";
import { storeMap } from "@utils/nanostore";

export const downloadPdf = async () => {
  const response = await fetch("src/assets/ollyMarstersCv.pdf");
  const blob = await response.blob();
  const fileURL = window.URL.createObjectURL(blob);
  let alink = document.createElement("a");
  alink.href = fileURL;
  alink.download = "Olly_Marsters.pdf";
  alink.click();
};

export const toggleStoreValue = (
  store: MapStore<Record<string, any>>,
  storeValue: {
    key: string;
    value: any;
  }
) => {
  store.set({
    ...store,
    storeValue,
  });
};

export const toggleDarkTheme = () => {
  storeMap.set({
    ...storeMap,
    darkMode: !storeMap.get().darkMode,
  });
};
