import { Box } from "@material-ui/core";

export default function TwoColumnColumnScrollableEx() {
  return (
    <Box overflow="scroll" bgcolor="blue" width="100px" height="100px">
      <Box bgcolor="red" width="200px" height="80px" m={1}>
        abc
      </Box>
      <Box bgcolor="red" width="200px" height="80px" m={1}>
        abc
      </Box>
    </Box>
  );
}
