import styled from "styled-components";

export const BackdropContainer = styled.div`
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
		padding: 0;
    width: 100%;
    z-index: 9;
		.backdrop {
				height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.70);
		}
`;