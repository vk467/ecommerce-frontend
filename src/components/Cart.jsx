import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Paper, Typography} from "@mui/material"
import { Delete } from "@mui/icons-material";
import NumberBtn from "./utils/NumberBtn";
import { useEffect, useState } from "react";

const NavigateToLogin = () => {
    return (
        <Box sx={{pl:"25%",pt:"15%"}}>
            <Typography variant="h5">Login to view the cart items if you have previously added.
            </Typography>
        </Box>
    );
}

const Cart = () => {

    const isLoggedIn = true;

    const [cartList, setCartList] = useState([{id:1, name:"ad", qty:2, price: 100}, {"id":2, "name":"bc", "qty":2, price: 200},{"id":3, "name":"ef","qty":5, price:300}]);

    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);

    const removeFromCart = (event) => {
        const findIndex = cartList.findIndex(a => a.id === Number(event.target.id));
        console.log(findIndex, event.target);
        findIndex !== -1 && cartList.splice(findIndex , 1);
        setCartList(cartList);
    }    
    
    
    useEffect(()=>{
        let tot = cartList.reduce((acc,item)=>acc+item.qty*item.price,0);
        setTotal(tot);
    }, [cartList]);

    return (
        <Box sx={{boxShadow: 2, m:2, mx: "25vw", height: isLoggedIn ? "auto" :'75vh'}} >
            <Paper>
                <Typography variant="h4" sx={{m:3, mb:1}}>
                    Cart 
                </Typography>
                <Divider />
            </Paper>
            {isLoggedIn ?
            <> 
            {
                cartList.map((item) => 
                <Box sx={{m:2, mx: 2}} key={item.id} raised>
                    <Card sx={{ height: 200, width: "100%", display: 'flex'}} >
                        <CardMedia
                            component="img"
                            alt={item.name}
                            height="150"
                            sx={{mt:2, mx:2, width: 150}}
                            image={"https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/62041/261586/1607601332291_IMG_20201128_134909__85629.1687170945.jpg?c=2&imbypass=on"}
                        />
                        <Box>
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    {item.name}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
                                <NumberBtn value={item.qty}/>
                                <Typography variant="subtitle1" sx={{mx:1}}> x </Typography>
                                <Typography variant="subtitle1"> ₹.{item.price} </Typography>
                                <Button variant="contained" sx={{ml:4}} id={item.id} startIcon={<Delete />} onClick={removeFromCart}>
                                    Remove
                                </Button>
                            </Box>
                        </Box>
                    </Card>
                </Box>
                )
            }
            <Divider />
            <Box sx={{position:'sticky', bottom:0, backgroundColor:'#aec2f5', border:'1px blue'}}>
                <Grid container p={2} >
                    <Grid sm={6} item>
                        <Typography> Sub-Total </Typography>
                    </Grid>
                    <Grid sm={6} item>
                        <Typography> = ₹.{total} </Typography>
                    </Grid>
                </Grid>
                <Grid container px={2} pb={2} >
                    <Grid sm={6} item>
                        <Typography> Sub-Total </Typography>
                    </Grid>
                    <Grid sm={6} item>
                        <Typography> = ₹.{total} </Typography>
                    </Grid>
                </Grid>
            </Box>
            
            
            </>

            :
            <NavigateToLogin/>
            }
        </Box>
    );
}
export default Cart;