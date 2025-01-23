import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import FadeAnimation from "../animations/fade.tsx";

interface OrderSkeletonsProps {
	count: number
}

const OrderSkeletons: React.FC<OrderSkeletonsProps> = ({count}) => {
	return (
		Array(count).fill(null).map((_: null, index: number) => (
			<FadeAnimation key={index}>
				<Skeleton height={124} width={382} borderRadius={14}/>
			</FadeAnimation>
		))
	);
};

export default OrderSkeletons;