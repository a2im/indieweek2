"use client";

import React, { useId, useState } from 'react'
import Link from 'next/link'
import Footer from '../footer'

export default function Sponsors() {
  const id = useId();
   // States for contact form fields
   const [fullname, setFullname] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");
 
   //   Form validation state
   const [errors, setErrors] = useState({});
 
   //   Setting button text on form submission
   const [buttonText, setButtonText] = useState("Send");
 
   // Setting success or failure messages states
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   const [showFailureMessage, setShowFailureMessage] = useState(false);
 
   // Validation check method
   const handleValidation = () => {
     let tempErrors = {};
     let isValid = true;
 
     if (fullname.length <= 0) {
       tempErrors["fullname"] = true;
       isValid = false;
     }
     if (email.length <= 0) {
       tempErrors["email"] = true;
       isValid = false;
     }
     if (subject.length <= 0) {
       tempErrors["subject"] = true;
       isValid = false;
     }
     if (message.length <= 0) {
       tempErrors["message"] = true;
       isValid = false;
     }
 
     setErrors({ ...tempErrors });
     console.log("errors", errors);
     return isValid;
   };
 
   //   Handling form submit
 
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     let isValidForm = handleValidation();
 
     if (isValidForm) {
      setButtonText("sending");
       const res = await fetch("./api/sponsors", {
         body: JSON.stringify({
           email: email,
           fullname: fullname,
           subject: subject,
           message: message,
         }),
         headers: {
           "Content-Type": "application/json",
         },
         method: "POST",
       });
 
       const { error } = await res.json();
       if (error) {
         console.log(error);
         setShowSuccessMessage(false);
         setShowFailureMessage(true);
         setButtonText("Send");
         return;
       };
       setShowSuccessMessage(true);
       setShowFailureMessage(false);
       setButtonText("Sent!");
     }
     console.log(fullname, email, subject, message);
   };
  return (
    <div className="bggradient pt-8">
          <title>Indie Week - Sponsors</title>
          <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
          <div className="mx-auto mb-8 py-20 pb-96 md:pb-32"> 
            <div className='grid grid-cols-0 max-w-3xl mb-10 mx-auto gap-10 justify-center'> 
            <form className="rounded-3xl flex flex-col px-8 py-8 bg-black bg-opacity-75 border-4">
              <h3 className="font-bold text-center py-5">Interested in Sponsoring?</h3>
              <hr className="border-iwred mb-5"></hr>
      <h3 className="text-3xl text-center pb-10">
        Send us a message!
        </h3>
      <label 
      htmlFor="fullname" 
      className="text-2xl">
        Full name
        <span className="text-red-500 dark:text-gray-50">*</span>
        </label>
      <input 
      id={id} 
      type="text" 
      value={fullname} 
      onChange={e => setFullname(e.target.value)} name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
      <label htmlFor="email" className="text-2xl">E-mail<span className="text-red-500">*</span></label>
      <input id={id} type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
      <label htmlFor="subject" className="text-2xl">Subject<span className="text-red-500">*</span></label>
      <input id={id} type="text" value={subject} onChange={e => setSubject(e.target.value)} name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />
      <label htmlFor="message" className="text-2xl">Message<span className="text-red-500">*</span></label>
      <textarea id={id} value={message} onChange={e => setMessage(e.target.value)} name="message" rows={4} className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"></textarea>
      <div className="flex flex-row items-center justify-start">
        <button className="bg-white px-7 drop-shadow-2xl max-h-21 justify-center leading-tight mx-auto mt-10 rounded-full" onClick={handleSubmit}>
              <h3 className="align-middle text-4xl text-black truncate font-normal tracking-tighter leading-tight py-2 px-4">
            {buttonText}
            </h3>
        </button>
      </div>
      { showFailureMessage === true && (<div>Error! Please try again.  If you continue to encounter problems, please contact <Link href="mailto:support@a2im.org">support@a2im.org</Link></div>) }
   { showSuccessMessage === true && (<h4 className="text-center">Please allow up to 48 hours for us to review your message. Thanks!</h4>) }
    </form>
              </div>
          </div>
          <Footer/>
    </div>
  )
}
