import React from "react";
import { theme } from "@chakra-ui/core";

export default {
  ...theme,
  icons: {
    ...theme.icons,
    school: {
      path: (
        <path
          fill='currentColor'
          d='M24 21h-3l1-3h1l1 3zm-12.976-4.543L20 11.882V18c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zM23 17h-1V9.74l-10.923 5.568L0 8.308 12 3l11 6.231V17z'
        />
      ),
      viewBox: "0 0 24 24"
    }
  }
};
