import React, {useEffect, useState} from 'react';
import {Container} from "../../styles/styled.ts";
import {
	CartCompleteAndPay,
	CartContainer,
	CartCount,
	CartItem,
	CartItemContainer,
	CartItemCount,
	CartItemDataContainer,
	CartItemImageContainer,
	CartItemPrice,
	CartItemPriceContainer,
	CartItems,
	CartItemTitle,
	CartItemTitleContainer,
	CartItemTrash,
	CartItemType,
	CartPrice,
	CartPriceContainer,
	CartTitle,
	CompleteButtonContainer,
	PromoCode
} from "./styled.ts";
import Header from "../../components/header";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {useTranslation} from "react-i18next";
import {getCartItems} from "../../store/actions/cart.actions.ts";
import {formatPrice} from "../../utils/numbers.ts";
import {motion} from "framer-motion";
import {
	decrementCartItemCount,
	increaseCartItemCount,
	offlineCartItemsInfo
} from "../../store/reducers/cart.reducer.ts";
import {CURRENCY} from "../../utils/constants.ts";
import CompleteAndPayIcon from "../../components/icons/complete-and-pay.icon.tsx";
import WhiteTrashIcon from "../../components/icons/white-trash.icon.tsx";
import {Link} from "react-router-dom";
import {PaymentRoute} from "../../router/routes.ts";

const CartView: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {items, offline_count, offline_price, loading} = useSelector((state: RootState) => state.cartReducer);
	const [trashVisible, setTrashVisible] = useState<number | null>(null);

	useEffect(() => {
		dispatch(getCartItems());
	}, [dispatch]);

	useEffect(() => {
		dispatch(offlineCartItemsInfo());
	}, [dispatch, items]);

	const increaseItemCount = (id: number) => {
		dispatch(increaseCartItemCount(id));
	}

	const decrementItemCount = (id: number) => {
		dispatch(decrementCartItemCount(id));
	}

	const handleDragEnd = (id: number | null, dragDistance: number) => {
		if (dragDistance >= 5) {
			setTrashVisible(id);
		} else {
			setTrashVisible(null);
		}
	};

	return (
		<>
			<Header/>
			<Container>
				<CartContainer>
					<div className='cart-content'>
						<CartTitle>{t('cart')}</CartTitle>
						{!loading && items.length > 0 && (
							<>
								<CartItems>
									{items.map((item, index) => (
										<CartItemContainer key={index}>
											<CartItemTrash>
												<span>
													<WhiteTrashIcon/>
												</span>
											</CartItemTrash>
											<motion.div
												className="cart-item"
												drag="x"
												dragConstraints={{left: 0, right: 50}}
												dragElastic={0.2}
												onDragEnd={(_, info) => handleDragEnd(item.id, info.offset.x)}
												animate={{
													x: trashVisible === item.id ? 50 : 0,
												}}
											>
												<CartItem>
													<CartItemImageContainer>
														<img src={item.image} alt="item"/>
													</CartItemImageContainer>
													<CartItemDataContainer>
														<CartItemTitleContainer>
															<CartItemTitle>{item.title}</CartItemTitle>
															<CartItemType>{item.type}</CartItemType>
														</CartItemTitleContainer>
														<CartItemPriceContainer>
															<CartItemPrice>
																{formatPrice(item.price)}
															</CartItemPrice>
															<CartItemCount>
																<span onClick={() => decrementItemCount(item.id)}>-</span>
																<span>{item.count}</span>
																<span onClick={() => increaseItemCount(item.id)}>+</span>
															</CartItemCount>
														</CartItemPriceContainer>
													</CartItemDataContainer>
												</CartItem>
											</motion.div>
										</CartItemContainer>
									))}
								</CartItems>
								<PromoCode>
									<motion.button
										whileHover={{scale: 1.1}}
										whileTap={{scale: 0.9}}
										className="apply-promo"
									>
										{t('apply')}
									</motion.button>
									<input type="text" placeholder={t('promo_code')}/>
								</PromoCode>
							</>
						)}
					</div>
					<CompleteButtonContainer>
						<CartPriceContainer>
							<CartPrice>
								<span className='cart-currency'>{CURRENCY}</span>
								<span>{formatPrice(offline_price)}</span>
							</CartPrice>
							<CartCount>
								<span>{t('count')}</span>
								<span>{offline_count}</span>
								<span>{t('products')}</span>
							</CartCount>
						</CartPriceContainer>
						<Link to={PaymentRoute}>
							<CartCompleteAndPay>
								<CompleteAndPayIcon/>
								<span>
								{t('complete_and_pay')}
							</span>
							</CartCompleteAndPay>
						</Link>
					</CompleteButtonContainer>
				</CartContainer>
			</Container>
		</>
	);
};

export default CartView;