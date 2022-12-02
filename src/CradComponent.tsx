import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CradComponent = ({user, index, data, onDel} : any) => {
  const del = ()=>{
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    onDel();
  }
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'#DEF5E5' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={user.picture.large}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            {user.name.title + " " + user.name.first + " " + user.name.last}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={del}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default CradComponent
