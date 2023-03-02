import { Route, Routes } from 'react-router-dom';
import Scrollcards from './Components/scrollcards';
import Navbar from './Components/Navbar';
import Tabs from './Components/Tabs';
import Subscibe from './Components/Subscibe';
import Footer from './Components/Footer';
function App() {
  return (
    <Routes>
      <Route index element={
        <div>
          <Navbar />
          <div className=' my-48'></div>
          <Scrollcards />
          <Tabs />
          <Subscibe />
          <Footer />

        </div>
      } />
     

    </Routes>
  );

}

export default App;
