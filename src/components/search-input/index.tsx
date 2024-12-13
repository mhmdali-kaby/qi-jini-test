import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from "../../store";
import {getBestOffers, getNewProducts, getOffers, getSpecialOffers} from "../../store/actions/home.actions.ts";
import {Input, InputContainer} from "./styled.ts";
import SearchIcon from "../icons/search.icon.tsx";

const SearchInput: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(getOffers());
		dispatch(getBestOffers());
		dispatch(getNewProducts());
		dispatch(getSpecialOffers());
	}, [dispatch]);

	return (
		<InputContainer>
			<SearchIcon/>
			<Input type="text" placeholder="بحث ..."/>
		</InputContainer>
	);
};

export default SearchInput;