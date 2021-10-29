import { Box } from "@mui/system";
import React, { FC } from "react";

const Card: FC = ({ children }) => {
  return (
    <Box
      sx={{
        border: "2px solid #ccc",
        borderRadius: "10px",
        padding: 2,
        marginTop: 4,
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
