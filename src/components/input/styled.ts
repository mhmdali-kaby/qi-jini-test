import styled from '@emotion/styled';

interface InputProps {
	$color?: string
}

export const Input = styled.input<InputProps>`
    background: #F4F4F5;
    border: none;
    direction: rtl;
    border-radius: 14px;
    padding: 16px 18px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: ${({$color}) => $color ? $color : '#71717A'};
        font-size: 16px;
    }
`