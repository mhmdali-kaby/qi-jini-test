import {createGlobalStyle} from 'styled-components';

type ThemeType = {
	colors: Record<string, string>;
}

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    @font-face {
        font-family: 'Ping AR + LT';
        src: url('/assets/fonts/PingAR+LT-Black.otf') format('opentype');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'Ping AR + LT';
        src: url('/assets/fonts/PingAR+LT-Bold.otf') format('opentype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Ping AR + LT';
        src: url('/assets/fonts/PingAR+LT-Regular.otf') format('opentype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Ping AR + LT';
        src: url('/assets/fonts/PingAR+LT-ExtraLight.otf') format('opentype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Ping AR + LT';
        src: url('/assets/fonts/PingAR+LT-Hairline.otf') format('opentype');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Ping AR + LT';
        src: url('/assets/fonts/PingAR+LT-Heavy.otf') format('opentype');
        font-weight: 800;
        font-style: normal;
    }

    @font-face {
        font-family: 'Ping AR + LT';
        src: url('/assets/fonts/PingAR+LT-Light.otf') format('opentype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Ping AR + LT';
        src: url('/assets/fonts/PingAR+LT-Medium.otf') format('opentype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Ping AR + LT';
        src: url('/assets/fonts/PingAR+LT-Thin.otf') format('opentype');
        font-weight: 100;
        font-style: normal;
    }

    html, body {
        height: 100%;
        margin: 0;
        font-family: 'Ping AR + LT', sans-serif;
    }

    .hidden-scroll {
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    a {
        text-decoration: none;
    }
`;