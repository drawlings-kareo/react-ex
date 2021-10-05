import { Paper, Box, Typography, ThemeProvider, Grid } from "@material-ui/core";
import { theme } from "./ThemeProviderEx";

export default function ResponsiveBoxEx() {
  /*return (
    <Box width="100%" height="100vh" display="flex" justifyContent="center" bgcolor="background.default" p="20px">
      <Box width={1280}>
        <Typography variant="h2">Page Title</Typography>
        <Paper elevation={2}>
          <Box width="100%" height={500} p="20px" m="5px">
            <Typography variant="body1">Content</Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );*/

  return (
    <ThemeProvider theme={theme}>
      <div style={{ overflowX: "hidden" }}>
        <Box width="100%" height="99vh" p={10} display="flex" justifyContent="center" bgcolor="background.default">
          <Grid container spacing={5}>
            <Grid item md={6} xs={12}>
              <Paper>
                <Box p={3}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate dolor ex. Mauris at tincidunt
                    leo. Vestibulum quis mi nibh. Pellentesque molestie vestibulum lacus, sodales malesuada ex auctor
                    nec. Pellentesque vitae rutrum quam.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper>
                <Box p={3}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate dolor ex. Mauris at tincidunt
                    leo. Vestibulum quis mi nibh. Pellentesque molestie vestibulum lacus, sodales malesuada ex auctor
                    nec. Pellentesque vitae rutrum quam.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper>
                <Box p={3}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate dolor ex. Mauris at tincidunt
                    leo. Vestibulum quis mi nibh. Pellentesque molestie vestibulum lacus, sodales malesuada ex auctor
                    nec. Pellentesque vitae rutrum quam.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}
