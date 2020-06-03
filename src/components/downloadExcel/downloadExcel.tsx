import React from "react";
import ReactExport from "react-export-excel";
//declare modu(le 'react-export-excel';
import { IDownloadExcel } from "./downloadExcel.types";
import { CuteButton } from "../../components/cutebutton/cutebutton";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
export const DownloadExcel = (props: IDownloadExcel) => {
  const { text = "Descargar", arreglo } = props;
  const sheetsName = Object.keys(arreglo).map((res) => res);
  const aux = Object.values(arreglo)[0] as any;
  const labels = Object.keys(aux[0]);
  console.log(labels);
  return (
    <ExcelFile element={<button type="button">{text}</button>}>
      {Object.values(arreglo).map((option: any, index: number) => {
        return (
          <ExcelSheet data={option} name={sheetsName[index]}>
            {labels.map((item: any) => {
              return <ExcelColumn label={item} value={item} />;
            })}
          </ExcelSheet>
        );
      })}
    </ExcelFile>
  );
};
