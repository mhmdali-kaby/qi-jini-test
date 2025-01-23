import React, {useEffect} from "react";
import {FilterCategoriesContainer, FilterCategory} from "../styled.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import {getHomeFilterCategories} from "../../../store/actions/categories.actions.ts";
import HomeCategoriesSkeletons from "../../../components/skeletons/home-categories.tsx";
import FadeAnimation from "../../../components/animations/fade.tsx";
import {AnimatePresence} from "framer-motion";

const FilterCategoriesComponent: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const {filterCategories} = useSelector((state: RootState) => state.homeReducer);

	useEffect(() => {
		if (filterCategories.data.length === 0 && !filterCategories.loading && !filterCategories.error)
			dispatch(getHomeFilterCategories());
	}, [dispatch, filterCategories]);

	return (
		<AnimatePresence>
			<FilterCategoriesContainer className="hidden-scroll">
				{filterCategories.loading ?
					<HomeCategoriesSkeletons count={5}/>
					:
					filterCategories.data.map((category, index) => (
						<FadeAnimation key={index}>
							<FilterCategory>{category.title}</FilterCategory>
						</FadeAnimation>
					))
				}
			</FilterCategoriesContainer>
		</AnimatePresence>
	);
};

export default FilterCategoriesComponent;