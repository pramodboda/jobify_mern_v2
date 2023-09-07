
import React from "react";

import { GridView as GridViewIcon } from "@mui/icons-material";
import { WorkOutline as WorkOutlineIcon } from "@mui/icons-material";
import { Work as WorkIcon } from "@mui/icons-material";
import { DataSaverOff as DataSaverOffIcon } from "@mui/icons-material";
import { Person2 as Person2Icon } from "@mui/icons-material";


export const LinksData = [
  { name: "Dashboard", path: ".", icon: <GridViewIcon /> },
  { name: "Add Job", path: "add-job", icon: <WorkOutlineIcon /> },
  { name: "All Jobs", path: "all-jobs", icon: <WorkIcon /> },
  { name: "Stats", path: ".", icon: <DataSaverOffIcon /> },
  { name: "Profile", path: "profile", icon: <Person2Icon /> },
];
