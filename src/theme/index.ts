export const defaultTheme = {
  COLORS: {
    blue: '#004cd0',
    gray: '#E6E6FA',
    white: '#FFFFFF',
    lightGray: '#5e6367ff',
    text: '#212529',
    black: '#000000',
    lightBlue: '#3366FF',
    redDark: '#ff6868ff',
    green: '#28A745',
  },
  FONT_SIZE: {
    sm: 12,
    md: 16,
    lg: 20,
    bg: 34,
    family: {
      Montserrat: 'Montserrat_600SemiBold',
      MontserratBold: 'Montserrat_700Bold',
    },
  },
  FONT_WEIGHT: {
    thin: 100,
    extra_light: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semi_bold: 600,
    bold: 700,
    extra_bold: 900,
    heavy: 900,
  },
  SIZES: {
    sm: 8,
    md: 16,
    lg: 32,
    bg: 64,
  },
  BORDER_RADIUS: {
    size: 1,
    radius: 5,
    radiusSecondary: 10,
  },
};

export type defaultThemeType = typeof defaultTheme;
