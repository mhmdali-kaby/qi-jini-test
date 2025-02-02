import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import FadeAnimation from "../animations/fade.tsx";

interface HomeOffersProductsSkeletonsProps {
	count: number
}

const HomeOffersProductsSkeletons: React.FC<HomeOffersProductsSkeletonsProps> = ({count}) => {
	return (
		Array(count).fill(null).map((_: null, index: number) => (
			<FadeAnimation key={index}>
				<Skeleton height={302} borderRadius={8}/>
			</FadeAnimation>
		))
	);
};

export default HomeOffersProductsSkeletons;