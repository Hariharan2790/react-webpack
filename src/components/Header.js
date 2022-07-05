import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import  { routerData } from "./RouterData"
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  let navigate = useNavigate();

  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  

  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}
          <DrawerComp/>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" ,marginRight:"auto" }}>
                Shoppee
              </Typography>
              {/* <DrawerComp /> */}
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {
                  routerData.map((item)=>(
                    <Tab key={item.id} label={item.title} onClick={()=>navigate(item.path)}/>
                  ))
                }
              
              </Tabs>
              <Button component={Link} to="/login" sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button component={Link} to="/signup" sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
             
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
