import type { ReactNode } from "react";
import { downloadPdf } from "@utils/common";

type Props = {
  children: ReactNode;
};

const DownloadCvWrapper = ({ children }: Props) => {
  return <div onClick={downloadPdf}>{children}</div>;
};

export default DownloadCvWrapper;
