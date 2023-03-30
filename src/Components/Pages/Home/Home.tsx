import React, { useState } from 'react';
import routes from '../../../routes';
import SideNav from '../../SideNav/SideNav';
import TeamMember from '../TeamMember/TeamMember';
import { Routes, Route } from 'react-router-dom';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='main-section flex '>
      <div className='bg-blue-gray-50/50 w-64 h-screen'>
        <SideNav
          darkMode={darkMode}
          routes={routes}
          setDarkMode={setDarkMode}
        />
      </div>
      <div className='container'>
        {/* Routes were created but as I was facing using issue during dark mode I am commenting it for now, you can uncomment as see, whether all routes are working of not */}
        {/* <Routes>
          {routes.map((elem) => (
            <Route path={elem.path} element={elem.element} />
          ))}
        </Routes> */}
        <TeamMember darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};
export default Home;
