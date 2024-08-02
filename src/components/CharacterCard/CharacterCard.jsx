import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Person2Icon from '@mui/icons-material/Person2';

const CharacterCard = ({name, description}) => {
  return (
    <Card sx={{ margin: {xs: '0 10px'}, background: '#ffde63', color: '#292c33' }}>
      <CardActionArea>
        <Person2Icon sx={{ fontSize: '100px'}} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
};

export default CharacterCard;