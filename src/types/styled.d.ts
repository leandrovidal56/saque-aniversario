import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      WHITE: string;
      BLACK: string;
      GRAY_1: string;
      GRAY_2: string;
      GRAY_5: string;
      GRAY_8: string;
      RED_DARK: string;
      BLUE: string;
      GREEN: string;
    };
    FONT_SIZE: {
      SM: number;
      MD: number;
      LG: number;
    };
    FONT_WEIGHT: {
      THIN: number;
      EXTRA_LIGHT: number;
      LIGHT: number;
      NORMAL: number;
      MEDIUM: number;
      SEMI_BOLD: number;
      BOLD: number;
      EXTRA_BOLD: number;
      HEAVY: number;
    };
    sizes: {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
      6: number;
      7: number;
    };
  }
}
