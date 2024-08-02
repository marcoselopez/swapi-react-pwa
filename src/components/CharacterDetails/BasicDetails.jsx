import { List, ListItem, Typography } from '@mui/material'
import FlareIcon from '@mui/icons-material/Flare';

const BasicDetails = ({ basicDetails }) => {
  return (
    <>
      <Typography gutterBottom variant="h5" component="div" fontFamily={'Montserrat'} fontWeight={500}>
        Basic Info
      </Typography>
      <List>
        <ListItem>
          <FlareIcon sx={{ marginRight: '1rem' }} />
          <Typography fontFamily={'Montserrat'}>Born: {basicDetails?.birth_year}</Typography>
        </ListItem>
        <ListItem>
          <FlareIcon sx={{ marginRight: '1rem' }} />
          <Typography fontFamily={'Montserrat'}>Hair: {basicDetails?.hair_color}</Typography>
        </ListItem>
        <ListItem>
          <FlareIcon sx={{ marginRight: '1rem' }} />
          <Typography fontFamily={'Montserrat'}>Skin: {basicDetails?.skin_color}</Typography>
        </ListItem>
        <ListItem>
          <FlareIcon sx={{ marginRight: '1rem' }} />
          <Typography fontFamily={'Montserrat'}>Height: {basicDetails?.height}cm</Typography>
        </ListItem>
      </List>
    </>
  )
}

export default BasicDetails