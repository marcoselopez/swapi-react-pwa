import { Button, Grid, Typography } from "@mui/material";

const PageChangers = ({ page, setPage, totalPages }) => {

  const allpages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const nextPage = () => {
    if(page !== totalPages){
      setPage((prev) => prev + 1)
    }
  };

  const previousPage = () => {
    if(page !== 1){
      setPage((prev) => prev -1)
    }
  };

  const clickPage = (pageClicked) => {
    setPage(pageClicked)
  };

  return (
    <Grid container display={'flex'} justifyContent={'space-around'} alignItems={'center'} className="animate__animated animate__fadeInUp">
      <Grid item xs={5} md={3} lg={2}>
        <Button disabled={page === 1} variant="contained" color="error" size="large" fullWidth onClick={previousPage}>
          Previous
        </Button>
      </Grid>
      <Grid item xs={5} md={3} lg={2}>
        <Button disabled={page === totalPages} variant="contained" color="error" size="large" fullWidth onClick={nextPage}>
          Next
        </Button>
      </Grid>
      <Grid item xs={12} md={10} marginTop={'1rem'}>
        <Grid container gap={1} justifyContent={'center'}>
          {
            allpages.map(element => (
              <Grid item xs={1} key={element}>
                <Button 
                  disabled={page === element} 
                  variant="contained" 
                  color="error" 
                  sx={{ minWidth: '100%' }}
                  onClick={() => clickPage(element)}
                >
                  {element}
                </Button>
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  )
};

export default PageChangers;