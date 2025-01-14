import styled from "styled-components";

interface NavIconContainerProps {
	$is_active?: boolean;
}

export const Container = styled.div`
    padding: 12px 0 32px;

    > * {
        padding: 0 24px;
    }
`

export const DashDivider = styled.div`
    width: 100%;
    background-image: repeating-linear-gradient(90deg, #cbcbcb, #cbcbcb 14px, transparent 14px, transparent 24px);
    background-position: left top;
    background-repeat: repeat-x;
    background-size: 100% 1px;
    height: 1px;
`;

export const NavIconContainer = styled.div<NavIconContainerProps>`
    border-radius: 30px;
    display: flex;
    align-items: center;
    color: #000;
    font-weight: bold;
    background: ${({$is_active}) => $is_active ? '#EEE' : 'unset'};
    padding-left: ${({$is_active}) => $is_active ? '14px' : 'unset'};
    gap: 8px;

    circle, path {
        transition: all .2s ease-in-out;
    }
`;