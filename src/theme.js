import React from "react";
import { theme } from "@chakra-ui/core";

export default {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: `Inter,${theme.fonts.heading}`,
    body: `Inter,${theme.fonts.body}`
  },
  sizes: {
    ...theme.sizes,
    "7xl": "80rem"
  },
  colors: {
    ...theme.colors,
    gray: {
      "50": "#f9fafb",
      "100": "#f4f5f7",
      "200": "#e5e7eb",
      "300": "#d2d6dc",
      "400": "#9fa6b2",
      "500": "#6b7280",
      "600": "#4b5563",
      "700": "#374151",
      "800": "#252f3f",
      "900": "#161e2e"
    },
    "cool-gray": {
      "50": "#fbfdfe",
      "100": "#f1f5f9",
      "200": "#e2e8f0",
      "300": "#cfd8e3",
      "400": "#97a6ba",
      "500": "#64748b",
      "600": "#475569",
      "700": "#364152",
      "800": "#27303f",
      "900": "#1a202e"
    },
    red: {
      "50": "#fdf2f2",
      "100": "#fde8e8",
      "200": "#fbd5d5",
      "300": "#f8b4b4",
      "400": "#f98080",
      "500": "#f05252",
      "600": "#e02424",
      "700": "#c81e1e",
      "800": "#9b1c1c",
      "900": "#771d1d"
    },
    orange: {
      "50": "#fff8f1",
      "100": "#feecdc",
      "200": "#fcd9bd",
      "300": "#fdba8c",
      "400": "#ff8a4c",
      "500": "#ff5a1f",
      "600": "#d03801",
      "700": "#b43403",
      "800": "#8a2c0d",
      "900": "#771d1d"
    },
    yellow: {
      "50": "#fdfdea",
      "100": "#fdf6b2",
      "200": "#fce96a",
      "300": "#faca15",
      "400": "#e3a008",
      "500": "#c27803",
      "600": "#9f580a",
      "700": "#8e4b10",
      "800": "#723b13",
      "900": "#633112"
    },
    green: {
      "50": "#f3faf7",
      "100": "#def7ec",
      "200": "#bcf0da",
      "300": "#84e1bc",
      "400": "#31c48d",
      "500": "#0e9f6e",
      "600": "#057a55",
      "700": "#046c4e",
      "800": "#03543f",
      "900": "#014737"
    },
    teal: {
      "50": "#edfafa",
      "100": "#d5f5f6",
      "200": "#afecef",
      "300": "#7edce2",
      "400": "#16bdca",
      "500": "#0694a2",
      "600": "#047481",
      "700": "#036672",
      "800": "#05505c",
      "900": "#014451"
    },
    blue: {
      "50": "#ebf5ff",
      "100": "#e1effe",
      "200": "#c3ddfd",
      "300": "#a4cafe",
      "400": "#76a9fa",
      "500": "#3f83f8",
      "600": "#1c64f2",
      "700": "#1a56db",
      "800": "#1e429f",
      "900": "#233876"
    },
    indigo: {
      "50": "#f0f5ff",
      "100": "#e5edff",
      "200": "#cddbfe",
      "300": "#b4c6fc",
      "400": "#8da2fb",
      "500": "#6875f5",
      "600": "#5850ec",
      "700": "#5145cd",
      "800": "#42389d",
      "900": "#362f78"
    },
    purple: {
      "50": "#f6f5ff",
      "100": "#edebfe",
      "200": "#dcd7fe",
      "300": "#cabffd",
      "400": "#ac94fa",
      "500": "#9061f9",
      "600": "#7e3af2",
      "700": "#6c2bd9",
      "800": "#5521b5",
      "900": "#4a1d96"
    },
    pink: {
      "50": "#fdf2f8",
      "100": "#fce8f3",
      "200": "#fad1e8",
      "300": "#f8b4d9",
      "400": "#f17eb8",
      "500": "#e74694",
      "600": "#d61f69",
      "700": "#bf125d",
      "800": "#99154b",
      "900": "#751a3d"
    }
  },
  shadows: {
    ...theme.shadows,
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    outlineIndigo: "0 0 0 3px rgba(180,198,252,.45)"
  },
  icons: {
    ...theme.icons,
    "tw-bell": {
      path: (
        <path
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
        />
      )
    },
    "tw-hamburger": {
      path: (
        <path
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4 6h16M4 12h16M4 18h16'
        />
      )
    },
    "tw-cross": {
      path: (
        <path
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M6 18L18 6M6 6l12 12'
        />
      )
    },
    "tw-plus": {
      path: (
        <path
          fill='currentColor'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
        />
      ),
      viewBox: "0 0 20 20"
    }
  }
};
