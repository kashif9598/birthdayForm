import { Route, Routes } from 'react-router-dom';
import classes from './app.module.css';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import List from './components/List/List';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className={classes.app}>
      <NavBar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/list' element={<List />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
