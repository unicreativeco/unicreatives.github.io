import React from 'react';

import './App.css';

import * as colors from './Colors.js';
import CommunityCard from './CommunityCard/CommunityCard';

function App() {

  return (
    <div style={{ backgroundColor: colors.gray.darkest, height: '100%' }}>
      <CommunityCard
        image="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        name="Thomas Lu"
        username="thomas_a_lu"
        description="Thomas is an Arizonian studying CS at Cornell. He's also interested in design, sustainability, finance, and (most importantly) boba."
        url="thomaslu.me"
        social={{
          facebook: '',
          github: 'github',
          instagram: '',
          linkedin: 'linkedin',
          medium: '',
          twitter: '',
          youtube: '',
        }}
        skillset={{
          art: false,
          code: true,
          design: true,
          music: false,
          photo: false,
          video: false,
          write: false,
        }}
      />

    </div>
  )
}

export default App;
