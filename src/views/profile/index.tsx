import React, {useEffect} from 'react';
import {Container} from "../../styles/styled.ts";
import {
	LinkTitle,
	ProfileContainer,
	ProfileLinksSection,
	RightLinkContent,
	UserAvatar,
	UserDetails,
	UserId,
	UserInfo,
	UserName,
	UserPhone,
	UserRightInfo
} from "./styled.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {getProfileInfo} from "../../store/actions/profile.actions.ts";
import {useNavigate} from "react-router-dom";
import {HomeRoute} from "../../router/routes.ts";
import LinkLeftIcon from "../../components/icons/link-left-arrow.icon.tsx";
import ProfileLinkIcon from "../../components/icons/profile-link.icon.tsx";
import OrdersLinkIcon from "../../components/icons/orders-link.icon.tsx";
import FavoritesLinkIcon from "../../components/icons/favorites-link.icon.tsx";
import LocationsLinkIcon from "../../components/icons/locations-link.icon.tsx";
import CommonQuestionsLinkIcon from "../../components/icons/common-questions-link.icon.tsx";
import PrivacyPolicyLinkIcon from "../../components/icons/privacy-policy-link.icon.tsx";
import CommunityLinkIcon from "../../components/icons/community-link.icon.tsx";
import {useTranslation} from "react-i18next";

const ProfileView: React.FC = () => {
	const {t} = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const {info, loading} = useSelector((state: RootState) => state.profileReducer);

	useEffect(() => {
		dispatch(getProfileInfo());
	}, [dispatch]);

	return (
		<>
			<Container>
				{!loading && info &&
          <ProfileContainer>
            <UserDetails>
							{info.avatar &&
                <UserAvatar src={info.avatar}/>
							}
              <UserInfo>
                <UserRightInfo>
									{info.name &&
                    <UserName>{info.name}</UserName>
									}
									{info.phone &&
                    <UserPhone>{info.phone}</UserPhone>
									}
                </UserRightInfo>
								{info.id &&
                  <UserId>
                    #{info.id}
                  </UserId>
								}
              </UserInfo>
            </UserDetails>
            <ProfileLinksSection>
              <span onClick={() => navigate(HomeRoute)}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
										{t('personal_information')}
                  </LinkTitle>
                  <ProfileLinkIcon/>
                </RightLinkContent>
              </span>
              <span onClick={() => navigate(HomeRoute)}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
										{t('orders_list')}
                  </LinkTitle>
                  <OrdersLinkIcon/>
                </RightLinkContent>
              </span>
              <span onClick={() => navigate(HomeRoute)}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
										{t('favorites')}
                  </LinkTitle>
                  <FavoritesLinkIcon/>
                </RightLinkContent>
              </span>
              <span onClick={() => navigate(HomeRoute)}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
										{t('addresses')}
                  </LinkTitle>
                  <LocationsLinkIcon/>
                </RightLinkContent>
              </span>
            </ProfileLinksSection>
            <ProfileLinksSection>
              <span onClick={() => navigate(HomeRoute)}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
										{t('common_questions')}
                  </LinkTitle>
                  <CommonQuestionsLinkIcon/>
                </RightLinkContent>
              </span>
              <span onClick={() => navigate(HomeRoute)}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
										{t('terms_and_conditions')}
                  </LinkTitle>
                  <PrivacyPolicyLinkIcon/>
                </RightLinkContent>
              </span>
              <span onClick={() => navigate(HomeRoute)}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
										{t('community')}
                  </LinkTitle>
                  <CommunityLinkIcon/>
                </RightLinkContent>
              </span>
            </ProfileLinksSection>
          </ProfileContainer>
				}
			</Container>
		</>
	);
};

export default ProfileView;