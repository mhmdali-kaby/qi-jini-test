import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import FadeAnimation from "../animations/fade.tsx";

interface HomeCategoriesSkeletonsProps {
	count: number
}

const HomeCategoriesSkeletons: React.FC<HomeCategoriesSkeletonsProps> = ({count}) => {
	return (
		Array(count).fill(null).map((_: null, index: number) => (
			<FadeAnimation key={index}>
				<Skeleton height={36} width={100} borderRadius={8}/>
			</FadeAnimation>
		))
	);
};

export default HomeCategoriesSkeletons;