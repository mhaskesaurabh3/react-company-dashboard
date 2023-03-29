import React from 'react';
import routes from '../../routes';
import SideNav from '../SideNav/SideNav';
import TeamMember from './TeamMember/TeamMember';

const Home = () => {
  return (
    <div className='main-section flex'>
      <div className='min-h-screen bg-blue-gray-50/50 w-64'>
        <SideNav routes={routes} />
      </div>
      <div className='container'>
        <TeamMember />
      </div>
    </div>
  );
};
export default Home;
