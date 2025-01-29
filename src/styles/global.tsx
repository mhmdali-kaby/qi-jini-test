import {css, Global} from '@emotion/react';

export const GlobalStyles = () => (
	<Global
		styles={css`
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

        * {
            -webkit-tap-highlight-color: transparent;
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

        .backdrop {
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.70);
            opacity: 1;
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            padding: 0 !important;
            width: 100%;
            z-index: 9;
        }

        .clickable-button {
            background: none;
            border: none;
            padding: 0;
            user-select: none;
            outline: none;
            appearance: none;

            &:active {
                background-color: transparent;
                box-shadow: none;
            }

            &:focus {
                outline: none;
                box-shadow: none;
            }
        }

        .bottom-sheet {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #FFF;
            border-radius: 20px 20px 0 0;
            padding: 20px;
            z-index: 20;
            height: 500px;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
            overflow: scroll;
        }

        .fade-animation {
            height: fit-content;

            span {
                display: flex;
            }
        }
		`}
	/>
);