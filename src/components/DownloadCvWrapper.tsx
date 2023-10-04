import type { ReactNode } from "react";
import { downloadPdf } from "@utils/common";

type Props = {
  children: ReactNode;
};

const DownloadCvWrapper = ({ children }: Props) => {
  return <a onClick={downloadPdf}>{children}</a>;
};

export default DownloadCvWrapper;
