import styled from '@emotion/styled';

export const AddLocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 24px 0 0;
    min-height: 84vh;
    gap: 32px;

    .add-location-content {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`;

export const AddLocationTitle = styled.div`
    color: #000;
    direction: rtl;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const ChangeMapContainer = styled.div`
		>div:first-of-type {
				height: 0;
		}
    > div {
        width: 100%;
        height: 250px;
        border-radius: 18px;
    }
`;

export const AutocompleteContainer = styled.span`
    margin-bottom: 10px;
    display: flex;
		justify-content: center;	
		input {
        width: 300px;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        outline: none;
		}
`;

export const AddLocationButton = styled.div`
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

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    direction: rtl;
    gap: 4px;
`;

export const InputLabel = styled.div`
    color: #09090B;
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
`;

export const CheckBoxContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 4px;
    color: #09090B;
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
`;