import { Card, CardContent, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const DashboardHome = () => {
  const data = [
    { name: "Static PDF/PPT", value: 2505 },
    { name: "Interactive PDF", value: 2606 },
    { name: "Implementation", value: 847 },
    { name: "Localisation of GM", value: 1780 },
    { name: "HTML Convertion", value: 1127 },
    { name: "Video", value: 754 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid xs={3}>
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
              <Grid xs={3}>
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
              <Grid xs={3}>
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
              <Grid xs={3}>
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
              <Grid xs={3}>
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
            </Grid>{" "}
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography component="div">Total number of jobs</Typography>
                <Typography variant="h5" component="div">
                  Job Types
                </Typography>
                <div
                  style={{
                    width: "100%",
                    height: "400px",
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={600} height={600}>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={140}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            xs=4
          </Grid>
          <Grid item xs={8}>
            xs=8
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DashboardHome;
