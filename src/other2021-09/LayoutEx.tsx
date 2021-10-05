import { Paper, Box, Typography } from "@material-ui/core";

export default function ResponsiveBoxEx() {
  return (
    <Box display="flex" width="100vw" height="100vh" bgcolor="background.default">
      <Box height="100%" width={250} bgcolor="#E0E0E6" boxShadow={2}>
        <Box padding={4}>
          <Typography variant="body1">Nav1</Typography>
          <Typography variant="body1">Nav2</Typography>
          <Typography variant="body1">Nav3</Typography>
        </Box>
      </Box>
      <Box height="100%" width="100%" display="flex" justifyContent="center">
        <Box width="100%" height="100%" display="flex" flexDirection="column" marginLeft={4} marginRight={4}>
          <Box paddingTop={2}>
            <Typography variant="h1">Page Title</Typography>
          </Box>
          <Box height="100%" paddingTop={2} paddingBottom={2}>
            <Paper elevation={2}>
              <Box padding={4}>
                <Typography variant="body1">Content</Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
  /*return (
    <div style={{ backgroundColor: "#ddd", height: "100%", width: "100%", padding: "0px", margin: "0px" }}>Content</div>
  );*/
  // return <Box bgcolor="#ddd">Content</Box>;
}
