import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import  "./styles.css";

interface DataProps{
    title: string,
    marca: string,
    cc: string,
    price: number,
    img?: string,
    cart?: number,
}


export default function ItemCard(props :DataProps) {

  return (
    //sx={{ width: "100%", margin: "1rem"}}
    <Card id="cardMobile" >

      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ props.img }
          sx={{ width: "auto", margin: "0 auto", maxWidth: "100%" }}
          alt="moto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { props.title }
            
          </Typography>
          <Typography variant="body2" color="text.primary">
          { props.marca } 
          <br/>
          Cilindradas: { props.cc }cc
          <br />
        
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            { new Intl.NumberFormat("pr-br", {
              style:"currency",
              currency: "BRL"
            }).format(props.price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="success">
          Comprar
        </Button>
      </CardActions>
    </Card>
  );
}