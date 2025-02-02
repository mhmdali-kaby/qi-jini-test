import styled from '@emotion/styled';

interface PaymentMethodContainerProps {
	$selected: boolean
}

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 24px 0 0;
    min-height: 84vh;
    gap: 32px;

    .payment-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;

export const PaymentTitle = styled.div`
    color: #000;
    direction: rtl;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const PaymentMethodsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 16px;
`;

export const PaymentMethodContainer = styled.label<PaymentMethodContainerProps>`
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.10);
    display: flex;
    justify-content: space-between;
    padding: 6px 14px;
    align-items: center;
    background: ${({$selected, theme}) => $selected ? theme.colors.orange : '#fff'};
    color: ${({$selected}) => $selected ? '#fff' : '#000'};
    font-weight: ${({$selected}) => $selected ? 700 : 400};
		transition: all 0.3s ease-in-out;
		
    input {
		    display: none;
    }
`;

export const PaymentMethodContent = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const PaymentMethodTitle = styled.div`
    text-align: right;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
`;

export const PaymentMethodIcon = styled.div`
    border-radius: 50%;
    background: #FFF9F2;
    padding: 16px;
    display: flex;
`;

export const ChooseLocation = styled.div`
    background-image: linear-gradient(to left, #F4F4F5 20%, #F4F4F550 100%), url('/assets/img/locations.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 12px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 10px;
    border-radius: 12px;
    margin-bottom: 16px;
    color: #000;
`;

export const LocationAdditionalInformation = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
		.notes-textarea {
        background: #F4F4F5;
        border: none;
        direction: rtl;
        border-radius: 14px;
        padding: 16px 18px;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #71717A;
            font-size: 16px;
        }
		}
`;

export const LocationAdditionalInformationNote = styled.div`
    color: #E16D6F;
    text-align: right;
    font-size: 12px;
    font-weight: 400;
`;

export const CompleteButton = styled.div`
    background: ${({theme}) => theme.colors.orange};
    padding: 12px 14px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 208%;
`;