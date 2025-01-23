import styled from '@emotion/styled';

export const OrderDetailsTitle = styled.div`
    color: #000;
    direction: rtl;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
`;

export const OrderDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 24px 0 42px;
`;

export const OrderTrackingContainer = styled.div`
    border-radius: 13px;
    border: 1px solid #EBEBEB;
    background: #FFF;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px;
    margin-top: 24px;
`;

export const OrderTrackingSteps = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const OrderTrackingStep = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: row-reverse;
    align-items: center;
    position: relative;
`;

export const OrderTrackingStepIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.10);
    border-radius: 50%;
    padding: 8px;
`;

export const OrderTrackingDot = styled.span`
    background: #000;
    border-radius: 50%;
    width: 8px;
    height: 8px;
`;

export const OrderTrackingContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    direction: rtl;

    .order-step-title {
        color: ${({theme}) => theme.colors.orange};
        text-align: right;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
    }

    .order-step-date {
        color: #666;
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }
`;

export const OrderTrackingStepLine = styled.div`
    height: 67px;
    width: 2px;
    background: #000;
    position: absolute;
    top: -53px;
    right: 61px;
`;

export const OrderNote = styled.div`
    border-radius: 13px;
    border: 1px solid #EBEBEB;
    background: #FFF7EE;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.10);
    color: #000;
    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    direction: rtl;
    padding: 18px;
    margin-top: 14px;
`;

export const WhatsButton = styled.a`
    border-radius: 13px;
    background: #32D851;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.10);
    display: flex;
    justify-content: space-between;
    color: #FFF;
    text-align: right;
    font-size: 15px;
    font-style: normal;
    font-weight: 800;
    align-items: center;
    padding: 6px 20px 6px 14px;
`;