import React from 'react'
import PublicationsBanner from '../components/PublicationsBanner'
import Radio from '../components/Radio'
import PublicationCard from '../components/PublicationCard'
import SubscribeSection from '../components/SusbscribeSection'
import AudioContent from '../components/AudioContent'

const Home = () => {
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

export default Home