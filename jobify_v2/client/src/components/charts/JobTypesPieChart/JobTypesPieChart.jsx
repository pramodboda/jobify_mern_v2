import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { Typography, Box } from "@mui/material";

import {
  HorizontalDescList,
  HorizontalDescListItem,
} from "./JobTypesPieChart.Styled";

const JobTypesPieChart = () => {
  const data = [
    { name: "Static PDF/PPT", value: 2505, color: "#3f51b5" },
    { name: "Interactive PDF", value: 2606, color: "#673ab7" },
    { name: "Implementation", value: 847, color: "#e91e63" },
    { name: "Localisation of GM", value: 1780, color: "#f44336" },
    { name: "HTML Convertion", value: 1127, color: "#ff9800" },
    { name: "Video", value: 754, color: "#9e9e9e" },
  ];

  const COLORS = [
    "#3f51b5",
    "#673ab7",
    "#e91e63",
    "#f44336",
    "#ff9800",
    "#9e9e9e",
  ];

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
        <div>
          <Box component="ul" sx={{ display: "flex", flexWrap: "wrap" }}>
            {data.map((item) => {
              return (
                <HorizontalDescList key={[item.name]}>
                  <HorizontalDescListItem>
                    <div
                      style={{
                        width: "1.2rem",
                        height: ".6rem",
                        background: item.color,
                        marginRight: ".2rem",
                      }}
                    ></div>
                    <Typography
                      variant="caption"
                      display="block"
                      gutterBottom
                      sx={{ marginBottom: 0 }}
                    >
                      {[item.name]}
                    </Typography>
                  </HorizontalDescListItem>
                </HorizontalDescList>
              );
            })}
          </Box>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="40%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
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
    </>
  );
};

export default JobTypesPieChart;
