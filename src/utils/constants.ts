import CashOnDeliveryIcon from "../components/icons/cash-on-delivery.icon.tsx";
import InstallmentPurchaseIcon from "../components/icons/Installment-purchase.icon.tsx";
import QiIcon from "../components/icons/qi.icon.tsx";
import PendingOrderIcon from "../components/icons/pending-order.icon.tsx";
import ApprovedOrderIcon from "../components/icons/approved-order.icon.tsx";
import OnDeliveryOrderIcon from "../components/icons/on-delivery-order.icon.tsx";
import DeliveredOrderIcon from "../components/icons/delivered-order.icon.tsx";

export const CURRENCY = 'IQD';

export const PAYMENT_METHODS = [
	{
		id: 1,
		title: 'cash_on_delivery',
		icon: CashOnDeliveryIcon
	},
	{
		id: 2,
		title: 'installment_purchase',
		icon: InstallmentPurchaseIcon
	},
	{
		id: 3,
		title: 'e_payment',
		icon: QiIcon
	},
];

export const INITIAL_POSITION = {lat: 33.3152, lng: 44.3661};

export const ORDER_TRACKING_STEPS = [
	{
		date: 'pending_at',
		title: 'pending_order',
		icon: PendingOrderIcon
	},
	{
		date: 'approved_at',
		title: 'approved_order',
		icon: ApprovedOrderIcon
	},
	{
		date: 'on_delivery_at',
		title: 'on_delivery_order',
		icon: OnDeliveryOrderIcon
	},
	{
		date: 'delivered_at',
		title: 'delivered_order',
		icon: DeliveredOrderIcon
	},
];