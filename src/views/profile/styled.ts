import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const UserDetails = styled.div`
    border-radius: 14px;
    border: 1px solid #E4E4E4;
    background: #FFF8F4;
    box-shadow: 0 11px 24px 0 rgba(0, 0, 0, 0.10);
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 12px;
    direction: rtl;
`;

export const UserAvatar = styled.img`
    border-radius: 14px;
    width: 25%;
`;

export const UserInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const UserRightInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const UserName = styled.div`
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const UserPhone = styled.div`
    color: rgba(0, 0, 0, 0.80);
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const UserId = styled.div`
    color: #505050;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`;

export const ProfileLinksSection = styled.div`
    border-radius: 20px;
    border: 1px solid #DDD;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    a {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const RightLinkContent = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const LinkTitle = styled.div`
    color: #000;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;