import React, {useEffect} from 'react';
import {Container} from "../../styles/styled.ts";
import {
	Order,
	OrderBottom,
	OrderContent,
	OrderImage,
	OrderInfo,
	OrderInfoColor,
	OrderInfoColum,
	OrderInfoValue,
	OrderPrice,
	OrdersContainer,
	OrdersHeader,
	OrdersTab,
	OrdersTabs,
	OrderStatus,
	OrdersTitle,
	OrderTitle
} from "./styled.ts";
import ActiveTabIcon from "../../components/icons/active-tab.icon.tsx";
import InActiveTabIcon from "../../components/icons/in-active-tab.icon.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getOrders} from "../../store/actions/orders.actions.ts";
import CompleteIcon from "../../components/icons/complete.icon.tsx";
import {formatPrice} from "../../utils/numbers.ts";
import {useTranslation} from "react-i18next";
import {AttributeType} from "../../store/interfaces/product-attribute.interface.ts";
import {CURRENCY} from "../../utils/constants.ts";
import {useNavigate} from "react-router-dom";
import {OrderDetailsRoute} from "../../router/routes.ts";

const OrdersView: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const {data, loading} = useSelector((state: RootState) => state.ordersReducer);

	useEffect(() => {
		dispatch(getOrders());
	}, [dispatch]);

	return (
		<>
			<Container>
				<OrdersHeader>
					<OrdersTabs>
						<OrdersTab $is_active={true}>
							<div>{t('completed')}</div>
							<ActiveTabIcon/>
						</OrdersTab>
						<OrdersTab $is_active={false}>
							<div>{t('on_going')}</div>
							<InActiveTabIcon/>
						</OrdersTab>
					</OrdersTabs>
					<OrdersTitle>{t('purchases')}</OrdersTitle>
				</OrdersHeader>
				{!loading && data.length > 0 &&
          <OrdersContainer>
						{data.map((item, index) => (
							<span onClick={() => navigate(OrderDetailsRoute.replace(':id', item.id.toString()))} key={index}>
								<Order>
									<OrderImage src={item.items[0].product.image}/>
									<OrderContent>
										<OrderTitle>
											{item.items[0].product.title}
										</OrderTitle>
										<OrderInfo>
											<OrderInfoColum className='baseline'>
												<span>{t('quantity')}:</span>
												<OrderInfoValue>{item.items[0].quantity}</OrderInfoValue>
											</OrderInfoColum>
											{item.items[0] && item.items[0].product && item.items[0].product.attributes && item.items[0].product.attributes.length > 0 && item.items[0].product.attributes.map((attribute, index) => (
												<OrderInfoColum key={index}>
													<span>{attribute.title}:</span>
													{attribute.type == AttributeType.SIZE && (
														<OrderInfoValue>{attribute.value.toString()}</OrderInfoValue>
													)}
													{attribute.type == AttributeType.COLOR && (
														<OrderInfoColor $color={attribute.value.toString()}/>
													)}
												</OrderInfoColum>
											))}
										</OrderInfo>
										<OrderBottom>
											<OrderPrice>
												<div>{formatPrice(item.price)}</div>
												<span>{CURRENCY}</span>
											</OrderPrice>
											<OrderStatus>
												<div>{t('delivered')}</div>
												<CompleteIcon/>
											</OrderStatus>
										</OrderBottom>
									</OrderContent>
								</Order>
							</span>
						))}
          </OrdersContainer>
				}
			</Container>
		</>
	);
};

export default OrdersView;