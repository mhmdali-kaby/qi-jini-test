import React, {useEffect, useState} from 'react';
import {Container} from "../../styles/styled.ts";
import {
	AddToCart, AddToCartButton, AddToCartContainer, AddToCartPrice, AddToCartPriceCurrency, AddToCartPriceValue,
	ProductAttribute,
	ProductAttributesContainer, ProductAttributeTitle,
	ProductContainer,
	ProductCount, ProductDescription, ProductDescriptionTitle, ProductDescriptionValue,
	ProductImageContainer,
	ProductRate,
	ProductRateCount,
	ProductRateValue,
	ProductTitle,
	ProductTitleContainer,
	ProductTitleValue,
	ProductType
} from "./styled.ts";
import Header from "../../components/header";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getProduct} from "../../store/actions/product.actions.ts";
import {useParams} from "react-router-dom";
import StarIcon from "../../components/icons/star.icon.tsx";
import {AttributeType} from "../../store/interfaces/product-attribute.interface.ts";
import ColorProductAttribute from "../../components/product/product-attribute/color-attribute.tsx";
import SizeProductAttribute from "../../components/product/product-attribute/size-attribute.tsx";
import {formatPrice} from "../../utils/numbers.ts";
import AddProductToCart from "../../components/icons/add-product-to-cart.icon.tsx";
import {useTranslation} from "react-i18next";
import { motion } from "framer-motion";
import PopUp from "../../components/pop-up";
import ProductAddedToCart from "../../components/icons/product-added-to-cart.icon.tsx";
import {CartRoute} from "../../router/routes.ts";

const ProductView: React.FC = () => {
	const { id } = useParams();
	const { t } = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {data, loading} = useSelector((state: RootState) => state.productReducer);
	const [count, setCount] = useState(1);
	const [popUpOpen, setPopUpOpen] = useState(false);

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

	return (
		<>
			<Header/>
			<Container>
				{!loading && data && (
					<ProductContainer>
						<ProductImageContainer>
							<img src={data.image} alt={data.title}/>
							<ProductRate>
								<div>
									<ProductRateValue>
										<span>
											{data.rate}
										</span>
										<StarIcon isLarge={true}/>
									</ProductRateValue>
									<ProductRateCount>
										<span>
										 {data.rate_count}
										</span>
										<span>
											{t('rate')}
										</span>
									</ProductRateCount>
								</div>
							</ProductRate>
						</ProductImageContainer>
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
						<ProductDescription>
							<ProductDescriptionTitle>
								{t('description')}
							</ProductDescriptionTitle>
							<ProductDescriptionValue>
								{data.description}
							</ProductDescriptionValue>
						</ProductDescription>
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
						<AddToCartContainer>
							<AddToCart>
								<AddToCartPrice>
									<AddToCartPriceValue>{formatPrice(data.price * count)}</AddToCartPriceValue>
									<AddToCartPriceCurrency>IQD</AddToCartPriceCurrency>
								</AddToCartPrice>
								<motion.button
									whileHover={{scale: 1.1}}
									whileTap={{scale: 0.9}}
									className="add-to-cart"
									onClick={() => (popUpOpen ? closePopUp() : openPopUp())}
								>
									<AddToCartButton onClick={addToCart}>
										<span>
											{t('add_to_cart')}
										</span>
									<AddProductToCart/>
								</AddToCartButton>
							</motion.button>
						</AddToCart>
					</AddToCartContainer>
					</ProductContainer>
				)}
				{popUpOpen &&
					<PopUp
						title={t('product_added_to_cart_title')}
						description={t('product_added_to_cart_description')}
						icon={<ProductAddedToCart/>}
            button_text={t('product_added_to_cart_close_text')}
						handleClose={closePopUp}
						link={CartRoute}
					/>
				}
			</Container>
		</>
	);
};

export default ProductView;