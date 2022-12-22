import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShareOutlined from "@material-ui/icons/ShareOutlined";
import withStyles from "@material-ui/core/styles/withStyles";

import ActiveLink from "./ActiveLink";
import { signoutUser } from "../lib/auth";

//Declared constant for Navbar
const Navbar = ({ classes, router, pageProps: { auth } }) => {
  const { user = {} } = auth || {};

  return (
    <AppBar
      className={classes.appBar}
      position={router.pathname === "/" ? "fixed" : "static"}
    >
      <Toolbar>
        {/* Main Title / Home Button */}
        <ActiveLink href="/">
         
          <img
              src="/static/images/lmlogo.jpg"
              alt={"OV"} width="40" height="40" />
        </ActiveLink>
        <Typography
          variant="h5"
          component="h1"
          className={classes.toolbarTitle}>
          <ActiveLink href="/">Haileyor Ventures</ActiveLink>
        </Typography>
      
        {user._id ? (
          // Auth Navigation
          <Typography
          align="right">
            <div>
              <Button>
                <ActiveLink href={`/profile/${user._id}`}>Profile</ActiveLink>
              </Button>
              <Button onClick={signoutUser} variant="outlined">
                Sign out
              </Button>
            </div>
          </Typography>
        ) : (
          // UnAuth Navigation
          <Typography
          align="right">
            <div>
              <Button>
                <ActiveLink href="/signin">Sign in</ActiveLink>
              </Button>
              <Button>
                <ActiveLink href="/signup">Sign up</ActiveLink>
              </Button>
            </div>
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

const styles = theme => ({
  appBar: {
    // z-index 1 higher than the fixed drawer in home page to clip it under the navigation
    zIndex: theme.zIndex.drawer + 1
  },
  toolbarTitle: {
    flex: 1
  },
  icon: {
    marginRight: theme.spacing.unit 
  }
});

export default withStyles(styles)(Navbar);
