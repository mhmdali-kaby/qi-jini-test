import styled from "styled-components";

interface HeaderContainerProps {
	$show?: boolean
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
    display: ${({$show}) => $show ? 'flex' : 'none'};
    position: sticky;
    top: 0;
    right: 0;
    padding: 12px 24px 8px;
    background: linear-gradient(to bottom, #F9731666 20%, #ffffff78 100%);
    backdrop-filter: blur(8px);
    justify-content: space-between;
    align-items: center;
    z-index: 9;
`;

export const HeaderLeftIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
`

export const HeaderIcon = styled.div<{ $padding: string }>`
    display: flex;
    background: #fff;
    padding: ${({$padding}) => $padding}px;
    border-radius: 50%;
    box-shadow: 1px 1px 20px 8px rgb(0 0 0 / 12%);
    position: relative;
`;

export const HeaderIconCounter = styled.span<{ $small: boolean }>`
    background: #fff;
    padding: ${({$small}) => $small ? '5px 2px' : '6px 3px'};
    border-radius: 50%;
    position: absolute;
    top: ${({$small}) => $small ? '-6px' : '-12px'};
    right: -8px;

    span {
        background: ${({theme}) => theme.colors.orange};
        padding: ${({$small}) => $small ? '3px 7px 2px' : '4px 8px 4px'};
        border-radius: 50%;
        color: #FFF;
        font-weight: bold;
        font-size: 12px;
    }
`;

export const HeaderRightIcons = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`;

export const HeaderRightContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const HeaderRightAvatar = styled.div`
    display: flex;
    background: #fff;
    padding: 12px 18px;
    border-radius: 50%;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.12));
`;

export const HeaderRightContentWelcome = styled.div`
    color: #000;
    text-align: right;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 90%;
`;

export const HeaderRightContentName = styled.div`
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 90%;
`;
