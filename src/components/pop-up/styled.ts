import styled from "styled-components";

export const PopUpContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .pop-up {
        background: #fff;
        border-radius: 20px;
        width: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 32px 24px;

        .pup-up-button {
            border-radius: 30px;
            background: ${({theme}) => theme.colors.orange};
            color: #FFF;
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 150%;
            padding: 5px 16px 2px;
            border: none;
        }
    }
`;

export const PopUpTitle = styled.span`
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const PopUpDescription = styled.span`
    color: #666;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;