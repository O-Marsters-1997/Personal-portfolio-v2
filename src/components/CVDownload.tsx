import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CVDownload = ({ children }: Props) => {
  const downloadPdf = () => {
    console.log("hello");
    fetch("src/assets/ollyMarstersCv.pdf").then((response) =>
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Olly_Marsters.pdf";
        alink.click();
      })
    );
  };
  return <a onClick={downloadPdf}>{children}</a>;
};

export default CVDownload;
