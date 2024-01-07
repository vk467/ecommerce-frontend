import { Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import Carousel from "./utils/Carousel";

const Home = () => {

    const HomeCards = [{name:"Shirts", image:"https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/62041/261586/1607601332291_IMG_20201128_134909__85629.1687170945.jpg?c=2&imbypass=on"},
                        {name:"Pants", image:'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/62041/261586/1607601332291_IMG_20201128_134909__85629.1687170945.jpg?c=2&imbypass=on'}];
    return (
        <div>
            <Carousel />
            <Grid px={10} container rowSpacing={5} columnSpacing={10}>
                < Grid item xs={12} sx={{display:'flex',justifyContent:'space-around'}}>
                    <Typography variant='h4'>Categories</Typography>
                </Grid>
                {HomeCards.map((obj) => (
                    <Grid key={obj.id} item>
                    <Card sx={{ height: 260, width: 300, }} raised>
                        <CardMedia
                            component="img"
                            alt={obj.name}
                            height="200"
                            image={obj.image}
                        />
                        <CardContent sx={{pb:0}}>
                            <Typography gutterBottom variant="h5" component="div">
                                {obj.name}
                            </Typography>                        
                        </CardContent>
                    </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
export default Home;