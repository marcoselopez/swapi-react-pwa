import { useEffect } from "react";
import { Grid, List, ListItem, Typography } from "@mui/material";
import VideocamIcon from '@mui/icons-material/Videocam';
import useGetResource from "../../hooks/useGetResource";
import Spinner from "../../utils/Spinner";

const FilmDetails = ({ film }) => {

  const resource = film?.slice(22, film.length);
  const {fetchResource, loading, fullData} = useGetResource();

  useEffect(() => {
    fetchResource(resource)
  }, [])

  return (
    <Grid item xs={12}>
    {
      loading ? 
      (<Spinner color={'#292c633'} />)
    :
      (<>
        <List disablePadding>
          <ListItem>
            <VideocamIcon sx={{ marginRight: '1rem' }} />
            <Typography fontFamily={'Montserrat'}>{fullData?.title}</Typography>
          </ListItem>
        </List>
      </>)
    }
    </Grid>
  )
};

export default FilmDetails;