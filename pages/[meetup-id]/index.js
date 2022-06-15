import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
    return (
        <MeetupDetail
            image='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg'
            title='A new meetup'
            address='A random address'
        />
    );
};

export default MeetupDetails;
