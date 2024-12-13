import styled from "styled-components";

interface IPurchasesTabProps {
	$is_active: boolean;
}

interface IPurchaseInfoColorProps {
	$color: string;
}

export const PurchasesHeader = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
`;

export const PurchasesTitle = styled.div`
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    direction: rtl;
`;

export const PurchasesTabs = styled.div`
    display: flex;
    gap: 12px;
`;

export const PurchasesTab = styled.div<IPurchasesTabProps>`
		border: 1px solid ${props => props.$is_active ? "#7AB877" : "#000"};
		color: ${props => props.$is_active ? "#7AB877" : "#fff"};
		background: ${props => props.$is_active ? "#fff" : "#000"};
    border-radius: 8px;
    padding: 6px 12px;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    gap: 6px;
`;

export const PurchasesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 0 42px;
`;

export const Purchase = styled.div`
		display: flex;
		gap: 8px;
		padding: 12px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.10);
    border: 1px solid #EBEBEB;
    border-radius: 14px;    
		flex-direction: row-reverse;
`;

export const PurchaseImage = styled.img`
		object-fit: cover;
		border-radius: 14px;
		width: 40%;
`;

export const PurchaseContent = styled.div`
		display: flex;
		justify-content: space-between;
		flex-direction: column;
    width: 100%;
    gap: 12px;
`;

export const PurchaseTitle = styled.div`
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    direction: rtl;
`;

export const PurchaseInfo = styled.div`
		display: flex;
		gap: 8px;
		align-items: center;
    direction: rtl;
`;


export const PurchaseInfoColum = styled.div`
		display: flex;
		gap: 8px;
		align-items: center;
		span {
        color: #666;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
		}
		&.baseline {
				align-items: baseline;
		}
`;

export const PurchaseInfoValue = styled.div`
		border-radius: 50%;
		border: 1px solid #CCC;
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    padding: 4px 8px 1px;
`;

export const PurchaseInfoColor = styled.div<IPurchaseInfoColorProps>`
    padding: 2px 8px 1px;
		background-color: ${props => props.$color};
    border-radius: 50%;
    width: 6px;
    height: 18px;
`;

export const PurchaseBottom = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
`;

export const PurchasePrice = styled.div`
    color: #000;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    display: flex;
    align-items: flex-end;
    gap: 2px;
		span {
        color: #000;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
		}
`;

export const PurchaseStatus = styled.div`
		display: flex;
		gap: 8px;
    border-radius: 10px;
    background: #00990A;
    color: #FFF;
    font-size: 10px;
    font-style: normal;
    font-weight: 800;
    line-height: 150%;
    padding: 4px 8px;
    align-items: center;
`;