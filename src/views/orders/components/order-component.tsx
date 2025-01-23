import React from "react";
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
	OrderStatus,
	OrderTitle
} from "../styled.ts";
import {AttributeType} from "../../../store/interfaces/product-attribute.interface.ts";
import {formatPrice} from "../../../utils/numbers.ts";
import {CURRENCY} from "../../../utils/constants.ts";
import CompleteIcon from "../../../components/icons/complete.icon.tsx";
import {IOrder} from "../../../store/interfaces/order.interface.ts";
import {useTranslation} from "react-i18next";

interface OrderComponentProps {
	onClick: () => void;
	order: IOrder
}

const OrderComponent: React.FC<OrderComponentProps> = ({onClick, order}) => {
	const {t} = useTranslation();

	return (
		<Order onClick={onClick}>
			<OrderImage src={order.items[0].product.image}/>
			<OrderContent>
				<OrderTitle>
					{order.items[0].product.title}
				</OrderTitle>
				<OrderInfo>
					<OrderInfoColum className='baseline'>
						<span>{t('quantity')}:</span>
						<OrderInfoValue>{order.items[0].quantity}</OrderInfoValue>
					</OrderInfoColum>
					{order.items[0] && order.items[0].product && order.items[0].product.attributes && order.items[0].product.attributes.length > 0 && order.items[0].product.attributes.map((attribute, index) => (
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
						<div>{formatPrice(order.price)}</div>
						<span>{CURRENCY}</span>
					</OrderPrice>
					<OrderStatus>
						<div>{t('delivered')}</div>
						<CompleteIcon/>
					</OrderStatus>
				</OrderBottom>
			</OrderContent>
		</Order>
	);
};

export default OrderComponent;