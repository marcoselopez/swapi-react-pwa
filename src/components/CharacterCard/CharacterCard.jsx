import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Person2Icon from '@mui/icons-material/Person2';
import { useNavigate } from "react-router-dom";

const CharacterCard = ({name, description, id}) => {

  const navigate = useNavigate();
  
  return (
    <Card sx={{ margin: {xs: '0 10px'}, background: '#ffde63', color: '#292c33' }}>
      <CardActionArea onClick={() => navigate(`/character/${id}`)}>
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