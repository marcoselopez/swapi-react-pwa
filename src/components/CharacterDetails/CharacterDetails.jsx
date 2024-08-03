import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Avatar, Button, Card, CardContent, CardHeader, Chip, Divider, Grid, Typography } from "@mui/material";
import useGetResource from "../../hooks/useGetResource";
import HomeworldDetails from "./HomeworldDetails";
import Spinner from "../../utils/Spinner";
import FilmDetails from "./FilmDetails";
import BasicDetails from "./BasicDetails";

const CharacterDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const {fetchResource, loading, fullData, error} = useGetResource();

  useEffect(() => {
    let ignore = false;
    fetchResource(`people/${id}`, ignore)
    return () => {
      ignore = true;
    }
  }, [id])

  if(error){
    return (
      <Grid container display={'flex'} justifyContent={'center'} alignItems={'flex-start'}>
        <Grid item xs={10}>
          <Button variant="contained" color="error" size="large" fullWidth onClick={() => navigate('/')}>RETURN</Button>
        </Grid>
        <Grid item xs={10} marginTop={'1rem'}>
          <Alert color="warning" severity="warning" sx={{ height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            An error has occurred while trying to get the resource. Please go back and try again.
          </Alert>
        </Grid>
      </Grid>
    )
  }

  return (
      <Grid container marginTop={'1rem'} marginBottom={'1rem'} justifyContent={'center'}>
        <Grid item xs={10} md={4} marginBottom={'1rem'} display={'flex'} justifyContent={'center'} className="animate__animated animate__fadeInDown">
          <Button variant="contained" color="error" size="large" fullWidth onClick={() => navigate('/')}>
            RETURN
          </Button>
        </Grid>
        <Grid item xs={12} display={'flex'} justifyContent={'center'} className="animate__animated animate__fadeInUp">
          {
            loading ? 
            (<Spinner color={'#ffde63'} />)
            :
            <Card sx={{ margin: {xs: '0 10px'}, background: '#ffde63', color: '#292c33', width: '90%' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{bgcolor: '#292c33'}}>
                    {fullData?.name.slice(0, 1)}
                  </Avatar>
                }
                title={<Typography variant="h4" fontFamily={'Montserrat'} fontWeight={500}>{fullData?.name}</Typography>}
                subheader={<Chip variant="filled" size="small" sx={{ background: '#292c33', color: '#ffde63' }} label={fullData?.gender} />}
              />
              <Divider />
              <CardContent>
                <Grid container gap={2}>
                  <Grid item xs={12} md={3}>
                    <BasicDetails basicDetails={fullData} />
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item xs={12} md={3}>
                    <HomeworldDetails homeworld={fullData?.homeworld} />
                  </Grid>
                  <Divider orientation="vertical" flexItem />
                  <Grid item xs={12} md={3}>
                    <Typography gutterBottom variant="h5" component="div" fontFamily={'Montserrat'} fontWeight={500} className="animate__animated animate__fadeIn">
                      Films
                    </Typography>
                    <Grid container>
                      {
                        fullData?.films.map(film => (
                          <FilmDetails key={film} film={film} />
                        ))
                      }
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          }
        </Grid>
      </Grid>
  )
};

export default CharacterDetails;