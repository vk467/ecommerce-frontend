import { Box, Grid, Typography, Divider } from "@mui/material";

const Footer = () => {
    return (
        <Box component="div" p={3} mt={5} sx={{backgroundColor:'#1976d2'}}>
            <Grid container mb={1}>
                <Grid item sm={6}>
                    <Typography variant="subtitle1" sx={{ color: 'white'}}>
                        About us
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'white'}}>
                        Contact us
                    </Typography>
                </Grid>
                <Grid item sm={6}>
                    <Typography variant="subtitle1" sx={{ color: 'white'}}>
                        Location
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'white'}}>
                        Contact
                    </Typography>
                </Grid>
            </Grid>
            <Divider />
            <Box sx={{display:'flex'}} mt={1}>
                <Typography variant="caption" sx={{ color: 'white'}}>
                    © 2024 - v2creations.com
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;