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
   <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-[#101010] py-8 px-6 mx-auto w-full md:w-10/12 lg:w-9/12" style={{ borderRadius: '12px' }}>
        {/* heading texts */}
        <div className="text-center mb-12">
          <p className="font-semibold text-white">OUR NUMBERS</p>
        </div>

        {/* features box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col text-center items-center">
              <div className="text-[48px] font-bold text-white">{feature.icon}</div>
              <p className="text-[16px] text-white text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  )
}

export default Numbers