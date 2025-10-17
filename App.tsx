import { ThemeProvider } from 'styled-components/native';
import { Router } from './src/routes';
import { defaultTheme } from './src/theme';
import { SimulationProvider } from './src/context/SimulationContext';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SimulationProvider>
        <Router />
      </SimulationProvider>
    </ThemeProvider>
  );
}
