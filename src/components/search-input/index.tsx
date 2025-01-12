import React from 'react';
import {Input, InputContainer} from "./styled.ts";
import SearchIcon from "../icons/search.icon.tsx";
import {useTranslation} from "react-i18next";

const SearchInput: React.FC = () => {
	const {t} = useTranslation();

	return (
		<InputContainer>
			<SearchIcon/>
			<Input type="text" placeholder={`${t('search')} ...`}/>
		</InputContainer>
	);
};

export default SearchInput;