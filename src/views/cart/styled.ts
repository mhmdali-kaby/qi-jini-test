import styled from '@emotion/styled';

export const CartContainer = styled.div`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 24px 0 0;
    min-height: 84vh;
    gap: 32px;

    .cart-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;

export const CartTitle = styled.div`
    color: #000;
    direction: rtl;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const CartItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const CartItemContainer = styled.div`
    box-shadow: 0 11px 24px 0 rgba(0, 0, 0, 0.10);
    border-radius: 14px;
    position: relative;
    background: ${({theme}) => theme.colors.orange};

    .cart-item {
        position: relative;
    }
`;

export const CartItemTrash = styled.div`
    border-radius: 14px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
		span {
        margin-left: 15px;
		}
`;

export const CartItem = styled.div`
    display: flex;
    flex-direction: row-reverse;
    border-radius: 14px;
    gap: 6px;
    background: #FFF;
    padding: 10px 10px 10px 16px;
    align-items: center;
		transform: scale(1.01);
`;

export const CartItemImageContainer = styled.div`
    width: 30%;
    display: flex;

    img {
        width: 100%;
        object-fit: cover;
        height: 89px;
        border-radius: 8px;
    }
`;

export const CartItemDataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const CartItemTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const CartItemTitle = styled.span`
    color: #000;
    text-align: right;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const CartItemType = styled.span`
    color: #666;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;

export const CartItemPriceContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-end;
`;

export const CartItemPrice = styled.span`
    color: #000;
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const CartItemCount = styled.div`
    background: #EEE;
    width: 24%;
    border-radius: 30px;
    display: flex;
    padding: 4px 12px 0;
    font-size: 18px;
    font-weight: bold;
    justify-content: space-between;
`;


export const PromoCode = styled.div`
    border-radius: 10px;
    background: #F3F3F3;
    display: flex;
    justify-content: space-between;
    padding: 10px 12px;
    gap: 4px;
    margin-top: 22px;

    .apply-promo {
        background: ${({theme}) => theme.colors.orange};
        border-radius: 8px;
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        border: none;
        padding: 8px 20px;
    }

    input {
        width: 100%;
        background: none;
        border: none;
        direction: rtl;
		    font-size: 16px;

        &:focus-within {
            outline: none;
        }
    }
`;

export const CompleteButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CartPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CartPrice = styled.div`
    display: flex;
    gap: 2px;
    align-items: baseline;

    span {
        color: #000;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 208%;
    }

    .cart-currency {
        font-size: 16px;
    }
`;

export const CartCount = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    flex-direction: row-reverse;
    color: #888;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 208%;
`;

export const CartCompleteAndPay = styled.div`
    background: ${({theme}) => theme.colors.orange};
    padding: 10px 14px;
    display: flex;
    justify-content: center;	
    align-items: center;
    border-radius: 10px;

    span {
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 208%;
    }
`;