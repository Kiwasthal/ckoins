import '../styles/globalReset.css';
import { ThemeProvider } from 'styled-components';
import { applicationTheme as theme } from '../components/styledComponents/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
