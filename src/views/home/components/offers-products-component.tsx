import React, {useEffect, useState} from "react";
import {
	HomeProduct,
	HomeProductContent, HomeProductDescription,
	HomeProductFavoriteIcon,
	HomeProductImage,
	HomeProductNumbers,
	HomeProductOldPrice,
	HomeProductPrice, HomeProductRate,
	HomeProductsContainer,
	HomeProductsTitle, HomeProductText, HomeProductTitle,
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
import {HomeDivider} from "../../../styles/styled.ts";
import HomeOffersProductsSkeletons from "../../../components/skeletons/home-offers-products.tsx";
import {AnimatePresence} from "framer-motion";
import {IProduct} from "../../../store/interfaces/product.interface.ts";

interface OffersProductsComponentProps {
	isSpecialOffers?: boolean
}

const OffersProductsComponent: React.FC<OffersProductsComponentProps> = ({isSpecialOffers}) => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {bestOffers, specialOffers} = useSelector((state: RootState) => state.homeReducer);
	const navigate = useNavigate();
	const [data, setData] = useState<{data: IProduct[], loading: boolean, error: string | null}>();

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
						data && data.data.map((offer: IProduct, index: number) => (
							<FadeAnimation key={index}>
								<HomeProduct>
									<span onClick={() => navigate(ProductRoute.replace(':id', offer.id.toString()))}>
										<HomeProductImage src={offer.images[0]}/>
									</span>
									<HomeProductFavoriteIcon>
										<FavoriteIcon/>
									</HomeProductFavoriteIcon>
									<HomeProductContent>
										<HomeProductNumbers>
											<div>
												<HomeProductPrice>
													{formatPrice(offer.price)}
													<span>{CURRENCY}</span>
												</HomeProductPrice>
												{offer.old_price &&
                          <HomeProductOldPrice>
                            <div>{formatPrice(offer.old_price)}</div>
                            <span>{t('previously')}</span>
                          </HomeProductOldPrice>
												}
											</div>
											<HomeProductRate>
												{offer.rate}
												<StarIcon/>
											</HomeProductRate>
										</HomeProductNumbers>
										<HomeProductText onClick={() => navigate(ProductRoute.replace(':id', offer.id.toString()))}>
											<HomeProductTitle>{offer.title}</HomeProductTitle>
											<HomeProductDescription>{offer.description}</HomeProductDescription>
										</HomeProductText>
									</HomeProductContent>
								</HomeProduct>
							</FadeAnimation>
						))
					}
				</HomeProductsContainer>
				<HomeDivider key='offers-products-divider'/>
			</AnimatePresence>
		</div>
	);
};

export default OffersProductsComponent;