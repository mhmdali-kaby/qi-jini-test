import styled from '@emotion/styled';

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    label {
        width: 100%;
    }
`;

export const FilterIconContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const FilterCategoriesContainer = styled.div`
    display: flex;
    gap: 12px;
    margin: 16px 0;
    overflow: overlay;
    direction: rtl;
`;

export const FilterCategory = styled.div`
    border-radius: 8px;
    border: 1px solid #CCC;
    padding: 4px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    height: 26px;
`;

export const OffersContainer = styled.div`
    display: flex;
    gap: 12px;
    margin: 16px 0;
    overflow: overlay;
    direction: rtl;
`;

export const Offer = styled.div`
    border-radius: 24px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 28px 32px;
    gap: 40px;
    width: 240px;
    height: 124px;
`;

export const OfferContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
`;

export const OfferTitle = styled.div`
    color: #000;
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: 150%;
`;

export const OfferDescription = styled.div`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;

export const OfferButton = styled.div`
    border-radius: 30px;
    background: ${({theme}) => theme.colors.orange};
    color: #FFF;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 150%;
    padding: 4px 12px;
`;

export const HomeProductsTitle = styled.div`
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

export const HomeProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 16px;
    margin-bottom: 24px;

		>div {
        width: 48%;
		}
`;

export const HomeProduct = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
    height: 300px;
`;

export const HomeProductImage = styled.img`
    width: 100%;
		height: 198px;
		object-fit: cover;
    border-radius: 8px;
`;

export const HomeProductFavoriteIcon = styled.div`
    position: absolute;
    top: 10px;
    left: 12px;
`;

export const HomeProductContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px 6px;
`;

export const HomeProductNumbers = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const HomeProductPrice = styled.div`
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    display: flex;
    gap: 2px;
    align-items: baseline;

    span {
        font-size: 12px;
    }
`;

export const HomeProductOldPrice = styled.div`
    color: #D40000;
    font-size: 14px;
    display: flex;
    gap: 4px;
    align-items: flex-end;

    div {
        text-decoration: line-through;
    }
`;

export const HomeProductRate = styled.div`
    display: flex;
    gap: 2px;
    align-items: baseline;
`;

export const HomeProductText = styled.div`
    direction: rtl;
`;

export const HomeProductTitle = styled.div`
    color: #000;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const HomeProductDescription = styled.div`
    color: #666;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;

export const NewProducts = styled.div`
    background: #FFF6F3;
    padding: 12px 24px 24px !important;
    margin: 24px 0;
    left: 0;
		display: flex;
		flex-direction: column;
		gap: 14px;

    &.light {
        background: unset;
    }
`;

export const NewProduct = styled.div`
    display: flex;
    gap: 8px;
    border-radius: 8px;
    background: #FFF;
    justify-content: space-between;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
`;

export const NewProductContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 10px;
    gap: 6px;
`;

export const NewProductRate = styled.div`
    display: flex;
    gap: 4px;
    padding-top: 5px;
    align-items: baseline;
`;

export const NewProductLabel = styled.div`
    border-top-left-radius: 5px;
    color: #fff;
    position: relative;
    right: 0;
		top: 1px;
		width: 100%;
    direction: rtl;
    font-size: 12px;
    padding: 4px 28px 4px 6px;
`;

export const NewProductText = styled.div`
    display: flex;
    flex-direction: column;
    direction: rtl;
`;

export const NewProductTitle = styled.div`
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const NewProductDescription = styled.div`
    color: #666;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;

export const NewProductFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 8px;
    align-items: center;
`;

export const NewProductFooterIcons = styled.div`
		display: flex;
    gap: 5px;
    align-items: center;
`;

export const NewProductPrice = styled.div`
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    display: flex;
    gap: 2px;
    align-items: baseline;

    span {
        font-size: 12px;
    }
`;

export const NewProductOldPrice = styled.div`
    color: #D40000;
    font-size: 14px;
    display: flex;
    gap: 4px;
    align-items: flex-end;

    span {
        text-decoration: line-through;
    }
`;

export const NewProductImageContainer = styled.span`
    z-index: 2;
    display: flex;
`;

export const NewProductImage = styled.img`
    object-fit: cover;
		height: 170px;
		width: 155px;
    border-radius: 8px;
`;

export const NewProductsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;

    div {
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }

    span {
        border-radius: 50px;
        border: 1px solid #000;
        color: #000;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        padding: 4px 10px;
    }

    &.light {
        div {
            color: #000;
        }

        span {
            color: #666;
        }
    }
`;

