import React, {useEffect} from 'react';
import {Container} from "../../styles/styled.ts";
import SearchInput from "../../components/search-input";
import Header from "../../components/header";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import Nav from "../../components/nav";
import {getAllDiscounts} from "../../store/actions/discounts.actions.ts";
import {Discount, DiscountContainer, Discounts, DiscountsGroupTitle} from "./styled.ts";
import {useTranslation} from "react-i18next";

const DiscountsView: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {data, loading} = useSelector((state: RootState) => state.discountsReducer);

	useEffect(() => {
		dispatch(getAllDiscounts());
	}, [dispatch]);

	return (
		<>
			<Header/>
			<Container>
				<div>
					<SearchInput/>
				</div>
				{!loading && data.length > 0 && (
					<DiscountContainer>
						{data.map((group, index) => group.discounts.length > 0 && (
							<div key={index}>
								<DiscountsGroupTitle>
									<span>{t('show_all')}</span>
									<div>{group.title}</div>
								</DiscountsGroupTitle>
								<Discounts $border_color={group.border_color} $border_type={group.border_type}>
									{group.discounts.map((discount, index) => (
										<Discount key={index} $image={discount.image}>
											<div>%{discount.discount} تخفيض</div>
											<img src={discount.thumbnail} alt={group.title}/>
										</Discount>
									))}
								</Discounts>
							</div>
						))}
					</DiscountContainer>
				)}
			</Container>
			<Nav/>
		</>
	);
};

export default DiscountsView;