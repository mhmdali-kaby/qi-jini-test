import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import FadeAnimation from "../animations/fade.tsx";

interface HomeOffersSkeletonsProps {
	count: number
}

const HomeOffersSkeletons: React.FC<HomeOffersSkeletonsProps> = ({count}) => {
	return (
		Array(count).fill(null).map((_: null, index: number) => (
			<FadeAnimation key={index}>
				<Skeleton height={180} width={304} borderRadius={24}/>
			</FadeAnimation>
		))
	);
};

export default HomeOffersSkeletons;