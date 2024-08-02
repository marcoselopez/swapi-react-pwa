import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid container sx={{ backgroundColor: '#ffde63', color: '#292c33' }} textAlign={'center'} className="animate__animated animate__fadeIn">
      <Grid item xs={12}>
        <Typography variant="h6">- Created by Marcos López -</Typography>
      </Grid>
    </Grid>
  )
};

export default Footer;