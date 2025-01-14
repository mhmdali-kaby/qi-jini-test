import styled from "styled-components";

interface NavContainerProps {
	$show?: boolean
}

export const NavContainer = styled.nav<NavContainerProps>`
    display: ${({$show}) => $show ? 'flex' : 'none'};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    justify-content: space-around;
    background: #fff;
    padding: 16px 0;
    box-shadow: 0 -3px 7px 0 rgba(0, 0, 0, 0.10);
`;