import MeetupList from '../components/meetups/MeetupList';

import React from 'react';

const HomePage = () => {
    const dummyList = [
        {
            id: 'm1',
            image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg',
            title: 'meeting1',
            address: 'Random address',
        },
        {
            id: 'm2',
            image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg',
            title: 'meeting1',
            address: 'Random address',
        },
    ];
    return (
        <div>
            <MeetupList meetups={dummyList} />
        </div>
    );
};

export default HomePage;
