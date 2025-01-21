import React, {useEffect} from "react";
import {
	OffersContainer
} from "../styled.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import FadeAnimation from "../../../components/animations/fade.tsx";
import {getOffers} from "../../../store/actions/home.actions.ts";
import {useTranslation} from "react-i18next";
import HomeOffersSkeletons from "../../../components/skeletons/home-offers.tsx";
import {AnimatePresence} from "framer-motion";

const OffersComponent: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {offers} = useSelector((state: RootState) => state.homeReducer);

	useEffect(() => {
		if (offers.data.length === 0 && !offers.loading && !offers.error)
			dispatch(getOffers());
	}, [dispatch, offers]);

	return (
		<AnimatePresence key='offers-animate'>
			<OffersContainer className="hidden-scroll">
				{offers.loading ?
					<HomeOffersSkeletons count={3}/>
					:
					offers.data.map((offer, index) => (
						<FadeAnimation key={index}>
							<div className='offer' style={{backgroundImage: `url(${offer.image})`}}>
								<div className='offer-content'>
									<div className='offer-title'>{offer.title}</div>
									<div className='offer-description'>{offer.description}</div>
								</div>
								<div className='offer-button'>
									{t('order_now')}
								</div>
							</div>
						</FadeAnimation>
					))
				}
			</OffersContainer>
		</AnimatePresence>
	);
};

export default OffersComponent;