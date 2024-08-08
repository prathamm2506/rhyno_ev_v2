import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import SocialIcon from './SocialIcon';

const inputFields = [
  { label: 'YOUR NAME', type: 'text' },
  { label: 'E-MAIL', type: 'email' },
  { label: 'PHONE NUMBER', type: 'tel' },
  { label: 'MESSAGE', type: 'textarea' }
];

function ContactForm() {
  return (
    <form className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-72 max-md:mt-10 max-md:max-w-full">
        {inputFields.map((field, index) => (
          <InputField key={index} label={field.label} type={field.type} />
        ))}
        <SubmitButton />
        <SocialIcon />
      </div>
    </form>
  );
}

export default ContactForm;