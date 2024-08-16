import React from 'react';
import '../../style/Team.css'; 

const Team = () => {
  const teamMembers = [
    { name: 'Arusa Korse', photo: './Female.png' },
    { name: 'Tejas Kolhe', photo: './Tejas Kolhe.jpg' },
    { name: 'Shreyash Bhagat', photo: './Male.png' },
    { name: 'Shraddha Rathi', photo: './shraddha.jpg' },
    { name: 'Swapnali Patil', photo: './swapnali.jpg' }
  ];

  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h2 className="team-name">{member.name}</h2>
            <p className="team-role">Developer</p> {/* Add Developer text */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
