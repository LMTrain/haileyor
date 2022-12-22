import CircularProgress from "@material-ui/core/CircularProgress";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid'
import Router from "next/router";

//import ActiveLink from "../components/ActiveLink";
import PostFeed from "../components/index/PostFeed";
import UserFeed from "../components/index/UserFeed";
import withStyles from "@material-ui/core/styles/withStyles";
import { authInitialProps } from "../lib/auth";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ApptFeed from "../components/index/ApptFeed";




const Index = ({ classes, auth }) => (
  <main className={classes.root}>
    {auth.user && auth.user._id === "618459d3f4ec17322ce16323" ? (
      // Administrator Page
      <Grid container>
        <Grid item xs={12} sm={12} md={7}>
          <PostFeed auth={auth} />
        </Grid>
        <Grid item className={classes.drawerContainer}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="right"
            classes={{
              paper: classes.drawerPaper
            }}>
            <UserFeed auth={auth} />
            
          </Drawer>
        </Grid>
      </Grid>
    ) 
      //Memebers Page
      : auth.user && auth.user._id ?
    
        (<Grid container>
            <Grid item xs={12} sm={12} md={5}>
              <PostFeed auth={auth} />
            </Grid>
            
            <Grid className={classes.apptCard}
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Income Tax Filing"
                      height="180"
                      image="https://lmtrain.github.io/lm-images/assets/images/ls_dayrbow.jpg"
                      title="Income Tax Filing"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2" color="inherit">
                      <a style={{color: '#FFF'}}>Income Tax Filing</a>
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        <ApptFeed auth={auth} />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="secondary">
                      <a style={{color: '#FFF'}} href="https://calendly.com/africanamerican_african-forum/client-appointments" 
                        className="button cta rounded primary-btn raised" target="_blank" rel="noopener noreferrer">
                          Schedule your appointment
                      </a>
                    </Button>
                  </CardActions>
              </Card>
              <Card onClick={() => Router.push("/signin")}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Background Check"
                    height="180"
                    image="/static/images/lmlogo.jpg"
                    title="Background Check"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <a style={{color: '#FFF'}}>Background Check </a>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Background Check is donma jnjka jknajk aba ba babmbmz bma bmabma bamnbczb c m mabbv z vn xz nbxvbn xc nbnzn
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="secondary">
                      <a style={{color: '#FFF'}} href="https://calendly.com/africanamerican_african-forum/client-appointments" 
                        className="button cta rounded primary-btn raised" target="_blank" rel="noopener noreferrer">
                          Schedule your appointment
                      </a>
                    </Button>
                  </CardActions>
              </Card>
              <Card onClick={() => Router.push("/signin")}>
                <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Finger Printing"
                  height="180"
                  image="/static/images/lmlogo.jpg"
                  title="Finger Printing"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    <a style={{color: '#FFF'}}>Finger Printing</a>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Finger Printing is donma jnjka jknajk aba ba babmbmz bma bmabma bamnbczb c m mabbv z vn xz nbxvbn xc nbnzn
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="secondary">
                  <a style={{color: '#FFF'}} href="https://calendly.com/africanamerican_african-forum/client-appointments" 
                    className="button cta rounded primary-btn raised" target="_blank" rel="noopener noreferrer">
                      Schedule your appointment
                  </a>
                </Button>
              </CardActions>
              </Card>
              {/* <Grid>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=3mmlnqa8s52qgb1f6qcgbva0qk%40group.calendar.google.com&ctz=America%2FChicago" style={{ width: 1000, height: 600, frameBorder: 0, scrolling: "no"}} title=" Listening "></iframe>
              </Grid> */}
            </Grid>
            
          </Grid>
        ) :
      // Splash Page (UnAuth Page)
      <Grid>
        <Grid>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            Haileyor Ventures
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Card className={classes.card} onClick={() => Router.push("/signin")}>
            <CardActionArea>
              
                <CardMedia
                  component="img"
                  alt="Income Tax Filing"
                  height="180"
                  image="/static/images/lmlogo.jpg"
                  title="Income Tax Filing"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" color="inherit">
                  <a style={{color: '#FFF'}}>Income Tax Filing</a>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Income Tax Filing is donma jnjka jknajk aba ba babmbmz bma bmabma bamnbczb c m mabbv z vn xz nbxvbn xc nbnzn
                  </Typography>
                </CardContent>
              
            </CardActionArea>
          </Card>

          <Card className={classes.card} onClick={() => Router.push("/signin")}>
            <CardActionArea>
            
              <CardMedia
                component="img"
                alt="Background Check"
                height="180"
                image="/static/images/lmlogo.jpg"
                title="Background Check"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                <a style={{color: '#FFF'}}>Background Check </a>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Background Check is donma jnjka jknajk aba ba babmbmz bma bmabma bamnbczb c m mabbv z vn xz nbxvbn xc nbnzn
                </Typography>
              </CardContent>
            
            </CardActionArea>
          </Card>
          
          <Card className={classes.card}>
            <CardActionArea
              href="https://calendly.com/africanamerican_african-forum/client-appointments"
              target="_blank" rel="noopener noreferrer"
            >
              <CardMedia
                component="img"
                alt="Makeups"
                height="180"
                image="/static/images/lmlogo.jpg"
                title="Makeups"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Makeups
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Makeups - Schedule your appointment
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.card} onClick={() => Router.push("/signin")}>
            <CardActionArea>
           
              <CardMedia
                component="img"
                alt="Finger Printing"
                height="180"
                image="/static/images/lmlogo.jpg"
                title="Finger Printing"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                <a style={{color: '#FFF'}}>Finger Printing</a>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Finger Printing is donma jnjka jknajk aba ba babmbmz bma bmabma bamnbczb c m mabbv z vn xz nbxvbn xc nbnzn
                </Typography>
              </CardContent>
           
            </CardActionArea>
          </Card>

          <Card className={classes.card}>
          <CardActionArea
              href="https://calendly.com/africanamerican_african-forum/client-appointments"
              target="_blank" rel="noopener noreferrer"
            >
              <CardMedia
                component="img"
                alt="Notorization"
                height="180"
                image="/static/images/lmlogo.jpg"
                title="Notorization"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                <a style={{color: '#FFF'}}>Notorization</a>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Notorization - Schedule your appointment
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.card} onClick={() => Router.push("/signin")}>
            <CardActionArea>
           
              <CardMedia
                component="img"
                alt="Income Tax Filling"
                height="180"
                image="/static/images/lmlogo.jpg"
                title="Income Tax Filling"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                <a style={{color: '#FFF'}}>Income Tax Filling</a>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Income Tax Filling is donma jnjka jknajk aba ba babmbmz bma bmabma bamnbczb c m mabbv z vn xz nbxvbn xc nbnzn
                </Typography>
              </CardContent>
           
          </CardActionArea>
          </Card>

        </Grid>
      </Grid>
    }
    <footer style={{textAlign: 'center'}}>
      <span>&copy; LM Systems LLC {new Date().getFullYear()}</span>
    </footer>
  </main>
  
);


const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 10,
    paddingLeft: theme.spacing.unit * 5,
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing.unit * 5
    }
  },
  progressContainer: {
    height: "80vh"
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.secondary.light
  },
  card: {
    marginBottom: theme.spacing.unit * 3,
    maxWidth: 345,
    
  },
  drawerContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  drawer: {
    width: 350
  },
  drawerPaper: {
    marginTop: 70,
    width: 350
  },
  apptCard: {
    marginTop: -5,
    maxWidth: 445,
    marginLeft: 45,
    marginBottom: 5,
   
    
    
  },
  fabButton: {
    margin: theme.spacing.unit * -3
  },
  heroContent: {
    maxWidth: 500,
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 6,
    margin: "0 auto"
  }
});

Index.getInitialProps = authInitialProps();

export default withStyles(styles)(Index);
