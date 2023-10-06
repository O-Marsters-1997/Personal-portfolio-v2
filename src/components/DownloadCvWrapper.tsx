import type { ReactNode } from "react";
import { downloadPdf, accessibleOnClick } from "@utils/common";

interface Props {
  children: ReactNode;
}

const DownloadCvWrapper = ({ children }: Props) => {
  return <div {...accessibleOnClick(downloadPdf)}>{children}</div>;
};

export default DownloadCvWrapper;
