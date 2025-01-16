import styled from "styled-components";

export const FiltersContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: overlay;
    margin: 25px 0;
		height: 90%;
		.inputs-set {
        display: flex;
        flex-direction: column;
        gap: 14px;
		}
`;

export const FilterNotch = styled.div`
		position: absolute;
		left: 0;
		width: 100%;
    height: 6px;
		span {
				display: block;
        width: 50px;
        height: 6px;
        border-radius: 18px;
        margin: auto;
        background: #00000080;
		}
`;

export const ApplyButton = styled.div`
    background: ${({theme}) => theme.colors.orange};
    padding: 12px 14px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 208%;
`;