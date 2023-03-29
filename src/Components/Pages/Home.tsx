import React from 'react';
import routes from '../../routes';
import SideNav from '../SideNav/SideNav';
import TeamMember from './TeamMember/TeamMember';

const Home = () => {
  return (
    <div className='main-section flex'>
      <div className='bg-blue-gray-50/50 w-64'>
        <SideNav routes={routes} />
      </div>
      <div className='container h-screen'>
        <TeamMember />
      </div>
    </div>
  );
};
export default Home;
