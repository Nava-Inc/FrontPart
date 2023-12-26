import React from "react";
import { Stack, Avatar } from "@mui/material";
import { Person2 } from "@mui/icons-material";

export const UserAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar src="@mui/icons-material/Person2" alt="User" />
      </Stack>
    </Stack>
  );
};
