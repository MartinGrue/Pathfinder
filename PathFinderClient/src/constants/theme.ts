const colors = {
  accent: "#284034",
  primary: "#294135",
  secondary: "#2A433F",
  tertiary: "#b0b377",
  black: "#323643",
  white: "#FDFDFB",
  white2:"#F3F2F1",
  gray: "#9DA3B4",
  gray2: "#a8a59f",
};

const sizes = {
  // global sizes
  base: 12,
  font: 14,
  radius: 10,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,
};

const fonts = {
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
  },
  h3: {
    fontSize: sizes.h3,
  },
  header: {
    fontSize: sizes.header,
  },
  title: {
    fontSize: sizes.title,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
  small: {},
};

export const theme = { colors, sizes, fonts };
