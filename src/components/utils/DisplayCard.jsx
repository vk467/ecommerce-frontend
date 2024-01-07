import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const DisplayCard = (props) => {
    return (
      <Card sx={{ width: "500px", height: "335px" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={"https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/62041/261586/1607601332291_IMG_20201128_134909__85629.1687170945.jpg?c=2&imbypass=on"}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

export default DisplayCard;