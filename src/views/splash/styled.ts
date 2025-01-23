import styled from '@emotion/styled';

export const SplashContainer = styled.div`
    height: 100vh;
    background: linear-gradient(
            to bottom,
            ${({theme}) => theme.colors.gradientStart} 10%,
            ${({theme}) => theme.colors.gradientEnd} 60%
    );
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 15px;
`;

export const SplashImage = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 25px;
    margin-top: 20px;
`

export const SplashContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
`

export const SplashTitle = styled.div`
    color: #000;
    text-align: right;
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`

export const SplashDescription = styled.div`
    color: #000;
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 34px;
    width: 65%;
`

export const SplashAction = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
`

export const SplashDots = styled.div`
    display: flex;
    gap: 4px;
`

export const SplashDot = styled.div<{ $is_active: number }>`
    height: 8px;
    transition: all 0.2s ease-in-out;
    width: ${({$is_active}) => $is_active ? '28px' : '8px'};
    border-radius: ${({$is_active}) => $is_active ? '32px' : '50%'};
    background: ${({$is_active, theme}) => $is_active ? theme.colors.orange : theme.colors.disableOrange};

`
