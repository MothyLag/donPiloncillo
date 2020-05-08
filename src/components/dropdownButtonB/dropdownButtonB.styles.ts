import styled from "styled-components";

export const ButtonContainer = styled.div`
	display:inline-block;
    position:relative;
    div{
    	visibility:hidden;
    	position:absolute;
	    min-width:100%;
	    opacity:0;
	    transition:.3s;
    }
    :hover div{
    	width: 100%;
    	visibility:visible;
    	opacity:1;
    }


	`;

export const PrincipalButton = styled.button`
	border:none;
	border-radius: 25px; 
    padding:8px 16px;
    background: rgba(234, 97, 97, .8);
    color: #EBEBEB;
    color:white;
    transition:.3s;
    cursor:pointer;
	
`;

export const SecundaryButton = styled.button`
	width: 100%;
	border:none;
	border-radius: 25px; 
    padding:8px 16px;
    margin-top: 10px;
    background: rgba(234, 97, 97, .9);
    color: #EBEBEB;
    transition:.3s;
    cursor:pointer;
    :hover{
    	background: #000000;
    }
	
`;