import styled from "styled-components";

interface IOrdersTabProps {
	$is_active: boolean;
}

interface IOrderInfoColorProps {
	$color: string;
}

export const OrdersHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const OrdersTitle = styled.div`
    color: #000;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    direction: rtl;
`;

export const OrdersTabs = styled.div`
    display: flex;
    gap: 12px;
`;

export const OrdersTab = styled.div<IOrdersTabProps>`
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

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 0 42px;
`;

export const Order = styled.div`
    display: flex;
    gap: 8px;
    padding: 12px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.10);
    border: 1px solid #EBEBEB;
    border-radius: 14px;
    flex-direction: row-reverse;
`;

export const OrderImage = styled.img`
    height: 90px;
    object-fit: cover;
    border-radius: 14px;
    width: 40%;
`;

export const OrderContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    gap: 12px;
`;

export const OrderTitle = styled.div`
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    direction: rtl;
`;

export const OrderInfo = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    direction: rtl;
`;


export const OrderInfoColum = styled.div`
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
`;

export const OrderInfoValue = styled.div`
    border-radius: 50%;
    border: 1px solid #CCC;
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    padding: 4px 8px 2px 10px;
    width: 4px;
    height: 16px;
`;

export const OrderInfoColor = styled.div<IOrderInfoColorProps>`
    padding: 2px 8px 1px;
    border: 1px solid #CCC;
    background-color: ${props => props.$color};
    border-radius: 50%;
    width: 6px;
    height: 19px;
`;

export const OrderBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const OrderPrice = styled.div`
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
        padding-bottom: 2px;
    }
`;

export const OrderStatus = styled.div`
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