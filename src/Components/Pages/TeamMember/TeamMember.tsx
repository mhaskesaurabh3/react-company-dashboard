import React, { useState } from 'react';
import './TeamMember.css';
import { teamDetails } from '../../../TeamDetails';
import SearchIcon from '../../../assets/SearchIcon.png';

const TeamMember = () => {
  const [memberDetail] = useState(teamDetails);
  const [filteredMemberData, setFilteredMemberData] = useState(teamDetails);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    let searchedValue = e.target.value;
    let searchedWord = memberDetail.filter((detail) => {
      return detail.name.toLowerCase().includes(searchedValue.toLowerCase());
    });
    setFilteredMemberData(searchedWord);
    if (!searchedWord) {
      setFilteredMemberData([]);
    } else {
      setFilteredMemberData(searchedWord);
    }

    console.log('filteredMemberData', filteredMemberData);
  };

  return (
    <>
      <div className='title'>
        <div className='flex justify-between'>
          <h2 className='font-bold text-xl mt-5 ml-4 mb-5'>Team Members</h2>
          <input
            className='border-slate-400 mb-5 my-5 mr-8 w-64 h-8 p-3 rounded-lg bg-darkGrey'
            type='text'
            name='searchfield'
            placeholder='Search...'
            onChange={handleClick}
          />
        </div>
        <div className='members-details-section bg-darkGrey h-screen flex flex-wrap	justify-center md:p-0 2xl:px-20'>
          {filteredMemberData &&
            filteredMemberData.map((detail: any, index: number) => {
              return (
                <>
                  <div
                    key={index}
                    className='member-card mt-12 rounded-xl flex justify-center items-center flex-col'
                  >
                    <div className='bg-purple rounded-full w-24 h-24 flex justify-center items-center'>
                      <h6 className='text-white font-bold member-short-name'>
                        {detail.avatarText}
                      </h6>
                    </div>
                    <div className='member-name'>
                      <h6 className='font-semibold text-lg'>{detail.name}</h6>
                      <span className='subtitle-text text-sm'>
                        {detail.jobTitle}
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default TeamMember;
