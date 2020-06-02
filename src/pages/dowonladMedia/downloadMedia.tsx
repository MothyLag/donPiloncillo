import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { RequisicionDocument } from "../../components/printDocument/printDocument";

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
  return (
    <>
      <div id="printArea">
        <RequisicionDocument />
      </div>
      <button onClick={() => handlePDF("#printArea")}>create pdf</button>
    </>
  );
};
