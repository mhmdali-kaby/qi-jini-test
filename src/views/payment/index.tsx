import React, {useEffect} from 'react';
import {Container} from "../../styles/styled.ts";
import {
	ChooseLocation,
	CompleteButton,
	LocationAdditionalInformation,
	LocationAdditionalInformationNote,
	PaymentContainer,
	PaymentMethodContainer,
	PaymentMethodContent,
	PaymentMethodIcon,
	PaymentMethodsContainer,
	PaymentMethodTitle,
	PaymentTitle
} from "./styled.ts";
import Header from "../../components/header";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getAllCategories} from "../../store/actions/categories.actions.ts";
import {useTranslation} from "react-i18next";
import {PAYMENT_METHODS} from "../../utils/constants.ts";
import {changePaymentMethod} from "../../store/reducers/cart.reducer.ts";
import LocationIcon from "../../components/icons/location.icon.tsx";
import InputComponent from "../../components/input";
import {AddLocationRoute, OrderRoute} from "../../router/routes.ts";
import {Link, useNavigate} from "react-router-dom";

const PaymentView: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const {selected_payment_type} = useSelector((state: RootState) => state.cartReducer);

	useEffect(() => {
		dispatch(getAllCategories());
	}, [dispatch]);

	const selectPaymentMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changePaymentMethod(Number(event.target.value)));
	}

	const createOrder = () => {
		navigate(OrderRoute.replace(':id', "1"))
	}

	return (
		<>
			<Header/>
			<Container>
				<PaymentContainer>
					<div className='payment-content'>
						<PaymentTitle>{t('cart')}</PaymentTitle>
						<PaymentMethodsContainer>
							{PAYMENT_METHODS.map((PaymentMethod, index) => (
								<PaymentMethodContainer key={index} $selected={selected_payment_type == PaymentMethod.id}>
									<input type="radio" name='payment-method' value={PaymentMethod.id} onChange={selectPaymentMethod}
									       checked={selected_payment_type == PaymentMethod.id}/>
									<PaymentMethodContent>
										<PaymentMethodTitle>
											{t(PaymentMethod.title)}
										</PaymentMethodTitle>
										<PaymentMethodIcon>
											<PaymentMethod.icon/>
										</PaymentMethodIcon>
									</PaymentMethodContent>
								</PaymentMethodContainer>
							))}
						</PaymentMethodsContainer>
						<PaymentTitle>{t('location')}</PaymentTitle>
						<Link to={AddLocationRoute}>
							<ChooseLocation>
								<LocationIcon/>
								<span>... {t('choose_location')}</span>
							</ChooseLocation>
						</Link>
						<PaymentTitle>{t('location_additional_information')}</PaymentTitle>
						<LocationAdditionalInformation>
							<InputComponent placeholder={t('phone_number')} name='phone_number'/>
							<InputComponent placeholder={t('nearest_point')} name='nearest_point'/>
							<LocationAdditionalInformationNote>
								{t('location_additional_information_note')} *
							</LocationAdditionalInformationNote>
						</LocationAdditionalInformation>
					</div>
					<CompleteButton onClick={createOrder}>
						{t('complete')}
					</CompleteButton>
				</PaymentContainer>
			</Container>
		</>
	);
};

export default PaymentView;