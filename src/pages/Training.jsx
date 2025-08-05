import React from 'react'
import TrainingBanner from '../components/TrainingBanner'
import CourseCard from '../components/CoursesSection'
import UpcomingTraining from '../components/UpcomingTrainings'
import SubscribeSection from '../components/SubscribeSection'


const Training = () => {
  return (
    <>
      <TrainingBanner />
      <CourseCard />
      <UpcomingTraining />
      <SubscribeSection />
    </>
  )
}

export default Training