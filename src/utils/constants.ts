import CashOnDeliveryIcon from "../components/icons/cash-on-delivery.icon.tsx";
import InstallmentPurchaseIcon from "../components/icons/Installment-purchase.icon.tsx";
import QiIcon from "../components/icons/qi.icon.tsx";

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