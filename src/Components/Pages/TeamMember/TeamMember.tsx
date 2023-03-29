import React, { useState } from 'react';
import './TeamMember.css';
import { teamDetails } from '../../../TeamDetails';

const TeamMember = () => {
  return (
    <>
      <div className='title'>
        <h2 className='font-bold text-xl mt-5'>Team Members</h2>
        <div className='members-details-section bg-darkGrey h-screen flex flex-wrap	justify-center'>
          {teamDetails &&
            teamDetails.map((detail, index) => {
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
