import styled from "styled-components";

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 0 60px;
`;

export const ProductImageContainer = styled.div`
		position: relative;
		img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: top;
        border-radius: 24px;
		}
`;

export const ProductRate = styled.div`
		position: absolute;
		bottom: 0;
		left: -12px;
    border-radius: 12px;
		background: #fff;
		padding: 12px;
		>div {
        padding: 10px;
        border-radius: 12px;
        background: #FFF397;
        display: flex;
        flex-direction: column;
        gap: 6px;
		}
`;

export const ProductRateValue = styled.div`
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
		display: flex;
    gap: 4px;
    align-items: flex-start;
`;

export const ProductRateCount = styled.div`
    color: #000;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 4px;
`;

export const ProductTitleContainer = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
`;

export const ProductTitle = styled.div`
		width: 75%;
		display: flex;
		flex-direction: column;
		gap: 2px;
    align-items: flex-end;
`;

export const ProductTitleValue = styled.div`
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    direction: rtl;
    line-height: 140%;
`;

export const ProductType = styled.div`
    color: #666;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    direction: rtl;
`;

export const ProductCount = styled.div`
    background: #EEE;
		width: 20%;
    border-radius: 30px;
    display: flex;
    padding: 4px 12px 0;
    font-size: 18px;
    font-weight: bold;
		justify-content: space-between;
`;

export const ProductDescription = styled.div`
		display: flex;
		gap: 8px;
    flex-direction: column;
    align-items: flex-end;
`;

export const ProductDescriptionTitle = styled.div`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const ProductDescriptionValue = styled.div`
    color: #666;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    direction: rtl;
`;

export const ProductAttributesContainer = styled.div`
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
    flex-direction: row-reverse;
`;

export const ProductAttribute = styled.div`
		display: flex;
		flex-direction: column;
		gap: 4px;
`;

export const ProductAttributeTitle = styled.div`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
		direction: rtl;
`;

export const AddToCartContainer = styled.div`
		position: fixed;
		left: 0;
		bottom: 24px;
		width: 100%;
`;

export const AddToCart = styled.div`
		width: 85%;
		margin: auto;
    border-radius: 14px;
    background: ${({theme}) => theme.colors.orange};
		padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
		.add-to-cart {
        padding: 0;
        border: none;
        border-radius: 12px;
		}
`;

export const AddToCartPrice = styled.div`
    display: flex;
    gap: 4px;
		color: #FFF;
    align-items: flex-end;
    padding-top: 2px;
`;

export const AddToCartPriceValue = styled.span`
    font-size: 22px;
    font-weight: bold;
`;

export const AddToCartPriceCurrency = styled.span`
    color: #FFF;
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    padding-bottom: 6px;
`;

export const AddToCartButton = styled.span`
    display: flex;
    background: #FFFFF2;
    padding: 10px;
		gap: 8px;
    border-radius: 12px;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    align-items: flex-end;
`;