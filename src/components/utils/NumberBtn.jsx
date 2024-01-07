import { Add, Remove } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const NumberBtn = ({value}) => {

    const [num, setNum] = useState(value);
    
    const increment = () => {
        if(num<99){
            setNum(num+1);
        }
    }

    const decrement = () => {
        if(num>1){
            setNum(num-1);
        }
    }

    return(
        <Stack direction="row">
            <Button variant="outlined" onClick={decrement}sx={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px', backgroundColor:'#e8e8e8'}}><Remove /></Button>
            <TextField id="outlined-basic" variant="outlined" size="small" sx={{width:50}} value={num} onChange={(e)=>setNum(Number(e.target.value))}/>
            <Button variant="outlined" onClick={increment} sx={{maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px', backgroundColor:'#e8e8e8'}}><Add /></Button>
        </Stack>
    );
}

export default NumberBtn;