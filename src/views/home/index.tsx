import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from "../../store";
import {getBestOffers, getNewProducts, getOffers, getSpecialOffers} from "../../store/actions/home.actions.ts";
import Header from "../../components/header";
import SearchInput from "../../components/search-input";
import {
	FilterCategoriesContainer,
	FilterCategory,
	FilterIconContainer,
	HomeProduct,
	HomeProductContent,
	HomeProductDescription,
	HomeProductFavoriteIcon,
	HomeProductImage,
	HomeProductNumbers,
	HomeProductOldPrice,
	HomeProductPrice,
	HomeProductRate,
	HomeProductsContainer,
	HomeProductsTitle,
	HomeProductText,
	HomeProductTitle,
	NewProduct,
	NewProductContent,
	NewProductContentHeader,
	NewProductDescription,
	NewProductFooter,
	NewProductImage,
	NewProductLabel,
	NewProductOldPrice,
	NewProductPrice,
	NewProductRate,
	NewProducts,
	NewProductsTitle,
	NewProductText,
	NewProductTitle,
	Offer,
	OfferButton,
	OfferContent,
	OfferDescription,
	OffersContainer,
	OfferTitle,
	SearchContainer
} from "./styled.ts";
import FilterIcon from "../../components/icons/filter.icon.tsx";
import {Container, DashDivider} from "../../styles/styled.ts";
import {getHomeFilterCategories} from "../../store/actions/categories.actions.ts";
import {formatPrice} from "../../utils/numbers.ts";
import StarIcon from "../../components/icons/star.icon.tsx";
import FavoriteIcon from "../../components/icons/favorite.icon.tsx";
import Nav from "../../components/nav";
import {Link} from "react-router-dom";
import {ProductRoute} from "../../router/routes.ts";
import {useTranslation} from "react-i18next";
import {CURRENCY} from "../../utils/constants.ts";

