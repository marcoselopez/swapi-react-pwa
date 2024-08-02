import { Grid } from "@mui/material";
import useGetResource from "../../hooks/useGetResource";
import CharacterCard from "../CharacterCard/CharacterCard";
import { useEffect, useState } from "react";
import PageChangers from './PageChangers';
import Spinner from "../../utils/Spinner";

const CharacterList = () => {
  
  const totalPages = 9;
  const [page, setPage] = useState(1);
  const {fetchResource, fullData, loading} = useGetResource();

  useEffect(() => {
    fetchResource(`people?page=${page}`);
  }, [page])

  return (
    <Grid container textAlign={'center'} marginTop={'2rem'} marginBottom={'2rem'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
      <Grid item xs={12} marginBottom={'1rem'}>
        <PageChangers page={page} setPage={setPage} totalPages={totalPages} loading={loading} />
      </Grid>
      <Grid item xs={12} minHeight={'500px'}>
        {
          loading 
            ? 
            (<Spinner color='#ffde63' />)
            : 
          (<Grid container gap={{ xs: 1, lg: 2, xl: 1}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            { fullData?.map(character => (
              <Grid item xs={12} md={5} lg={3} xl={2} key={character.name}>
                <CharacterCard key={character.name} name={character.name} description={character.birth_year} id={character.url.slice(29, 31)} />
              </Grid>
            ))}
          </Grid>)
        }
      </Grid>
    </Grid>
  )
};

export default CharacterList;