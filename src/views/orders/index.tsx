import React, {useEffect} from 'react';
import {Container} from "../../styles/styled.ts";
import {
	OrdersContainer,
	OrdersHeader,
	OrdersTab,
	OrdersTabs,
	OrdersTitle
} from "./styled.ts";
import ActiveTabIcon from "../../components/icons/active-tab.icon.tsx";
import InActiveTabIcon from "../../components/icons/in-active-tab.icon.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getOrders} from "../../store/actions/orders.actions.ts";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {OrderDetailsRoute} from "../../router/routes.ts";
import OrderSkeletons from "../../components/skeletons/orders.tsx";
import FadeAnimation from "../../components/animations/fade.tsx";
import {AnimatePresence} from "framer-motion";
import OrderComponent from "./components/order-component.tsx";

const OrdersView: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const {data, loading, error} = useSelector((state: RootState) => state.ordersReducer);

	useEffect(() => {
		if (data.length === 0 && !loading && !error)
			dispatch(getOrders());
	}, [data, dispatch, error, loading]);

	return (
		<Container>
			<OrdersHeader>
				<OrdersTabs>
					<OrdersTab className={'active'} key="completed-tab">
						<div>{t('completed')}</div>
						<ActiveTabIcon/>
					</OrdersTab>
					<OrdersTab className={'in-active'} key="ongoing-tab">
						<div>{t('on_going')}</div>
						<InActiveTabIcon/>
					</OrdersTab>
				</OrdersTabs>
				<OrdersTitle>{t('purchases')}</OrdersTitle>
			</OrdersHeader>
			<OrdersContainer>
				<AnimatePresence>
					{loading ?
						<OrderSkeletons count={5}/>
						:
						data.map((item, index) => (
							<FadeAnimation key={item.id || index}>
								<OrderComponent
									onClick={() => navigate(OrderDetailsRoute.replace(':id', item.id.toString()))}
									order={item}
								/>
							</FadeAnimation>
						))
					}
				</AnimatePresence>
			</OrdersContainer>
		</Container>
	);
};

export default OrdersView;