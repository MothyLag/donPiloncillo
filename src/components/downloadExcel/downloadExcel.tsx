import React from "react";
import ReactExport from "react-export-excel";
//declare modu(le 'react-export-excel';
import { IDownloadExcel } from "./downloadExcel.types";
import { CuteButton } from "../../components/cutebutton/cutebutton";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export const DownloadExcel = (props: IDownloadExcel) => {
	const { text = "Descargar", arreglo} = props;
	return(
		
			<ExcelFile element={<button>{text}</button> }>
			{
				Object.values(arreglo).map((option)=>{
					Object.keys(arreglo).map((header: any, index: number)=>{
						return(
							<ExcelSheet data={arreglo[header]} name={header} >
								{ 

									Object.values(arreglo[header]).map((option2)=>{
										Object.keys(arreglo[header]).map((header2: any, index: number)=>{
											return(<ExcelColumn label={header2} value={header2} />);
										})
									})
								}
							</ExcelSheet>
						);
					})

				})
			}
			</ExcelFile>
		
	);
}