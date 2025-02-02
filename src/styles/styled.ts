import styled from '@emotion/styled';

interface NavIconContainerProps {
	$is_active?: boolean;
}

export const Container = styled.div`
    padding: 12px 0 32px;

    > * {
        padding: 0 24px;
    }
`

export const HomeDivider = styled.div`
    width: 90%;
    margin: 0 auto;
    border-top: 1px solid rgba(203, 203, 203, 0.28);
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

export const BackIconContainer = styled.div`
    border-radius: 50%;
    background-color: rgb(255 106 0);
    padding: 1px 2px 1px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
`;