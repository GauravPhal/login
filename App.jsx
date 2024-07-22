// import './index.css';
// import './App.css';
import { useState } from 'react';
import Router from './router/Router';
import publicRoutes from './router/routes/PublicRoutes';
import { Outlet } from 'react-router-dom';



function App() {
    const [allRoutes, setAllRoutes] = useState([...publicRoutes])
    console.log(allRoutes);

    return <Router allRoutes={allRoutes} />
    <Outlet/>
  }    

export default App;
