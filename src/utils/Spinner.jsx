import StarIcon from '@mui/icons-material/Star';

const Spinner = ({ color }) => {
  return (
    <StarIcon sx={{ fontSize: '50px', color: color }} className='spin' />
  )
};

export default Spinner;