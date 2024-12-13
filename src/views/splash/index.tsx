import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from "../../store";
import {getSplashes} from "../../store/actions/splash.actions.ts";
import {
	SplashAction,
	SplashContainer,
	SplashContent,
	SplashDescription,
	SplashDot,
	SplashDots,
	SplashImage,
	SplashTitle
} from "./styled.ts";
import {useNavigate} from "react-router-dom";
import {HomeRoute} from "../../router/routes.ts";
import RightArrowIcon from "../../components/icons/right-arrow.icon.tsx";

const SplashView: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const {splashes, loading} = useSelector((state: RootState) => state.splashReducer);
	const [currentIndex, setCurrentIndex] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getSplashes());
	}, [dispatch]);

	const handleNext = () => {
		if (currentIndex < splashes.length - 1) {
			setCurrentIndex(currentIndex + 1);
		} else {
			navigate(HomeRoute);
		}
	};

	return (
		!loading && splashes.length > 0 ? (
				<SplashContainer>
					<SplashImage src={splashes[currentIndex].image}/>
					<SplashContent>
						<SplashTitle>
							{splashes[currentIndex].title}
						</SplashTitle>
						<SplashDescription>
							{splashes[currentIndex].description}
						</SplashDescription>
					</SplashContent>
					<SplashAction>
						<SplashDots>
							{splashes.map((_, index) => {
								return (
									<SplashDot
										$is_active={Number(currentIndex === index)}
										onClick={() => setCurrentIndex(index)}
										key={index}
									/>
								)
							})}
						</SplashDots>
						<div onClick={handleNext}>
							<RightArrowIcon/>
						</div>
					</SplashAction>
				</SplashContainer>
			)
			:
			(
				<div>Loading</div>
			)
	);
};

export default SplashView;