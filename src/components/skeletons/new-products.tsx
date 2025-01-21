import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import FadeAnimation from "../animations/fade.tsx";

interface NewProductsSkeletonsProps {
	count: number
}

const NewProductsSkeletons: React.FC<NewProductsSkeletonsProps> = ({count}) => {
	return (
		Array(count).fill(null).map((_: null, index: number) => (
			<FadeAnimation key={index}>
				<Skeleton height={170} borderRadius={24}/>
			</FadeAnimation>
		))
	);
};

export default NewProductsSkeletons;