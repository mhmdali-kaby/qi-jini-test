import React, {useEffect} from 'react';
import {Container} from "../../styles/styled.ts";
import {
	OrderDetailsContainer,
	OrderDetailsTitle,
	OrderNote,
	OrderTrackingContainer,
	OrderTrackingContent,
	OrderTrackingDot,
	OrderTrackingStep,
	OrderTrackingStepIcon,
	OrderTrackingStepLine,
	OrderTrackingSteps,
	WhatsButton
} from "./styled.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {useTranslation} from "react-i18next";
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
	OrderTitle
} from "../orders/styled.ts";
import {AttributeType} from "../../store/interfaces/product-attribute.interface.ts";
import {formatPrice} from "../../utils/numbers.ts";
import {CURRENCY, ORDER_TRACKING_STEPS} from "../../utils/constants.ts";
import {getOrder} from "../../store/actions/orders.actions.ts";
import WhatsappIcon from "../../components/icons/whatsapp.icon.tsx";

const OrderDetailsView: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {order, loading} = useSelector((state: RootState) => state.ordersReducer);
	const {info: store} = useSelector((state: RootState) => state.storeReducer);

	useEffect(() => {
		dispatch(getOrder());
	}, [dispatch]);

	return (
		<>
			<Container>
				<OrderDetailsContainer>
					<OrderDetailsTitle>{t('order_details')}</OrderDetailsTitle>
					{order && !loading && order.items.map((item, index) => (
						<Order key={index}>
							<OrderImage src={item.product.image}/>
							<OrderContent>
								<OrderTitle>
									{item.product.title}
								</OrderTitle>
								<OrderInfo>
									<OrderInfoColum className='baseline'>
										<span>{t('quantity')}:</span>
										<OrderInfoValue>{item.quantity}</OrderInfoValue>
									</OrderInfoColum>
									{item.product && item.product.attributes && item.product.attributes.length > 0 && item.product.attributes.map((attribute, index) => (
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
										<div>{formatPrice(item.product.price)}</div>
										<span>{CURRENCY}</span>
									</OrderPrice>
								</OrderBottom>
							</OrderContent>
						</Order>
					))}
					{order && !loading &&
            <OrderTrackingContainer>
              <OrderDetailsTitle>{t('order_tracking')}</OrderDetailsTitle>
              <OrderTrackingSteps>
								{ORDER_TRACKING_STEPS.map((Step, index) => (
									<OrderTrackingStep key={index}>
										<OrderTrackingStepIcon>
											<Step.icon/>
										</OrderTrackingStepIcon>
										<OrderTrackingDot/>
										<OrderTrackingContent>
			                <span className='order-step-title'>
				                {t(Step.title)}
			                </span>
											<span className='order-step-date'>
												{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
												{/* @ts-expect-error */}
												{order[Step.date]}
		                  </span>
										</OrderTrackingContent>
										{index != 0 &&
                      <OrderTrackingStepLine/>
										}
									</OrderTrackingStep>
								))}
              </OrderTrackingSteps>
            </OrderTrackingContainer>
					}
					<OrderNote>
						{t('order_note')}
					</OrderNote>
					<WhatsButton href={`https://wa.me/${store.phone}`} target="_blank">
						<WhatsappIcon/>
						<span>
							{t('order_whatsapp_note')}
						</span>
					</WhatsButton>
				</OrderDetailsContainer>
			</Container>
		</>
	);
};

export default OrderDetailsView;