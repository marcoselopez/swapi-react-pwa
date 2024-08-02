import { Grid, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import useGetCharacters from "../../hooks/useGetCharacters";

const CharacterList = () => {

  const {getCharacters, loading, characterList} = useGetCharacters();

  getCharacters();

  return (
    <Grid container textAlign={'center'}>
      <Grid item xs={12}>
        {
          loading 
            ? 
            <StarIcon sx={{ fontSize: '50px', color: '#ffde63' }} className='spin' />
            : 
          characterList.map(char => (<div key={char}>Character</div>))
        }
      </Grid>
    </Grid>
  )
};

export default CharacterList;