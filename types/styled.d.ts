import 'styled-components/native';
import { defaultThemeType } from '../src/theme/index';

declare module 'styled-components/native' {
  export interface DefaultTheme extends defaultThemeType {}
}
