import { Box } from "@mui/system";
import React, { FC } from "react";
import { Link } from "react-router-dom";

const UserItems: FC = () => {
  return (
    <Box>
      <Link to="/profile" style={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            position: "relative",
            marginRight: 5,
            borderRadius: "50%",
            overflow: "hidden",
            width: 50,
            height: 50,
          }}
        >
          <img
            src="https://ktonanovenkogo.ru/image/finik.jpg"
            alt="avatar"
            width="50"
            height="50"
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "green",
            width: 4,
            height: 4,
            position: "absolute",
            bottom: 2,
            left: 2,
          }}
        ></Box>
        Вася Пупкин{" "}
      </Link>
    </Box>
  );
};

export default UserItems;
