import { Button, Card, CardActions, CardContent, CardMedia, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import SearchBar from "./utils/SearchBar";
import { useState } from "react";

const Products = () => {

    const [sortBy, setSortBy] = useState("relevant");

    let products = [{"name":"leggings", "id":1,"price":"123"},{"name":"tops", "id":2,"price":"12"}];
    return (
        <div style={{margin: 20}}>
            <Stack direction="row" justifyContent="space-between" sx={{mb:2}}>
                <SearchBar placeholder="Search for Products... "/>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="select-small-label">Sort-by</InputLabel>
                    <Select
                        labelId="select-small-label"
                        id="select-small"
                        value={sortBy}
                        label="Sort-by"
                        onChange={(e)=>setSortBy(e.target.value)}
                    >
                        <MenuItem value="relevant">Relevant</MenuItem>
                        <MenuItem value="pinc">Price Inc</MenuItem>
                        <MenuItem value="pdec">Price Dec</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <Grid container spacing={5}>
            {products.map((obj) => (
                <Grid key={obj.id} item>
                <Card sx={{ height: 260, width: 300, }} raised>
                    <CardMedia
                        component="img"
                        alt={obj.name}
                        height="140"
                        image={"https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/62041/261586/1607601332291_IMG_20201128_134909__85629.1687170945.jpg?c=2&imbypass=on"}
                    />
                    <CardContent sx={{pb:0, pt:0}}>
                        <Typography gutterBottom variant="h5" component="div">
                            {obj.name}
                        </Typography>
                        <Stack direction="row" justifyContent="space-evenly" gap={20}>
                            <Typography variant="body2">
                                ₹.{obj.price} /-
                            </Typography>
                            <Stack direction="row" alignItems="center" gap={1}>
                                <StarIcon fontSize="30" style={{color:"#f0c20c"}}/>
                                <Typography variant="body2" color="#f0c20c">
                                    5.0
                                </Typography>
                            </Stack>
                        </Stack>
                        
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="favorite">
                            <FavoriteIcon />
                        </IconButton>
                        <Button sx={{border:2}} size="small">
                            Add to Cart
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
            ))}
            </Grid>
        </div>
    );
}

export default Products;