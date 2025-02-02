import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Router from './router/router.tsx'
import {ThemeProvider} from "@emotion/react";
import {theme} from "./styles/theme.ts";
import {GlobalStyles} from "./styles/global.tsx";
import {store} from "./store";
import {Provider} from "react-redux";
import './i18n/i18n.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles/>
			<Provider store={store}>
				<Router/>
			</Provider>
		</ThemeProvider>
	</StrictMode>,
)
