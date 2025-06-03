import React from 'react'
import ContactTable from '../components/ContactTable'

const ContactForm = () => {
  return (
    <div className="container w-[95%] mx-auto mt-5 lg:w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-[#464255] lg:text-xl">
          Contract Form
        </h2>
        <div className="bg-[#B98AFF] text-white text-sm font-medium px-1 h-10 rounded-lg"></div>
      </div>
      <ContactTable />
    </div>
  );
}

export default ContactForm
