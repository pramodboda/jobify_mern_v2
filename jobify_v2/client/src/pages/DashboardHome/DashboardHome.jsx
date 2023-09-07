import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

import JobTypesPieChart from "../../components/charts/JobTypesPieChart/JobTypesPieChart";
import ReportsPieChart from "../../components/charts/ReportsPieChart/ReportsPieChart";

const DashboardHome = () => {
  // const data = [
  //   { name: "Static PDF/PPT", value: 2505, color: "#3f51b5" },
  //   { name: "Interactive PDF", value: 2606, color: "#673ab7" },
  //   { name: "Implementation", value: 847, color: "#e91e63" },
  //   { name: "Localisation of GM", value: 1780, color: "#f44336" },
  //   { name: "HTML Convertion", value: 1127, color: "#ff9800" },
  //   { name: "Video", value: 754, color: "#9e9e9e" },
  // ];
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Grid container sx={{ marginTop: 0, marginLeft: 0 }}>
              <Grid item md={6} xs={12}>
                {" "}
                <Card>
                  <CardContent>
                    <Typography component="div" variant="body2">
                      Total number of jobs
                    </Typography>
                    <Typography variant="h6" component="div">
                      Static PDF/PPT
                    </Typography>
                    <Typography variant="h4" component="div">
                      2505
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={6} xs={12}>
                <Card>
                  <CardContent>
                    <Typography component="div" variant="body2">
                      Total number of jobs
                    </Typography>
                    <Typography variant="h6" component="div">
                      Interactive
                    </Typography>
                    <Typography variant="h4" component="div">
                      2606
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={6} xs={12}>
                <Card>
                  <CardContent>
                    <Typography component="div" variant="body2">
                      Total number of jobs
                    </Typography>
                    <Typography variant="h6" component="div">
                      Localisation of GM
                    </Typography>
                    <Typography variant="h4" component="div">
                      847
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={6} xs={12}>
                <Card>
                  <CardContent>
                    <Typography component="div" variant="body2">
                      Total number of jobs
                    </Typography>
                    <Typography variant="h6" component="div">
                      Implementation
                    </Typography>
                    <Typography variant="h4" component="div">
                      847
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={6} xs={12}>
                <Card>
                  <CardContent>
                    <Typography component="div" variant="body2">
                      Total number of jobs
                    </Typography>
                    <Typography variant="h6" component="div">
                      Implementation
                    </Typography>
                    <Typography variant="h4" component="div">
                      847
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={6} xs={12}>
                <Card>
                  <CardContent>
                    <Typography component="div" variant="body2">
                      Total number of jobs
                    </Typography>
                    <Typography variant="h6" component="div">
                      Implementation
                    </Typography>
                    <Typography variant="h4" component="div">
                      847
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <CardContent>{/* <JobTypesPieChart /> */}</CardContent>
            </Card>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <CardContent>{/* <ReportsPieChart /> */}</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardHome;
