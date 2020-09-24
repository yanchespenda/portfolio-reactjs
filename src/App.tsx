import React, { Fragment } from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardMedia, Divider, CardContent, makeStyles, CardActions, Button } from '@material-ui/core'
import './App.css';

const useStyles = makeStyles({
  media: {
    height: 250,
  },
});

function App() {
  const classes = useStyles();

  return (
    <Fragment>
      <Container maxWidth="md">
        <div className="title-container">
          <h1 className="title">Hello, I'm Alfian Rikzandi</h1>
          <p className="title-caption">
            College student who sucks at coding.
          </p>
        </div>

        {/* Libraries */}
        <Grid container>
          <div className="subhead-title-container">
            <h2 className="text">Libraries</h2>
          </div>
          <Container>
            <Grid container spacing={3}>

              {/* MongoDB Library */}
              <Grid item sm={6} xs={12}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://res.cloudinary.com/dslncjjz1/image/upload/v1600925074/cdn/portfolio/ci-mongodb-query-builder.jpg"
                      title="Library 1"
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      MongoDB Query Builder for Codeigniter
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button variant="contained" color="primary" rel="noopener noreferrer" target="_blank" href="//mongodb.arproject.web.id/">
                      Documentation
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

            </Grid>
          </Container>
        </Grid>
        
        {/* IoT */}
        <Grid container>
          <div className="subhead-title-container">
            <h2 className="text">IoT</h2>
          </div>
          <Container>
            <Grid container spacing={3}>

              {/* Weathering Monitor */}
              <Grid item sm={6} xs={12}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://res.cloudinary.com/dslncjjz1/image/upload/v1600925075/cdn/portfolio/iot-01.jpg"
                      title="IoT 1"
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Weathering Monitor / Monitoring Cuaca
                    </Typography>
                    <Typography variant="body2" component="p">
                      Arduino: NodeMCU, DHT11, Rain Sensor.<br />
                      FrontEnd: Webpack, AngularJs, AngularJs Material, ChartJS<br />
                      BackEnd: Laravel 5.8
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button variant="contained" color="primary" rel="noopener noreferrer" target="_blank" href="//github.com/yanchespenda/ta-proposal-penelitian-frontend">
                      Front-End
                    </Button>
                    <Button variant="contained" color="primary" rel="noopener noreferrer" target="_blank" href="//github.com/yanchespenda/ta-proposal-penelitian-backend">
                      Back-End
                    </Button>
                    <Button variant="contained" color="primary" rel="noopener noreferrer" target="_blank" href="//github.com/yanchespenda/ta-proposal-penelitian-arduino">
                      Arduino
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

            </Grid>
          </Container>
        </Grid>

        {/* Web Apps */}
        <Grid container>
          <div className="subhead-title-container">
            <h2 className="text">Web Apps</h2>
          </div>
          <Container>
            <Grid container spacing={3}>

              {/* URL Shorter | PHP CodeIgniter + MySQL/MongoDB */}
              <Grid item sm={6} xs={12}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://res.cloudinary.com/dslncjjz1/image/upload/v1600925073/cdn/portfolio/app-web-01.jpg"
                      title="Web Apps 1"
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    URL Shorter | PHP CodeIgniter + MySQL/MongoDB
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Login Template (Google Style) */}
              <Grid item sm={6} xs={12}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://res.cloudinary.com/dslncjjz1/image/upload/v1600925886/cdn/portfolio/Screenshot_455.png"
                      title="Web Apps 2"
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Login Template (Google Style)
                    </Typography>
                    <Typography variant="body2" component="p">
                      FrontEnd: Angular 7, Angular Material 7
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button variant="contained" color="primary" rel="noopener noreferrer" target="_blank" href="//github.com/yanchespenda/project-account">
                    Github
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              {/* Company Profile */}
              <Grid item sm={6} xs={12}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://res.cloudinary.com/dslncjjz1/image/upload/v1600926001/cdn/portfolio/Screenshot_456.jpg"
                      title="Web Apps 3"
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Company Profile
                    </Typography>
                    <Typography variant="body2" component="p">
                      FrontEnd: AngularJs, AngularJs Material<br />
                      BackEnd: Codeigniter 3 with MySQL
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button variant="contained" color="primary" rel="noopener noreferrer" target="_blank" href="https://goldenisoconsulting.com/">
                    Visit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              {/* Streaming Website */}
              <Grid item sm={6} xs={12}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://res.cloudinary.com/dslncjjz1/image/upload/v1600926253/cdn/portfolio/Screenshot_457.jpg"
                      title="Web Apps 4"
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Streaming Site (Community)
                    </Typography>
                    <Typography variant="body2" component="p">
                      FrontEnd: ReactJs, Material UI (Current)<br />
                      FroneEnd: AngularJs, AngularJs Material (Old)<br />
                      BackEnd: Laravel 8 with MySQL
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardActions>
                    <Button variant="contained" color="primary" rel="noopener noreferrer" target="_blank" href="https://mypony.asia/">
                      Visit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

            </Grid>
          </Container>
        </Grid>
      </Container>
      <footer>
        <Container maxWidth="md">
          <div className="f-container">
            <div className="f-container-text">
              Created by <a rel="noopener noreferrer" target="_blank" href="https://fb.me/interstellarII">Alfian Rikzandi</a> | My <a rel="noopener noreferrer" target="_blank" href="https://github.com/yanchespenda">Github</a>.
            </div>
          </div>
        </Container>
      </footer>
    </Fragment>
  );
}

export default App;
