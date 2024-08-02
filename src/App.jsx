import { Box } from '@mui/material';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Router from './router/Router';

function App() {

  return (
    <>
      <Header />
      <Box width={'100%'}>
        <Router />
      </Box>
      <Footer />
    </>
  )
}

export default App;