import { Navigate, Route, Routes } from "react-router-dom";
import CharacterList from "../components/CharacterList/CharacterList";
import CharacterDetails from "../components/CharacterDetails/CharacterDetails";

const Router = () => {
  return (
    <Routes>
      <Route index element={<CharacterList />} />
      <Route path='character/:id' element={<CharacterDetails />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
};

export default Router;