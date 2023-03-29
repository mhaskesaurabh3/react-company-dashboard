import React, { useEffect } from 'react';
import routes from '../../routes';
import NavLink from 'react-router-dom';

type SideNavProps = {
  routes: Array<any>;
};

const SideNav = (props: SideNavProps) => {
  const { routes } = props;
  useEffect(() => {
    console.log('routes', routes);
  }, []);

  return (
    <div>
      <div className='flex'>
        <div className='flex flex-col h-screen p-3 bg-grey shadow  w-64'>
          <div className='space-y-3'>
            <div className='flex-1'>
              <ul className='pt-2 pb-4 space-y-1 text-sm mt-20'>
                {routes &&
                  routes.map((route: any, index: number) => {
                    return (
                      <li key={index} className='rounded-sm'>
                        <a
                          href={route.path}
                          className='flex items-center p-2 space-x-3 rounded-md bg-purple text-white'
                        >
                          <img src={route.icon.type} alt={route.name} />
                          <span>{route.name}</span>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
