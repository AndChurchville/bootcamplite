import React from 'react';
import {  Grid, makeStyles } from "@material-ui/core";
import { Topic } from './Topic';

export const Lessons  = () => (
      <Grid container spacing={4}> 
      
         <Grid item xs={12} sm={4}>
             <Topic topicTitle = 'Variable Assignment'
             topicDesc = 'Learn how to assign variables'/>
        </Grid> 
        <Grid item xs={12} sm={4}>
             <Topic topicTitle = 'Arrays'
             topicDesc = 'Learn how arrays work in JavaScript'/>
        </Grid> 
        
        
     
      </Grid>
    )

