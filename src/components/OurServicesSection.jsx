import React from "react";
import { FiMonitor } from "react-icons/fi";

const services = [
  {
    title: "Promotion Of Co-operative Societies",
    description:
      "Actively encouraging the growth and development of new and existing cooperatives.",
    iconBg: "bg-yellow-100",
  },
  {
    title: "Training and Regulation",
    description:
      "We manage a comprehensive scheme for the training, licensing, and regulation of Cooperative Account Managers.",
    iconBg: "bg-rose-100",
  },
  {
    title: "Consultancy and Advisory",
    description:
      "Offering expert guidance on all aspects of cooperative management to ensure efficiency and success.",
    iconBg: "bg-rose-100",
  },
  {
    title: "Educational Events",
    description:
      "Organizing and planning impactful training sessions, conferences, retreats, seminars, and educational tours to foster continuous learning.",
    iconBg: "bg-rose-100",
  },
  {
    title: "Co-operative Resources",
    description:
      "Printing and selling official cooperative stationery and materials.",
    iconBg: "bg-rose-100",
  },
  {
    title: "CoopLight NewsLetter",
    description:
      "Keeping members informed and connected through our regular publication.",
    iconBg: "bg-yellow-100",
  },
];

const OurServicesSection = () => {
  return (
    <section className="py-20 px-4 md:px-16 bg-[#F8F8F8] font-sans">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div>
          <h2 className="font-semibold mb-12 uppercase text-center" style={{color: '#ED1B24'}}>
              Our Services
            </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              We’ve helped more than 200+ cooperatives to grow in operations
            </h3>
          </div>
          <div>
            <p className="text-gray-600 mb-6">
              At LASCOFED, we are dedicated to fostering the sustainable growth
              and success of cooperative societies throughout Lagos State. Our
              extensive range of services provides the essential tools, expert
              guidance, and continuous support needed to establish, manage, and
              expand thriving cooperative ventures, ensuring economic
              empowerment and community development for all our members.
            </p>
            <button className="border border-red-500 text-red-500 px-6 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-md ${service.iconBg} mb-4`}
            >
              <FiMonitor className="text-red-500 text-xl" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h4>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <button className="text-red-500 text-sm font-semibold flex items-center gap-1 group">
              Learn More{" "}
              <span className="transform group-hover:translate-x-1 transition-transform">
                &gt;
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;
