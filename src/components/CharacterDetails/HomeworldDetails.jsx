import { useEffect } from "react";
import { List, ListItem, Typography } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import useGetResource from "../../hooks/useGetResource";
import Spinner from "../../utils/Spinner";

const HomeworldDetails = ({ homeworld }) => {

  const resource = homeworld?.slice(22, homeworld.length);
  const {fetchResource, loading, fullData} = useGetResource();

  console.log(fullData)

  useEffect(() => {
    fetchResource(resource)
  }, [])

  return (
    loading ? 
      (<Spinner color={'#292c633'} />)
    :
      <>
        <Typography gutterBottom variant="h5" component="div" fontFamily={'Montserrat'} fontWeight={500} className="animate__animated animate__fadeIn">
          Homeworld
        </Typography>
        <List className="animate__animated animate__fadeInRight">
          <ListItem>
            <PublicIcon sx={{ marginRight: '1rem' }} />
            <Typography fontFamily={'Montserrat'}>Name: {fullData?.name}</Typography>
          </ListItem>
          <ListItem>
            <PublicIcon sx={{ marginRight: '1rem' }} />
            <Typography fontFamily={'Montserrat'}>Climate: {fullData?.climate}</Typography>
          </ListItem>
          <ListItem>
            <PublicIcon sx={{ marginRight: '1rem' }} />
            <Typography fontFamily={'Montserrat'}>Terrain: {fullData?.terrain}</Typography>
          </ListItem>
          <ListItem>
            <PublicIcon sx={{ marginRight: '1rem' }} />
            <Typography fontFamily={'Montserrat'}>Population: {fullData?.residents.length}</Typography>
          </ListItem>
        </List>
      </>
  )
};

export default HomeworldDetails;