const HomeView: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const {
		offers,
		bestOffers,
		newProducts,
		specialOffers,
		filterCategories
	} = useSelector((state: RootState) => state.homeReducer);

	useEffect(() => {
		dispatch(getOffers());
		dispatch(getBestOffers());
		dispatch(getNewProducts());
		dispatch(getSpecialOffers());
		dispatch(getHomeFilterCategories());
	}, [dispatch]);

	return (
		<>
			<Header showIcon={true}/>
			<Container>
				<SearchContainer>
					<FilterIconContainer>
						<FilterIcon/>
					</FilterIconContainer>
					<SearchInput/>
				</SearchContainer>
				{!filterCategories.loading && filterCategories.data.length > 0 &&
          <FilterCategoriesContainer className="hidden-scroll">
						{filterCategories.data.map((category, index) => (
							<FilterCategory key={index}>{category.title}</FilterCategory>
						))}
          </FilterCategoriesContainer>
				}
				{!offers.loading && offers.data.length > 0 &&
          <OffersContainer className="hidden-scroll">
						{offers.data.map((offer, index) => (
							<Offer key={index} $image={offer.image}>
								<OfferContent>
									<OfferTitle>{offer.title}</OfferTitle>
									<OfferDescription>{offer.description}</OfferDescription>
								</OfferContent>
								<OfferButton>
									{t('order_now')}
								</OfferButton>
							</Offer>
						))}
          </OffersContainer>
				}
				{!bestOffers.loading && offers.data.length > 0 &&
          <div>
            <HomeProductsTitle>
              <span>{t('show_all')}</span>
              <div>{t('best_offers')}</div>
            </HomeProductsTitle>
            <HomeProductsContainer>
							{bestOffers.data.map((offer, index) => (
								<HomeProduct key={index}>
									<Link to={ProductRoute.replace(':id', offer.id.toString())}>
										<HomeProductImage src={offer.image}/>
									</Link>
									<HomeProductFavoriteIcon>
										<FavoriteIcon/>
									</HomeProductFavoriteIcon>
									<HomeProductContent>
										<HomeProductNumbers>
											<div>
												<HomeProductPrice>
													{formatPrice(offer.price)}
													<span>{CURRENCY}</span>
												</HomeProductPrice>
												{offer.old_price &&
                          <HomeProductOldPrice>
                            <div>{formatPrice(offer.old_price)}</div>
                            <span>{t('previously')}</span>
                          </HomeProductOldPrice>
												}
											</div>
											<HomeProductRate>
												{offer.rate}
												<StarIcon/>
											</HomeProductRate>
										</HomeProductNumbers>
										<Link to={ProductRoute.replace(':id', offer.id.toString())}>
											<HomeProductText>
												<HomeProductTitle>{offer.title}</HomeProductTitle>
												<HomeProductDescription>{offer.description}</HomeProductDescription>
											</HomeProductText>
										</Link>
									</HomeProductContent>
								</HomeProduct>
							))}
            </HomeProductsContainer>
            <DashDivider/>
          </div>
				}
				{!newProducts.loading && newProducts.data.length > 0 &&
          <NewProducts>
            <NewProductsTitle>
              <span>{t('show_all')}</span>
              <div>{t('new_products')}</div>
            </NewProductsTitle>
						{newProducts.data.map((product, index) => (
							<NewProduct key={index}>
								<NewProductContent>
									<NewProductContentHeader>
										<NewProductRate>
											{product.rate}
											<StarIcon/>
										</NewProductRate>
										{product.label &&
                      <NewProductLabel $color={product.label_color}>
												{product.label}
                      </NewProductLabel>
										}
									</NewProductContentHeader>
									<Link to={ProductRoute.replace(':id', product.id.toString())}>
										<NewProductText>
											<NewProductTitle>{product.title}</NewProductTitle>
											<NewProductDescription>{product.description}</NewProductDescription>
										</NewProductText>
									</Link>
									<NewProductFooter>
										<div>
											<NewProductPrice>
												<div>{formatPrice(product.price)}</div>
												<span>{CURRENCY}</span>
											</NewProductPrice>
											{product.old_price &&
                        <NewProductOldPrice>
                          <span>{formatPrice(product.old_price)}</span>
                          <div>{t('previously')}</div>
                        </NewProductOldPrice>
											}
										</div>
										<div>
											<FavoriteIcon/>
										</div>
									</NewProductFooter>
								</NewProductContent>
								<Link to={ProductRoute.replace(':id', product.id.toString())} className='image-container'>
									<NewProductImage src={product.image}/>
								</Link>
							</NewProduct>
						))}
          </NewProducts>
				}
				{!newProducts.loading && newProducts.data.length > 0 &&
          <div>
            <DashDivider/>
          </div>
				}
				{!specialOffers.loading && specialOffers.data.length > 0 &&
          <div>
            <HomeProductsTitle>
              <span>{t('show_all')}</span>
              <div>{t('special_offers')}</div>
            </HomeProductsTitle>
            <HomeProductsContainer className='small'>
							{specialOffers.data.map((offer, index) => (
								<HomeProduct key={index} className='small'>
									<Link to={ProductRoute.replace(':id', offer.id.toString())}>
										<HomeProductImage src={offer.image}/>
									</Link>
									<HomeProductFavoriteIcon className='small'>
										<FavoriteIcon/>
									</HomeProductFavoriteIcon>
									<HomeProductContent>
										<HomeProductNumbers>
											<div>
												<HomeProductPrice className='small'>
													{formatPrice(offer.price)}
													<span>{CURRENCY}</span>
												</HomeProductPrice>
												{offer.old_price &&
                          <HomeProductOldPrice className='small'>
                            <div>{formatPrice(offer.old_price)}</div>
                            <span>{t('previously')}</span>
                          </HomeProductOldPrice>
												}
											</div>
											<HomeProductRate className='small'>
												{offer.rate}
												<StarIcon isSmall={true}/>
											</HomeProductRate>
										</HomeProductNumbers>
										<Link to={ProductRoute.replace(':id', offer.id.toString())}>
											<HomeProductText>
												<HomeProductTitle className='small'>{offer.title}</HomeProductTitle>
												<HomeProductDescription className='small'>{offer.description}</HomeProductDescription>
											</HomeProductText>
										</Link>
									</HomeProductContent>
								</HomeProduct>
							))}
            </HomeProductsContainer>
            <DashDivider/>
          </div>
				}
				{!newProducts.loading && newProducts.data.length > 0 &&
          <NewProducts className="light">
            <NewProductsTitle className="light">
              <span>{t('show_all')}</span>
              <div>{t('new_products')}</div>
            </NewProductsTitle>
						{newProducts.data.map((product, index) => (
							<NewProduct key={index}>
								<NewProductContent>
									<NewProductContentHeader>
										<NewProductRate>
											{product.rate}
											<StarIcon/>
										</NewProductRate>
										{product.label &&
                      <NewProductLabel $color={product.label_color}>
												{product.label}
                      </NewProductLabel>
										}
									</NewProductContentHeader>
									<Link to={ProductRoute.replace(':id', product.id.toString())}>
										<NewProductText>
											<NewProductTitle>{product.title}</NewProductTitle>
											<NewProductDescription>{product.description}</NewProductDescription>
										</NewProductText>
									</Link>
									<NewProductFooter>
										<div>
											<NewProductPrice>
												<div>{formatPrice(product.price)}</div>
												<span>{CURRENCY}</span>
											</NewProductPrice>
											{product.old_price &&
                        <NewProductOldPrice>
                          <span>{formatPrice(product.old_price)}</span>
                          <div>{t('previously')}</div>
                        </NewProductOldPrice>
											}
										</div>
										<div>
											<FavoriteIcon/>
										</div>
									</NewProductFooter>
								</NewProductContent>
								<Link to={ProductRoute.replace(':id', product.id.toString())} className='image-container'>
									<NewProductImage src={product.image}/>
								</Link>
							</NewProduct>
						))}
          </NewProducts>
				}
			</Container>
			<Nav/>
		</>
	);
};

export default HomeView;