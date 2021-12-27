import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Router from "next/router";



//Decleared Class Statement
const Contactus = () => {
  
  return (
      <Grid container>
        <Card onClick={() => Router.push("/signin")}>
                <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Finger Printing"
                  height="180"
                  image="https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg"
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
      </Grid>
    );
  
};

//DECLARING CONST FOR THEME STYLES
const styles = theme => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },

  
});

export default withStyles(styles)(Contactus);
