import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Router from './router/router.tsx'
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme.ts";
import {GlobalStyles} from "./styles/global.ts";
import {store} from "./store";
import {Provider} from "react-redux";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles theme={theme}/>
			<Provider store={store}>
				<Router/>
			</Provider>
		</ThemeProvider>
	</StrictMode>,
)
