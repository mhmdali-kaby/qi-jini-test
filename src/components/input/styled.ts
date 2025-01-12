import styled from "styled-components";


export const Input = styled.input`
    background: #EBEBEB;
    border: none;
    direction: rtl;
    border-radius: 14px;
    padding: 18px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #71717A;
        font-size: 16px;
    }
`