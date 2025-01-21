import React, {useEffect} from "react";
import {
	NewProducts,
	NewProductsTitle,
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
							<div className='new-product'>
								<div className='new-product-content'>
									<div className='new-product-header'>
										<div className='new-product-rate'>
											{product.rate}
											<StarIcon/>
										</div>
										{product.label &&
                      <div className='new-product-label' style={{background: product.label_color ?? '#fff'}}>
												{product.label}
                      </div>
										}
									</div>
									<div className='new-product-text' onClick={() => navigate(ProductRoute.replace(':id', product.id.toString()))}>
										<div className='new-product-title'>{product.title}</div>
										<div className='new-product-description'>{product.description}</div>
									</div>
									<div className='new-product-footer'>
										<div>
											<div className='new-product-price'>
												<div>{formatPrice(product.price)}</div>
												<span>{CURRENCY}</span>
											</div>
											{product.old_price &&
                        <div className='new-product-old-price'>
                          <span>{formatPrice(product.old_price)}</span>
                          <div>{t('previously')}</div>
                        </div>
											}
										</div>
										<div>
											<FavoriteIcon/>
										</div>
									</div>
								</div>
								<span onClick={() => navigate(ProductRoute.replace(':id', product.id.toString()))} className='image-container'>
									<img className='new-product-image' src={product.image} alt='new-product-image'/>
								</span>
							</div>
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