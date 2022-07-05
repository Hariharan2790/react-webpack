import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { routerData } from "./RouterData";
import { Link, useNavigate } from "react-router-dom";

function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  let navigate = useNavigate();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        {isMatch ? (
          <List>
            {routerData.map((item) => (
              <ListItemButton key={item.id} onClick={() => navigate(item.path)}>
                <ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
            <ListItemButton component={Link} to="/login">
              <ListItemIcon>
                <ListItemText>Login</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton component={Link} to="/signup">
              <ListItemIcon>
                <ListItemText>SignUp</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        ) : (
          <List>
            {routerData.map((item) => (
              <ListItemButton key={item.id} onClick={() => navigate(item.path)}>
                <ListItemIcon>
                  <ListItemText>{item.title}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        )}
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "0" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
}

export default DrawerComp;
