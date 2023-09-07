import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { Typography, Box } from "@mui/material";

import {
  HorizontalDescList,
  HorizontalDescListItem,
} from "./ReportsPieChart.Styled";

const reportsData = [
  { name: "Multibrand", value: 127 },
  { name: "Sensodyne", value: 98 },
  { name: "Parodontax", value: 49 },
  { name: "Polident", value: 34 },
  { name: "Voltaren", value: 28 },
];

const COLORS = [
  "#3f51b5",
  "#673ab7",
  "#e91e63",
  "#f44336",
  "#ff9800",
  "#9e9e9e",
];

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`PV ${value}`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

export default class ReportsPieChart extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si";

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <>
        <Typography component="div">
          Top brands based on number of requests
        </Typography>
        <Typography variant="h5" component="div">
          Report for Jun 2023 - Sep 2023
        </Typography>
        <div
          style={{
            width: "100%",
            height: "400px",
          }}
        >
          <div>
            <Box component="ul" sx={{ display: "flex", flexWrap: "wrap" }}>
              {reportsData.map((item) => {
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
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
              <Pie
                data={reportData}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Pie
                data={reportData}
                cx={420}
                cy={200}
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
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
  }
}
