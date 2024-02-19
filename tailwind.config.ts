import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "body-micro": ["1.2rem", { lineHeight: "1.573rem" }],
        "body-small": ["1.4rem", { lineHeight: "1.573rem" }],
        "body-default": ["1.6rem", { lineHeight: "2.4rem" }],
        "heading-5": ["1.8rem", { lineHeight: "2.178rem" }],
        "heading-4": ["2rem", { lineHeight: "2.8rem" }],
        "heading-3": ["2.4rem", { lineHeight: "3.2rem" }],
        "heading-2": ["3.2rem", { lineHeight: "3.873rem" }],
      },
      colors: {
        dark: "#1C1C1C",
        gray600: "#505050",
        gray500: "#8B96A5",
        gray400: "#BDC4CD",
        gray300: "#DEE2E7",
        gray200: "#EFF2F4",
        gray100: "#F7FAFC",
        green: "#00B517",
        primary: "#0D6EFD",
        orange: "#FF9017",
        red: "#FA3434",
        green300: "#C3FFCB",
        orange300: "#FFE5BF",
        white: "#FFFFFF",
        baseColor: {
          blue: "#E3F0FF",
        },
        select: {
          hovered: "#E5F1FF",
          active: "",
        },
      },
      spacing: {
        small: ".5rem",
        "0.8": "0.8rem",
        "0.9": "0.9rem",
        "1": "1rem",
        "2": "2rem",
        "2.4": "2.4rem",
        "2.5": "2.5rem",
        "8": "8rem",
        "20": "20rem",
        "10p": "10%",
        "100p": "100%",
      },
      borderRadius: {
        small: "0.6rem",
      },
      fontWeight: {
        regular: "400",
        semiBold: "500",
        bold: "600",
        extraBold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
