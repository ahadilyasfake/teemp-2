import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react"
export default function Danger({ errorTxt }) {
  const [timeOut, setTimeOut] = useState(true)
  setTimeout(() => {
    setTimeOut(false)
  }, 3000);

  return (
    <>
      {(true )? <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert variant="filled" severity="error">
          {errorTxt}
        </Alert>
      </Stack> : null}
    </>
  );
}
