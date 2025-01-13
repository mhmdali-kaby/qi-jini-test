import React, {useEffect} from 'react';
import Header from "../../components/header";
import {Container} from "../../styles/styled.ts";
import Nav from "../../components/nav";
import {
	Purchase,
	PurchaseBottom,
	PurchaseContent,
	PurchaseImage,
	PurchaseInfo,
	PurchaseInfoColor,
	PurchaseInfoColum,
	PurchaseInfoValue,
	PurchasePrice,
	PurchasesContainer,
	PurchasesHeader,
	PurchasesTab,
	PurchasesTabs,
	PurchaseStatus,
	PurchasesTitle,
	PurchaseTitle
} from "./styled.ts";
import ActiveTabIcon from "../../components/icons/active-tab.icon.tsx";
import InActiveTabIcon from "../../components/icons/in-active-tab.icon.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getPurchases} from "../../store/actions/purchases.actions.ts";
import CompleteIcon from "../../components/icons/complete.icon.tsx";
import {formatPrice} from "../../utils/numbers.ts";
import {useTranslation} from "react-i18next";
import {AttributeType} from "../../store/interfaces/product-attribute.interface.ts";
import {CURRENCY} from "../../utils/constants.ts";

const OrdersView: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {data, loading} = useSelector((state: RootState) => state.purchasesReducer);

	useEffect(() => {
		dispatch(getPurchases());
	}, [dispatch]);

	return (
		<>
			<Header/>
			<Container>
				<PurchasesHeader>
					<PurchasesTabs>
						<PurchasesTab $is_active={true}>
							<div>{t('completed')}</div>
							<ActiveTabIcon/>
						</PurchasesTab>
						<PurchasesTab $is_active={false}>
							<div>{t('on_going')}</div>
							<InActiveTabIcon/>
						</PurchasesTab>
					</PurchasesTabs>
					<PurchasesTitle>{t('purchases')}</PurchasesTitle>
				</PurchasesHeader>
				{!loading && data.length > 0 &&
          <PurchasesContainer>
						{data.map((item, index) => (
							<Purchase key={index}>
								<PurchaseImage src={item.image}/>
								<PurchaseContent>
									<PurchaseTitle>
										{item.title}
									</PurchaseTitle>
									<PurchaseInfo>
										<PurchaseInfoColum className='baseline'>
											<span>{t('quantity')}:</span>
											<PurchaseInfoValue>{item.quantity}</PurchaseInfoValue>
										</PurchaseInfoColum>
										{item.attributes.length > 0 && item.attributes.map((attribute, index) => (
											<PurchaseInfoColum key={index}>
												<span>{attribute.title}:</span>
												{attribute.type == AttributeType.SIZE && (
													<PurchaseInfoValue>{attribute.value}</PurchaseInfoValue>
												)}
												{attribute.type == AttributeType.COLOR && (
													<PurchaseInfoColor $color={attribute.value}/>
												)}
											</PurchaseInfoColum>
										))}
									</PurchaseInfo>
									<PurchaseBottom>
										<PurchasePrice>
											<div>{formatPrice(item.price)}</div>
											<span>{CURRENCY}</span>
										</PurchasePrice>
										<PurchaseStatus>
											<div>{t('delivered')}</div>
											<CompleteIcon/>
										</PurchaseStatus>
									</PurchaseBottom>
								</PurchaseContent>
							</Purchase>
						))}
          </PurchasesContainer>
				}
			</Container>
			<Nav/>
		</>
	);
};

export default OrdersView;