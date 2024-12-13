import styled from "styled-components";

export const InputContainer = styled.label`
    display: flex;
    align-items: center;
    border-radius: 30px;
    background: #EBEBEB;
    padding: 18px;
`

export const Input = styled.input`
		background: transparent;
    width: 100%;
    border: none;
		direction: rtl;
		&:focus {
				outline: none;
		}
`