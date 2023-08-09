// Material-UI imports
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";

// MUI icons imports
import { AddCircleOutline, SubjectOutlined } from "@mui/icons-material";

// Router imports
import { useHistory, useLocation } from "react-router-dom";

// Date-fns import
import { format } from "date-fns";

// TSS-React imports
import { makeStyles } from "tss-react/mui";

const drawerWidth = 240;

const useStyles = makeStyles()((theme) => ({
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    padding: theme.spacing(3),
  },
  drawer: {
    width: drawerWidth,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
    position: "relative",
  },
  active: {
    background: "#f4f4f4",
  },
  title: {
    padding: theme.spacing(2),
  },
  appBar: {
    background: "#ffffff",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  toolbar: theme.mixins.toolbar,
  date: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: theme.spacing(2),
  },
}));

const Layout = ({ children }) => {
  const { classes } = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutline color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div className={`hidden layout ${classes.root}`}>
      {/* app bar */}
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar>
          <Typography color="textPrimary" className={classes.date}>
            Today is the {format(new Date(), "do MMM Y")}
          </Typography>
          <Typography color="textPrimary">Mario</Typography>
          <Avatar src="/mario-av.png" className={classes.avatar} />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h6" className={classes.title}>
            Simple Notes
          </Typography>
        </div>

        {/* list /links */}
        <List>
          {menuItems.map((menu) => (
            <ListItem
              key={menu.text}
              onClick={() => history.push(menu.path)}
              className={
                location.pathname === menu.path ? classes.active : null
              }
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
        {location.pathname === menuItems[1].path ? (
          <Fab
            color="secondary"
            aria-label="MY Notes"
            sx={{
              position: "fixed",
              zIndex: "1300",
              bottom: 20,
              right: 20,
              display: { md: "none" },
            }}
            onClick={() => history.push(menuItems[0].path)}
          >
            <SubjectOutlined />
          </Fab>
        ) : (
          <Fab
            color="secondary"
            aria-label="Create Notes"
            sx={{
              position: "fixed",
              zIndex: "1300",
              bottom: 20,
              right: 20,
              display: { md: "none" },
            }}
            onClick={() => history.push(menuItems[1].path)}
          >
            <EditIcon />
          </Fab>
        )}
      </div>
    </div>
  );
};

export default Layout;
