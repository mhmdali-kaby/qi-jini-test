import React, {useEffect, useState} from 'react';
import SearchInput from "../../components/search-input";
import {
	FilterIconContainer,
	SearchContainer
} from "./styled.ts";
import FilterIcon from "../../components/icons/filter.icon.tsx";
import {Container} from "../../styles/styled.ts";
import ClickableButton from "../../components/clickable-button";
import GlobalFilters from "../../components/global-filters";
import FilterCategoriesComponent from "./components/filter-categories-component.tsx";
import OffersComponent from "./components/offers-component.tsx";
import OffersProductsComponent from "./components/offers-products-component.tsx";
import NewProductsComponent from "./components/new-products-component.tsx";

const HomeView: React.FC = () => {
	const [openFilters, setOpenFilters] = useState(false);

	useEffect(() => {
		if (openFilters) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [openFilters]);

	return (
		<>
			<Container>
				<SearchContainer>
					<ClickableButton onClick={() => setOpenFilters(true)}>
						<FilterIconContainer>
							<FilterIcon/>
						</FilterIconContainer>
					</ClickableButton>
					<SearchInput/>
				</SearchContainer>
				<FilterCategoriesComponent/>
				<OffersComponent/>
				<OffersProductsComponent/>
				<NewProductsComponent/>
				<OffersProductsComponent isSpecialOffers/>
				<NewProductsComponent isLight/>
			</Container>
			<GlobalFilters isOpen={openFilters} onClose={() => setOpenFilters(false)}/>
		</>
	);
};

export default HomeView;