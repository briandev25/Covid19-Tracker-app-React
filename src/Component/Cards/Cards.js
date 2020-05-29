import React from 'react'
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ( props ) => {
   console.log(props)
    if(!props.data){ return 'Loading...'}
    return(
        <div>
            <Grid container spacing ={3} justify ='center' >
                <Grid item component={Card}> 
                   <CardContent>
                       <Typography color ="textSecondary" gutterBottom > Infected </Typography>
                       <Typography ><CountUp start={0} end={props.data.confirmed.value} duration={2.5} separator="," /> 
                       </Typography>
                       <Typography  color ="textSecondary"  >{new Date(props.data.lastUpdate).toDateString()} </Typography>
                       <Typography variant='body2' >Number of active cases</Typography>
                   </CardContent>
                </Grid>
                <Grid item component={Card}> 
                   <CardContent>
                       <Typography color ="textSecondary" gutterBottom > Recovered </Typography>
                       <Typography ><CountUp start={0} end={props.data.recovered.value} duration={2.5} separator="," /> 
                       </Typography>
                       <Typography  color ="textSecondary"  >{new Date(props.data.lastUpdate).toDateString()} </Typography>
                       <Typography variant='body2' >Number of active cases</Typography>
                   </CardContent>
                </Grid>
                <Grid item component={Card}> 
                   <CardContent>
                       <Typography color ="textSecondary" gutterBottom > Deaths </Typography>
                       <Typography ><CountUp start={0} end={props.data.deaths.value} duration={2.5} separator="," /> 
                       </Typography>
                       <Typography  color ="textSecondary"  >{new Date(props.data.lastUpdate).toDateString()} </Typography>
                       <Typography variant='body2' >Number of active cases</Typography>
                   </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;