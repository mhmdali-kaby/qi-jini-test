import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    label {
        width: 100%;
    }
`;

export const FilterCategoriesContainer = styled.div`
    display: flex;
    gap: 12px;
    margin: 16px 0;
    overflow: overlay;
    direction: rtl;
`;

export const FilterCategory = styled.div`
    border-radius: 50px;
    border: 1px solid #CCC;
    padding: 4px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
`;

export const OffersContainer = styled.div`
    display: flex;
    gap: 12px;
    margin: 16px 0;
    overflow: overlay;
    direction: rtl;
`;

export const Offer = styled.div<{ $image: string }>`
    border-radius: 24px;
    background-image: url(${({$image}) => $image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 28px 32px;
    gap: 40px;
`

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
    background: #F97316;
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

    &.small {
        row-gap: 8px;
    }
`;

export const HomeProduct = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 24px;
    width: 48%;
    border: 1px solid #EAEAEA;
    background: #FFF7F1;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.12));

    &.small {
        width: 32%;
    }
`;

export const HomeProductImage = styled.img`
    width: 100%;
    border-radius: 24px;
`;

export const HomeProductFavoriteIcon = styled.div`
    position: absolute;
    top: 160px;
    left: 12px;

    &.small {
        top: 98px;
        left: 8px;
    }
`;

export const HomeProductContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px 6px;
    gap: 8px;
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

    &.small {
        font-size: 14px;

        span {
            font-size: 10px;
        }
    ;
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

    &.small {
        font-size: 10px;
    }
`;

export const HomeProductRate = styled.div`
    display: flex;
    gap: 2px;
    align-items: baseline;

    &.small {
        font-size: 10px;
    }
`;

export const HomeProductText = styled.div`
    direction: rtl;
`;

export const HomeProductTitle = styled.div`
    color: #000;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

    &.small {
        font-size: 12px;
    }
`;

export const HomeProductDescription = styled.div`
    color: #666;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    &.small {
        font-size: 10px;
    }
`;

export const NewProducts = styled.div`
    background: ${({theme}) => theme.colors.backgroundOrange};
    padding: 12px 24px !important;
    margin: 24px 0;
    left: 0;

    &.light {
        background: unset;
    }
`;

export const NewProductsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    div {
        color: #FFF;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }

    span {
        border-radius: 50px;
        border: 1px solid #FFF;
        color: #FFF;
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

export const NewProduct = styled.div`
    display: flex;
    gap: 8px;
    border-radius: 24px;
    background: #FFF;
    justify-content: space-between;
    margin-bottom: 14px;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.12));
`;

export const NewProductImage = styled.img`
    object-fit: cover;
    width: 30%;
    border-radius: 24px;
    z-index: 2;
`;

export const NewProductContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 10px;
    gap: 6px;
`;

export const NewProductContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 14px;
    width: 100%;
`;

export const NewProductRate = styled.div`
    display: flex;
    gap: 4px;
    padding-top: 5px;
    align-items: baseline;
`;

export const NewProductLabel = styled.div<{ $color?: string | null }>`
    background: ${({$color}) => $color};
    border-bottom-left-radius: 18px;
    border-top-left-radius: 18px;
    color: #fff;
    position: relative;
    right: -18px;
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