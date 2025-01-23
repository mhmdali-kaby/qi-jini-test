import styled from '@emotion/styled';

interface DiscountsProps {
	$border_type: string;
	$border_color: string;
}

interface DiscountProps {
	$image: string;
}

export const DiscountContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 0 42px;
`;

export const DiscountsGroupTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0 12px;

    div {
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }

    span {
        color: #666;
        font-size: 11px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }
`;

export const Discounts = styled.div<DiscountsProps>`
		border: 1px ${({$border_type, $border_color}) => `${$border_type} ${$border_color}`};
		border-radius: 8px;
		padding: 14px 12px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}
`;

export const Discount = styled.div<DiscountProps>`
    background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${({$image}) => $image});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 10px;
    border-radius: 18px;
		img {
        border-radius: 50%;
        border: 2px solid #fff;
		}
		div {
        color: #FFF;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
		}
`;