import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { RequisicionDocument } from "../../components/printDocument/printDocument";
import { useParams } from "react-router";
import { FloatButton } from "../../components/floatButton/floatButton";
import { faDownload, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const handlePDF = (input: string) => {
  const element = document.querySelector(input) as HTMLElement;
  html2canvas(element).then((canvas: any) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("requisición.pdf");
  });
};

export const DownloadMedia = () => {
  const { catalog } = useParams();
  return (
    <>
      <div id="printArea">
        <RequisicionDocument catalog={catalog} />
      </div>
      <FloatButton
        backgroundColor="green"
        width="50px"
        icon={faArrowDown}
        color="white"
        clickHandler={() => handlePDF("#printArea")}
      />
    </>
  );
};
