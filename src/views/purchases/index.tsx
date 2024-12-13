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

const PurchasesView: React.FC = () => {
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
							<div>مكتملة</div>
							<ActiveTabIcon/>
						</PurchasesTab>
						<PurchasesTab $is_active={false}>
							<div>مستمرة</div>
							<InActiveTabIcon/>
						</PurchasesTab>
					</PurchasesTabs>
					<PurchasesTitle>المشتريات</PurchasesTitle>
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
											<span>الكمية:</span>
											<PurchaseInfoValue>{item.quantity}</PurchaseInfoValue>
										</PurchaseInfoColum>
										<PurchaseInfoColum className='baseline'>
											<span>القياس:</span>
											<PurchaseInfoValue>{item.size}</PurchaseInfoValue>
										</PurchaseInfoColum>
										<PurchaseInfoColum>
											<span>اللون:</span>
											<PurchaseInfoColor $color={item.color}/>
										</PurchaseInfoColum>
									</PurchaseInfo>
									<PurchaseBottom>
										<PurchasePrice>
											<div>{formatPrice(item.price)}</div>
											<span>IQD</span>
										</PurchasePrice>
										<PurchaseStatus>
											<div>تم التوصيل</div>
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

export default PurchasesView;