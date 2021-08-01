import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action:{
      marginTop:"1rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
   
}));

export default function CartProduct({prod:{id,referencia,nombre,descripcion,precio,imageUrl}}) {
  const classes = useStyles();
  const[{basket},dispatch]=useStateValue();

  const removeItem=()=>dispatch({
    type:actionTypes.REMOVE_ITEM,
    id:id,
  })
  

  return (
    <Card className={classes.root}>
      <CardHeader
        /* avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        } */
        action={
          <Typography
              className={classes.action}
              variant='h5'
              color='textSecondary'>
              {accounting.formatMoney(precio,"$")}
          </Typography>
        }
        title={nombre}
        subheader="En stock"
      />
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title="ClubColombiaSix"
      />
      
      <CardActions disableSpacing>
          <IconButton>
            <DeleteIcon font-size="large" onClick={removeItem}/>
            </IconButton>
      </CardActions>
      
    </Card>
  );
}
