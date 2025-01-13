import React from 'react';
import {Input} from "./styled.ts";

interface InputComponent {
	placeholder: string,
	name: string,
	color?: string,
}

const InputComponent: React.FC<InputComponent> = ({placeholder, name, color}) => {
	return (
		<Input type="text" placeholder={placeholder} name={name} $color={color}/>
	);
};

export default InputComponent;