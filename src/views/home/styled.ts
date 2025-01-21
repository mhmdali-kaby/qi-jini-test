import styled from "styled-components";

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
		
		.filter-category {
        border-radius: 50px;
        border: 1px solid #CCC;
        padding: 4px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        height: 26px;
		}
`;

export const OffersContainer = styled.div`
    display: flex;
    gap: 12px;
    margin: 16px 0;
    overflow: overlay;
    direction: rtl;
		.offer {
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
				.offer-content {
            display: flex;
            flex-direction: column;
            width: 240px;
						.offer-title {
                color: #000;
                font-size: 25px;
                font-style: normal;
                font-weight: 800;
                line-height: 150%;
						}
						.offer-description {
                color: #000;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
						}
				}
				.offer-button {
            border-radius: 30px;
            background: ${({theme}) => theme.colors.orange};
            color: #FFF;
            font-size: 12px;
            font-style: normal;
            font-weight: 800;
            line-height: 150%;
            padding: 4px 12px;
				}
		}
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
		
		.home-product {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-radius: 24px;
        border: 1px solid #EAEAEA;
        background: #FFF7F1;
        filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.12));
        height: 305px;
				
				.home-product-image {
            width: 100%;
            border-radius: 24px;
				}
				
				.home-product-favorite-icon {
            position: absolute;
            top: 10px;
            left: 12px;
				}
				
				.home-product-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0 10px 6px;
            gap: 8px;
						.home-product-numbers {
                display: flex;
                justify-content: space-between;
								.home-product-price {
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
								}
								.home-product-old-price {
                    color: #D40000;
                    font-size: 14px;
                    display: flex;
                    gap: 4px;
                    align-items: flex-end;

                    div {
                        text-decoration: line-through;
                    }
								}
								.home-product-rate {
                    display: flex;
                    gap: 2px;
                    align-items: baseline;
								}
						}
						.home-product-text {
                direction: rtl;
								.home-product-title {
                    color: #000;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 150%;
								}
								.home-product-description {
                    color: #666;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
								}
						}
				}
		}
`;

export const NewProducts = styled.div`
    background: ${({theme}) => theme.colors.backgroundOrange};
    padding: 12px 24px 24px !important;
    margin: 24px 0;
    left: 0;
		display: flex;
		flex-direction: column;
		gap: 14px;

    &.light {
        background: unset;
    }
		
		.new-product {
        display: flex;
        gap: 8px;
        border-radius: 24px;
        background: #FFF;
        justify-content: space-between;
        filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.12));

        .image-container {
            z-index: 2;
            display: flex;
        }
				
				.new-product-content {
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: space-between;
            padding-bottom: 10px;
            gap: 6px;
						.new-product-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                padding-left: 14px;
                width: 100%;
						}
						.new-product-rate {
                display: flex;
                gap: 4px;
                padding-top: 5px;
                align-items: baseline;
						}
						.new-product-label {
                border-bottom-left-radius: 18px;
                border-top-left-radius: 18px;
                color: #fff;
                position: relative;
                right: -18px;
                direction: rtl;
                font-size: 12px;
                padding: 4px 28px 4px 6px;
						}
						.new-product-text {
                display: flex;
                flex-direction: column;
                direction: rtl;
								.new-product-title {
                    color: #000;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 150%;
								}
								.new-product-description {
                    color: #666;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
								}
						}
						.new-product-footer {
                display: flex;
                justify-content: space-between;
                padding-left: 8px;
                align-items: center;
								.new-product-price {
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
								}
								.new-product-old-price {
                    color: #D40000;
                    font-size: 14px;
                    display: flex;
                    gap: 4px;
                    align-items: flex-end;

                    span {
                        text-decoration: line-through;
                    }
								}
						}
						.new-product-image {
                object-fit: cover;
                border-radius: 24px;
						}
				}
		}
`;

export const NewProductsTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;

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

