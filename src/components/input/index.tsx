import React from 'react';
import {Input} from "./styled.ts";

interface InputComponent {
	placeholder: string,
	name: string,
}

const InputComponent: React.FC<InputComponent> = ({placeholder, name}) => {
	return (
		<>
			<Input type="text" placeholder={placeholder} name={name}/>
		</>
	);
};

export default InputComponent;