import React from 'react'

const features = [
    {
      icon: "24", 
      description: "Unions"
    },
    {
      icon: "1000+",
      description: "Societes"
    },
    {
      icon: "2 Million+",
      description: "Cooperators In Lagos"
    }
  ]

const Numbers = () => {
  return (
    <>
    <section className='max-w-7xl mx-auto px-4 py-16'>
        {/* heading texts */}
        <div className='text-center mb-12'>
            <p className='font-semibold' style={{color: '#ED1B24'}}>OUR NUMBERS</p>
        </div>


        {/* features box */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-31'>
            {features.map((feature, index) => (
                <div key={index} className='flex flex-col text-center items-center'>                   
                        <div className='text-4xl font-bold' style={{color: '#5F0B0E'}}>{feature.icon}</div>
                    <p className='text-gray-500 text-center'>{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default Numbers