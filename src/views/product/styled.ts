import styled from '@emotion/styled';

export const BackIcon = styled.div`
    position: fixed;
    z-index: 9;
    top: 16px;
`;

export const ProductContainer = styled.div`
    margin-bottom: 60px;
		padding: 0;
`;

export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
		padding: 32px 24px 100px;
    margin-top: -26px;
    position: absolute;
    background: #fff;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
		z-index: 2;
`;

export const ProductImageContainer = styled.div`
    height: 400px;
		.swiper-pagination {
				position: relative;
				top: -50px;
				.swiper-pagination-bullet {
						transition: all .3s ease-in-out;
				}
				.swiper-pagination-bullet-active {
						background: #666;
						border-radius: 20px;
						width: 20px;
				}
		}
`;

export const SwiperSlideContainer = styled.div`
    position: relative;
    height: 400px;
    overflow: hidden;
    background: linear-gradient(rgb(221 221 221 / 54%), rgb(193 193 193 / 24%));
`;

export const SwiperSlideItem = styled.div`
    position: relative;
    height: 400px;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    img {
        height: 100%;
        width: auto;
        object-fit: cover;
    }
`;

export const ProductImageSlideIcons = styled.div`
    position: absolute;
    top: 200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
		svg {
        margin: 0 10px;
				z-index: 2;
		}
`;

export const FavoriteButton = styled.div`
    position: absolute;
    right: 20px;
    top: 320px;
    z-index: 1;
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

export const RatingContainer = styled.div`
		display: flex;
		direction: rtl;
		gap: 8px;
`;

export const RatingCount = styled.div`
		font-size: 14px;
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