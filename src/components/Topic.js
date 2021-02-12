import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
   
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    }
  });

export const Topic = (props) => {
    const {topicTitle, topicDesc} = props;
    const classes = useStyles();
   
    return (
        <Card >
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Mini Lesson
          </Typography>
          <Typography variant="h5" component="h2" >
              {topicTitle}
          </Typography>
        
          <Typography variant="body2" component="p">
           {topicDesc}
            <br />
           
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Let's Learn!</Button>
        </CardActions>
      </Card>
    )
}
