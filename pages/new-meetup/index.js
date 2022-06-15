import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetup = () => {
    const onAddMeetup = (meetupData)=>{
console.log(meetupData);
    }
  return (
    <NewMeetupForm onAddMeetup={onAddMeetup}/>
  )
}

export default NewMeetup