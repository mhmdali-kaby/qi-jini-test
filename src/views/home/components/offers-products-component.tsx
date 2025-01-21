import React, {useEffect, useState} from "react";
import {
	HomeProductsContainer,
	HomeProductsTitle,
} from "../styled.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import FadeAnimation from "../../../components/animations/fade.tsx";
import {getBestOffers, getSpecialOffers} from "../../../store/actions/home.actions.ts";
import {useTranslation} from "react-i18next";
import {ProductRoute} from "../../../router/routes.ts";
import FavoriteIcon from "../../../components/icons/favorite.icon.tsx";
import {formatPrice} from "../../../utils/numbers.ts";
import {CURRENCY} from "../../../utils/constants.ts";
import StarIcon from "../../../components/icons/star.icon.tsx";
import {useNavigate} from "react-router-dom";
import {DashDivider} from "../../../styles/styled.ts";
import HomeOffersProductsSkeletons from "../../../components/skeletons/home-offers-products.tsx";
import {AnimatePresence} from "framer-motion";

interface OffersProductsComponentProps {
	isSpecialOffers?: boolean
}

const OffersProductsComponent: React.FC<OffersProductsComponentProps> = ({isSpecialOffers}) => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {bestOffers, specialOffers} = useSelector((state: RootState) => state.homeReducer);
	const navigate = useNavigate();
	const [data, setData] = useState<any>();

	useEffect(() => {
		if (bestOffers.data.length === 0 && !bestOffers.loading && !bestOffers.error && !isSpecialOffers)
			dispatch(getBestOffers());
		if (specialOffers.data.length === 0 && !specialOffers.loading && !specialOffers.error && isSpecialOffers)
			dispatch(getSpecialOffers());
	}, [dispatch, bestOffers, specialOffers, isSpecialOffers]);

	useEffect(() => {
		if (isSpecialOffers)
			setData(specialOffers);
		else
			setData(bestOffers);
	}, [bestOffers, isSpecialOffers, specialOffers]);

	return (
		<div>
			<AnimatePresence key='offers-products-animate'>
				<HomeProductsTitle key='offers-products-title'>
					<span>{t('show_all')}</span>
					<div>{isSpecialOffers ? t('special_offers') : t('best_offers')}</div>
				</HomeProductsTitle>
				<HomeProductsContainer key='offers-products-continer'>
					{data && data.loading ?
						<HomeOffersProductsSkeletons count={4}/>
						:
						data && data.data.map((offer: any, index: number) => (
							<FadeAnimation key={index}>
								<div className='home-product'>
									<span onClick={() => navigate(ProductRoute.replace(':id', offer.id.toString()))}>
										<img className='home-product-image' src={offer.image} alt='home-product-image'/>
									</span>
									<div className='home-product-favorite-icon'>
										<FavoriteIcon/>
									</div>
									<div className='home-product-content'>
										<div className='home-product-numbers'>
											<div>
												<div className='home-product-price'>
													{formatPrice(offer.price)}
													<span>{CURRENCY}</span>
												</div>
												{offer.old_price &&
                          <div className='home-product-old-price'>
                            <div>{formatPrice(offer.old_price)}</div>
                            <span>{t('previously')}</span>
                          </div>
												}
											</div>
											<div className='home-product-rate'>
												{offer.rate}
												<StarIcon/>
											</div>
										</div>
										<div className='home-product-text' onClick={() => navigate(ProductRoute.replace(':id', offer.id.toString()))}>
											<div className='home-product-title'>{offer.title}</div>
											<div className='home-product-description'>{offer.description}</div>
										</div>
									</div>
								</div>
							</FadeAnimation>
						))
					}
				</HomeProductsContainer>
				<DashDivider key='offers-products-divider'/>
			</AnimatePresence>
		</div>
	);
};

export default OffersProductsComponent;