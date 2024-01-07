import { Box, Button, TextField, Typography } from "@mui/material";

const Login = () => {
    return (
        <div >
            <Box component="form" mx={60} mt={5} height={300} sx={{display:'flex',flexDirection:'column', border:'2px outset', alignItems:'center'}}>
                <TextField id="email" label="Email" variant="outlined" sx={{mb:1,mt:3, minWidth:300}} />
                <TextField id="password" label="Password" variant="outlined" sx={{my:1, minWidth:300}}/>
                <Typography variant="caption" mt={1} mr={20}>Forgot your Password?</Typography>
                <Button variant="outlined" sx={{my:1}}>Login</Button>
                <Typography variant="subtitle2" mb={1} >New user? <button>Register</button></Typography>
            </Box>
        </div>
    );
}
export default Login;