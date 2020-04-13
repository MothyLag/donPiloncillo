import {ISubmitButtonProps} from './submitbutton.types';
import { SubmitButton, Icono } from './submitbutton.styles';

export const ButtonSubmit = (props: ISubmitButtonProps	) => {
	const {text, icono='none'} = props;
	return(
		<>
		{icono!=='none' ? <SubmitButton><Icono src={icono} /> {text} </SubmitButton> : <SubmitButton>{text}</SubmitButton> }
		</>
	);
}