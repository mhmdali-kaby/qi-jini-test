import React, {useEffect} from 'react';
import Header from "../../components/header";
import {Container} from "../../styles/styled.ts";
import Nav from "../../components/nav";
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
import {Link} from "react-router-dom";
import {HomeRoute} from "../../router/routes.ts";
import LinkLeftIcon from "../../components/icons/link-left-arrow.icon.tsx";
import ProfileLinkIcon from "../../components/icons/profile-link.icon.tsx";
import OrdersLinkIcon from "../../components/icons/orders-link.icon.tsx";
import FavoritesLinkIcon from "../../components/icons/favorites-link.icon.tsx";
import LocationsLinkIcon from "../../components/icons/locations-link.icon.tsx";
import CommonQuestionsLinkIcon from "../../components/icons/common-questions-link.icon.tsx";
import PrivacyPolicyLinkIcon from "../../components/icons/privacy-policy-link.icon.tsx";
import CommunityLinkIcon from "../../components/icons/community-link.icon.tsx";

const ProfileView: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const {info, loading} = useSelector((state: RootState) => state.profileReducer);

	useEffect(() => {
		dispatch(getProfileInfo());
	}, [dispatch]);

	return (
		<>
			<Header/>
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
              <Link to={HomeRoute}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
                    المعلومات الشخصية
                  </LinkTitle>
                  <ProfileLinkIcon/>
                </RightLinkContent>
              </Link>
              <Link to={HomeRoute}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
                    سجل الطلبات
                  </LinkTitle>
                  <OrdersLinkIcon/>
                </RightLinkContent>
              </Link>
              <Link to={HomeRoute}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
                    المفضلة
                  </LinkTitle>
                  <FavoritesLinkIcon/>
                </RightLinkContent>
              </Link>
              <Link to={HomeRoute}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
                    العناوين
                  </LinkTitle>
                  <LocationsLinkIcon/>
                </RightLinkContent>
              </Link>
            </ProfileLinksSection>
            <ProfileLinksSection>
              <Link to={HomeRoute}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
                    الأسئلة الشائعة
                  </LinkTitle>
                  <CommonQuestionsLinkIcon/>
                </RightLinkContent>
              </Link>
              <Link to={HomeRoute}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
                    الشروط و الأحكام
                  </LinkTitle>
                  <PrivacyPolicyLinkIcon/>
                </RightLinkContent>
              </Link>
              <Link to={HomeRoute}>
                <LinkLeftIcon/>
                <RightLinkContent>
                  <LinkTitle>
                    المجتمع
                  </LinkTitle>
                  <CommunityLinkIcon/>
                </RightLinkContent>
              </Link>
            </ProfileLinksSection>
          </ProfileContainer>
				}
			</Container>
			<Nav/>
		</>
	);
};

export default ProfileView;