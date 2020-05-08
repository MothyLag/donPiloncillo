import React from "react";
import {IDropdownButtonProps} from "./dropdownbutton.types";
import {SelectStd, OptionStd} from "./dropdownbutton.styles";

export const DropdownButton = (props: IDropdownButtonProps) =>{
	const { text, contentSelect=[], clickHandler, placeholder } = props;
	return(
		<SelectStd
			value={text}
		>
			<OptionStd disabled>{placeholder}</OptionStd>
			{contentSelect.map((option)=>{
				return <OptionStd>{option}</OptionStd>
			})}
		</SelectStd>
	);
}