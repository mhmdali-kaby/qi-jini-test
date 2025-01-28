import React, {useEffect} from "react";
import {
	NewProduct,
	NewProductContent,
	NewProductDescription,
	NewProductFooter,
	NewProductHeader, NewProductImage, NewProductImageContainer,
	NewProductLabel, NewProductOldPrice, NewProductPrice,
	NewProductRate,
	NewProducts,
	NewProductsTitle,
	NewProductText,
	NewProductTitle,
} from "../styled.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import FadeAnimation from "../../../components/animations/fade.tsx";
import {getNewProducts} from "../../../store/actions/home.actions.ts";
import {useTranslation} from "react-i18next";
import {AnimatePresence} from "framer-motion";
import StarIcon from "../../../components/icons/star.icon.tsx";
import {ProductRoute} from "../../../router/routes.ts";
import {formatPrice} from "../../../utils/numbers.ts";
import {CURRENCY} from "../../../utils/constants.ts";
import FavoriteIcon from "../../../components/icons/favorite.icon.tsx";
import {DashDivider} from "../../../styles/styled.ts";
import {useNavigate} from "react-router-dom";
import NewProductsSkeletons from "../../../components/skeletons/new-products.tsx";

interface NewProductsComponentProps {
	isLight?: boolean
}

const NewProductsComponent: React.FC<NewProductsComponentProps> = ({isLight}) => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const {newProducts} = useSelector((state: RootState) => state.homeReducer);

	useEffect(() => {
		if (newProducts.data.length === 0 && !newProducts.loading && !newProducts.error)
			dispatch(getNewProducts());
	}, [dispatch, newProducts]);

	return (
		<AnimatePresence key={`new-product-animate-${isLight ? 'light' : 'not-light'}`}>
			<NewProducts className={isLight ? 'light' : ''} key={`new-product-${isLight ? 'light' : 'not-light'}-container`}>
				<NewProductsTitle className={isLight ? 'light' : ''}>
					<span>{t('show_all')}</span>
					<div>{t('new_products')}</div>
				</NewProductsTitle>
				{newProducts.loading ?
					<NewProductsSkeletons count={4}/>
					:
					newProducts.data.map((product, index) => (
						<FadeAnimation key={index}>
							<NewProduct>
								<NewProductContent>
									<NewProductHeader>
										<NewProductRate>
											{product.rate}
											<StarIcon/>
										</NewProductRate>
										{product.label &&
                      <NewProductLabel style={{background: product.label_color ?? '#fff'}}>
												{product.label}
                      </NewProductLabel>
										}
									</NewProductHeader>
									<NewProductText onClick={() => navigate(ProductRoute.replace(':id', product.id.toString()))}>
										<NewProductTitle>{product.title}</NewProductTitle>
										<NewProductDescription>{product.description}</NewProductDescription>
									</NewProductText>
									<NewProductFooter>
										<div>
											<NewProductPrice>
												<div>{formatPrice(product.price)}</div>
												<span>{CURRENCY}</span>
											</NewProductPrice>
											{product.old_price &&
                        <NewProductOldPrice>
                          <span>{formatPrice(product.old_price)}</span>
                          <div>{t('previously')}</div>
                        </NewProductOldPrice>
											}
										</div>
										<div>
											<FavoriteIcon/>
										</div>
									</NewProductFooter>
								</NewProductContent>
								<NewProductImageContainer onClick={() => navigate(ProductRoute.replace(':id', product.id.toString()))}>
									<NewProductImage className='new-product-image' src={product.images[0]} alt='new-product-image'/>
								</NewProductImageContainer>
							</NewProduct>
						</FadeAnimation>
					))
				}
			</NewProducts>
			<div key={`new-product-${isLight ? 'light' : 'not-light'}-divider`}>
				<DashDivider/>
			</div>
		</AnimatePresence>
	);
};

export default NewProductsComponent;