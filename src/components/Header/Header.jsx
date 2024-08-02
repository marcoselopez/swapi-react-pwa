import { Grid, Typography } from "@mui/material";
import GradeIcon from '@mui/icons-material/Grade';

const Header = () => {
  return (
    <Grid container>
      <Grid item xs={12} marginTop={'1rem'} textAlign={'center'}>
        <Typography variant="h2" sx={{ fontFamily: 'Montserrat', fontWeight: 500, color: '#ffde63'}}>
          <GradeIcon /> Star Wars Characters <GradeIcon />
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign={'center'}>
        <Typography variant="p" sx={{ fontFamily: 'Montserrat', color: '#ffde63'}}>Made with the Star Wars API (SWAPI)</Typography>
      </Grid>
    </Grid>
  )
};

export default Header;