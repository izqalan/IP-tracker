module.exports = {
  purge: ["./src/**/*.js"],
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#c5d1ff",
          200: "#9fb2ff",
          300: "#8ba2ff",
          400: "#6583ff",
          500: "#3e64ff",
          600: "#385ae6",
          700: "#2614f1",
          800: "#1f3280",
          900: "#131e4c"
        },
        maize: "#FFBD59",
        darkmaize: "#FFAB00",
        pending: "#e4894d",
        registered: "#385ae6",
        arrived: "#48BB78",
        expired: "#F56565"
      },
      minHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        screen: "100vh"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1400px",
        xxl: "1900px"
      },
      fontSize: {
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem"
      },
      backgroundPosition: {
        bottom: "bottom",
        center: "center",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top"
      },
      backgroundSize: {
        full: "100% 100%",
        "w-100": "100%"
      },
      borderColor: {
        azure: "#ECFCFF"
      },
      borderRadius: {
        none: "0",
        sm: ".125rem",
        default: ".25rem",
        lg: ".5rem",
        full: "9999px"
      },
      width: {
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.66667%",
        "5/6": "83.33333%",
        "3/10": "30%",
        "1/20": "5%",
        "3/20": "15%",
        "2/20": "10%",
        "4/20": "20%",
        "5/20": "25%",
        "13/20": "65%",
        "17/20": "85%",
        30: "7.5rem",
        50: "12.5rem",
        126: "30rem",
        full: "100%",
        screen: "100vw"
      },
      height: {
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.33333%",
        "2/3": "66.66667%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.66667%",
        "5/6": "83.33333%",
        "1/12": "8.333333%",
        "1/2-vh": "50vh",
        "1/5-vh": "20vh",
        "2/5-vh": "40vh",
        "3/5-vh": "60vh",
        "3/4-vh": "75vh",
        30: "7.5rem",
        100: "26rem",
        130: "34rem",
        136: "40rem",
        full: "100%",
        screen: "100vh"
      },
      minWidth: {
        0: "0",
        "3/5": "60%",
        full: "100%"
      },
      maxWidth: {
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        full: "100%"
      },
      maxHeight: {
        "1/5-vh": "20vh",
        "2/5-vh": "40vh",
        "1/2-vh": "50vh",
        "3/5-vh": "60vh",
        "3/4-vh": "75vh",
        "20-vh": "20vh",
        "30-vh": "30vh",
        "70-vh": "70vh",
        80: "80%",
        90: "90%",
        full: "100%",
        screen: "100vh"
      },
      margin: {
        auto: "auto",
        "-px": "-1px",
        "-1": "-0.25rem",
        "-2": "-0.5rem",
        "-3": "-0.75rem",
        "-4": "-1rem",
        "-5": "-1.25rem",
        "-6": "-1.5rem",
        "-8": "-2rem",
        "-9": "-2.25rem",
        "-10": "-2.5rem",
        "-12": "-3rem",
        "-16": "-4rem",
        "-20": "-5rem",
        "-24": "-6rem",
        "-32": "-8rem",
        40: "10rem"
      },
    },

    fontFamily: {
      body: ["Rubik", "sans-serif"],
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    }
  },
  corePlugins: {},
  plugins: []
};
