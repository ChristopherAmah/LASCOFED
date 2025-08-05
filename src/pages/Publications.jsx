import React from 'react'
import PublicationsBanner from '../components/PublicationsBanner'
import Radio from '../components/Radio'
import PublicationCard from '../components/PublicationCard'
import SubscribeSection from '../components/SubscribeSection'
import AudioContent from '../components/AudioContent'

const Publications = () => {
  return (
    <>
      <PublicationsBanner />
      <Radio />
      <PublicationCard />
      <AudioContent />
      <SubscribeSection />
    </>
  )
}

export default Publications