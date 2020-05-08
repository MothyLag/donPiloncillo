import React from "react";
import {IDropdownButtonBProps} from "./dropdownButtonB.types";
import { ButtonContainer, PrincipalButton, SecundaryButton } from "./dropdownButtonB.styles";
import { useDispatch } from "react-redux";
import { CHANGE_DATA } from "../../utils/state.actions";

export const DropdownButtonB = (props: IDropdownButtonBProps) =>{
	const {text, options=[], clickHandler} = props;
	const dispatch = useDispatch();
	return(
		<ButtonContainer>
			<PrincipalButton onClick={clickHandler} >{text}</PrincipalButton>
			<div>
			{options.map((option)=>{
				return <SecundaryButton onClick={()=> dispatch({type: CHANGE_DATA, payload: {newData: {option} } }) } >{option}</SecundaryButton>
			})}
			</div>
		</ButtonContainer>
	);
}