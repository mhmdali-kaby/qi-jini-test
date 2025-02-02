import React, {useEffect, useState} from 'react';
import {Container} from "../../styles/styled.ts";
import {
	AddToCart,
	AddToCartButton,
	AddToCartContainer,
	AddToCartPrice,
	AddToCartPriceCurrency,
	AddToCartPriceValue, BackIcon, FavoriteButton,
	ProductAttribute,
	ProductAttributesContainer,
	ProductAttributeTitle,
	ProductContainer, ProductContent,
	ProductCount,
	ProductDescription,
	ProductDescriptionTitle,
	ProductDescriptionValue,
	ProductImageContainer, ProductImageSlideIcons,
	ProductTitle,
	ProductTitleContainer,
	ProductTitleValue,
	ProductType, RatingContainer, RatingCount, SwiperSlideContainer, SwiperSlideItem
} from "./styled.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getProduct} from "../../store/actions/product.actions.ts";
import {useNavigate, useParams} from "react-router-dom";
import {AttributeType} from "../../store/interfaces/product-attribute.interface.ts";
import ColorProductAttribute from "../../components/product/product-attribute/color-attribute.tsx";
import SizeProductAttribute from "../../components/product/product-attribute/size-attribute.tsx";
import {formatPrice} from "../../utils/numbers.ts";
import AddProductToCart from "../../components/icons/add-product-to-cart.icon.tsx";
import {useTranslation} from "react-i18next";
import PopUp from "../../components/pop-up";
import ProductAddedToCart from "../../components/icons/product-added-to-cart.icon.tsx";
import {CartRoute} from "../../router/routes.ts";
import {CURRENCY} from "../../utils/constants.ts";
import ClickableButton from "../../components/clickable-button";
import { Rating } from 'react-simple-star-rating';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import LeftArrowIcon from "../../components/icons/left-arrow.icon.tsx";
import LeftSwiperArrowIcon from "../../components/icons/left-swiper-arrow.icon.tsx";
import RightSwiperArrowIcon from "../../components/icons/right-swiper-arrow.icon.tsx";
import FavoriteIcon from "../../components/icons/favorite.icon.tsx";

const ProductView: React.FC = () => {
	const {id} = useParams();
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {data, loading} = useSelector((state: RootState) => state.productReducer);
	const [count, setCount] = useState(1);
	const [popUpOpen, setPopUpOpen] = useState(false);
	const navigate = useNavigate();

	const closePopUp = () => setPopUpOpen(false);
	const openPopUp = () => setPopUpOpen(true);

	useEffect(() => {
		if (id) {
			dispatch(getProduct(id.toString()));
		}
	}, [dispatch, id]);

	const increaseCount = () => {
		setCount(count => count + 1);
	}

	const decreaseCount = () => {
		setCount(count => count > 1 ? count - 1 : 1);
	}

	const addToCart = () => {
		setCount(1);
	}

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<>
			<Container style={{paddingTop: '0'}}>
				<BackIcon>
					<ClickableButton onClick={handleGoBack}>
						<LeftArrowIcon/>
					</ClickableButton>
				</BackIcon>
				{!loading && data && (
					<ProductContainer>
						<ProductImageContainer className='prevent-swipe'>
							<Swiper
								modules={[Navigation, Pagination]}
								spaceBetween={20}
								slidesPerView={1}
								pagination={{ clickable: true }}
								loop={true}
								navigation={{
									nextEl: ".swiper-button-next-custom",
									prevEl: ".swiper-button-prev-custom",
								}}
							>
								{data.images.map((image, index) => (
									<SwiperSlide key={index}>
										<SwiperSlideContainer>
											<SwiperSlideItem>
												<img
													src={image}
													alt={`Slide ${index}`}
												/>
											</SwiperSlideItem>
										</SwiperSlideContainer>
									</SwiperSlide>
								))}
							</Swiper>
							<ProductImageSlideIcons>
								<LeftSwiperArrowIcon/>
								<RightSwiperArrowIcon/>
							</ProductImageSlideIcons>
							<FavoriteButton>
								<ClickableButton onClick={() => {}}>
									<FavoriteIcon/>
								</ClickableButton>
							</FavoriteButton>
						</ProductImageContainer>
						<ProductContent>
							<ProductTitleContainer>
								<ProductCount>
									<span onClick={decreaseCount}>-</span>
									<span>{count}</span>
									<span onClick={increaseCount}>+</span>
								</ProductCount>
								<ProductTitle>
									<ProductTitleValue>{data.title}</ProductTitleValue>
									<ProductType>{data.type}</ProductType>
								</ProductTitle>
							</ProductTitleContainer>
							<RatingContainer>
								<Rating
									readonly={true}
									iconsCount={5}
									initialValue={data.rate}
									rtl={true}
									allowFraction={true}
									size={20}
									fillColor='#ffaf29'
								/>
								<RatingCount>
									({data.rate_count} {t('review')})
								</RatingCount>
							</RatingContainer>
							{data.attributes && data.attributes.length > 0 && (
								<ProductAttributesContainer>
									{data.attributes.map((attribute, index) => (
										<ProductAttribute key={index}>
											<ProductAttributeTitle>
												{attribute.title}
											</ProductAttributeTitle>
											{attribute.type == AttributeType.COLOR && (
												<ColorProductAttribute data={attribute.values}/>
											)}
											{attribute.type == AttributeType.SIZE && (
												<SizeProductAttribute data={attribute.values}/>
											)}
										</ProductAttribute>
									))}
								</ProductAttributesContainer>
							)}
							<ProductDescription>
								<ProductDescriptionTitle>
									{t('description')}
								</ProductDescriptionTitle>
								<ProductDescriptionValue>
									{data.description}
								</ProductDescriptionValue>
							</ProductDescription>
							<AddToCartContainer>
								<AddToCart>
									<AddToCartPrice>
										<AddToCartPriceValue>{formatPrice((data.price ?? 0) * count)}</AddToCartPriceValue>
										<AddToCartPriceCurrency>{CURRENCY}</AddToCartPriceCurrency>
									</AddToCartPrice>
									<ClickableButton onClick={() => (popUpOpen ? closePopUp() : openPopUp())}>
										<AddToCartButton onClick={addToCart}>
											<span>
												{t('add_to_cart')}
											</span>
											<AddProductToCart/>
										</AddToCartButton>
									</ClickableButton>
								</AddToCart>
							</AddToCartContainer>
						</ProductContent>
					</ProductContainer>
				)}
        <PopUp
          title={t('product_added_to_cart_title')}
          description={t('product_added_to_cart_description')}
          icon={<ProductAddedToCart/>}
          button_text={t('product_added_to_cart_close_text')}
          handleClose={closePopUp}
          link={CartRoute}
          isOpen={popUpOpen}
        />
			</Container>
		</>
	);
};

export default ProductView;