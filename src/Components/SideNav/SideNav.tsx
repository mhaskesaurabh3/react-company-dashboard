import React, { useEffect, useState } from 'react';
import './SideNav.css';
import LightMode from '../../assets/LightMode.svg';
import DarkMode from '../../assets/DarkMode.svg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

type SideNavProps = {
  routes: Array<any>;
  darkMode: any;
  setDarkMode: any;
};

const SideNav = (props: SideNavProps) => {
  const [active, setactive] = useState('');

  const { routes, darkMode, setDarkMode } = props;
  useEffect(() => {
    console.log('routes', routes);
    console.log(darkMode);
  }, [darkMode]);

  const handleClick = (name: string) => {
    console.log('Name', name);
    setactive(name);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div className='flex h-screen'>
        <div
          className={`flex flex-col justify-between ${
            darkMode ? 'bg-darkBlue' : 'bg-grey'
          } shadow  w-64`}
        >
          <ul className='pt-2 pb-4 space-y-1 text-sm mt-20 p-3'>
            {routes &&
              routes.map((route: any, index: number) => {
                return (
                  <li key={index} className='rounded-sm'>
                    <NavLink to={route.path}>
                      <a
                        // href={route.path}
                        onClick={() => handleClick(route.name)}
                        className={`flex items-center p-2 space-x-3 rounded-md ${
                          darkMode ? 'text-white' : 'text-black'
                        } focus:text-white focus-within:bg-purple focus:bg-purple active:bg-purple active:text-white`}
                      >
                        <img src={route.icon.type} alt={route.name} />
                        <span>{route.name}</span>
                      </a>
                    </NavLink>
                  </li>
                );
              })}
          </ul>
          {darkMode ? (
            <button
              className='flex mb-4 p-4 items-center w-60 h-12 dark-mode-button bg-purple'
              onClick={handleDarkMode}
            >
              <img src={DarkMode} />
              <h6 className='text-left ml-3 text-white'>Dark Mode</h6>
            </button>
          ) : (
            <button
              className='flex mb-4 p-4 items-center w-60 h-12 dark-mode-button'
              onClick={handleDarkMode}
            >
              <img src={LightMode} />
              <h6 className='text-left ml-3'>Light Mode</h6>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
