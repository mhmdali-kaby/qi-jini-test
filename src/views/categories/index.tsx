import React, {useEffect} from 'react';
import {Container} from "../../styles/styled.ts";
import SearchInput from "../../components/search-input";
import {CategoriesContainer, Category, CategoryCount, CategoryText, CategoryTitle} from "./styled.ts";
import Header from "../../components/header";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getAllCategories} from "../../store/actions/categories.actions.ts";
import Nav from "../../components/nav";
import {useTranslation} from "react-i18next";

const CategoriesView: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {data, loading} = useSelector((state: RootState) => state.categoriesReducer);

	useEffect(() => {
		dispatch(getAllCategories());
	}, [dispatch]);

	return (
		<>
			<Header/>
			<Container>
				<div>
					<SearchInput/>
				</div>
				{!loading && data.length > 0 && (
					<CategoriesContainer>
						{data.map((category, index) => (
							<Category $image={category.image} key={index} $is_right={category.is_right}>
								<CategoryText>
									<CategoryTitle>
										{category.title}
									</CategoryTitle>
									<CategoryCount>
										<span>
											{t('product')}
										</span>
										<span>
											{category.products}
										</span>
									</CategoryCount>
								</CategoryText>
							</Category>
						))}
					</CategoriesContainer>
				)}
			</Container>
			<Nav/>
		</>
	);
};

export default CategoriesView;