import React, { useState, useRef } from 'react';
import { Spinner } from 'flowbite-react';
import { translations } from "./../translations";
import { withLanguage } from "./../contexts/languageContext";

import DOMPurify from 'dompurify';

const ContactForm = (props) => {
       const [fetchStatus, setStatus] = useState(null);
       const [loading, setLoading] = useState(false);
       const [error, setError] = useState(null);
       const { language } = props;
       const formRef = useRef(null);

       const handleSubmit = (event) => {
              event.preventDefault();

              setLoading(true);
              setError(null);

              var formData = new FormData(event.target);

              let mail = DOMPurify.sanitize(formData.get("mail"));
              let subject = DOMPurify.sanitize(formData.get("subject"));
              let message = DOMPurify.sanitize(formData.get("message"));
              let firstName = DOMPurify.sanitize(formData.get("firstName"));
              let lastName = DOMPurify.sanitize(formData.get("lastName"));
              let companyOrOrganizationOrSchool = DOMPurify.sanitize(formData.get("companyOrOrganizationOrSchool"));

              fetch("https://crahe-arthur.com/api/sendContactForm.php", {
                     method: "POST",
                     body: JSON.stringify({
                            mail: mail,
                            firstName: firstName,
                            lastName: lastName,
                            companyOrOrganizationOrSchool: companyOrOrganizationOrSchool,
                            subject: subject,
                            message: message,
                            language: language
                     }),
                     headers: { "Content-Type": "application/json" }
              })
                     .then(checkStatus)
                     .then(response => response.json())
                     .then(data => {
                            if (data.status !== "success") throw new Error(`HTTP error! status: ${data.status}, message : ${data.message}`);

                            setStatus(data.status);
                            setLoading(false);
                            if (formRef.current) {
                                   formRef.current.reset();
                            }
                     })
                     .catch(error => {
                            setStatus("error");
                            setError(error);
                            setLoading(false);
                     });
       };

       if (error) return "An error has occurred: " + error.message;

       return (

              <div>
                     {fetchStatus === "success" &&
                            <div className="w-full flex justify-center d-flex content-start">
                                   <p className="bg-green-500 text-white text-center text-lg h-fit w-full p-4">
                                          {translations[language].contact.successMessageSent}  </p>
                            </div>
                     }

                     <form ref={formRef} id='contactForm' onSubmit={handleSubmit} method='POST' className="mx-auto container md:mt-14 mt-10 flex flex-col gap-5">
                            {/* Label and input for email */}
                            <div className="form-group flex flex-col gap-2">
                                   <label htmlFor="email">{translations[language].contact.contactForm.mail}<span className="text-pink-500 ms-1">*</span></label>
                                   <input required disabled={loading ? true : false} type="email" autoComplete='off' name="mail" className="disabled:opacity-40 disabled:cursor-not-allowed input form-control rounded-2xl focus:ring-white outline-none" placeholder={"joe.bolmon@gmail.com"} />
                            </div>

                            {/* Fist name, last name, organization */}
                            <div className="form-group flex flex-col md:flex-row gap-5">
                                   <div className="form-group flex flex-col gap-2">
                                          <label htmlFor="firstName">{translations[language].contact.contactForm.firstName}<span className="text-pink-500 ms-1">*</span></label>
                                          <input disabled={loading ? true : false} required type="text" autoComplete='off' name="firstName" className="disabled:opacity-40 disabled:cursor-not-allowed input form-control rounded-2xl focus:ring-white outline-none" placeholder={"Joe"} />
                                   </div>
                                   <div className="form-group flex flex-col gap-2">
                                          <label htmlFor="lastName">{translations[language].contact.contactForm.lastName}</label>
                                          <input disabled={loading ? true : false} type="text" autoComplete='off' name="lastName" className="disabled:opacity-40 disabled:cursor-not-allowed input form-control rounded-2xl focus:ring-white outline-none" placeholder={"Bolmon"} />
                                   </div>
                                   <div className="form-group flex flex-col gap-2">
                                          <label htmlFor="companyOrOrganizationOrSchool">{translations[language].contact.contactForm.companyOrOrganizationOrSchool}</label>
                                          <input disabled={loading ? true : false} type="text" autoComplete='off' name="companyOrOrganizationOrSchool" className="disabled:opacity-40 disabled:cursor-not-allowed input form-control rounded-2xl focus:ring-white outline-none" placeholder={translations[language].contact.contactForm.companyOrOrganizationOrSchoolPlaceholder} />
                                   </div>
                            </div>

                            {/* Label and input for subject */}
                            <div className="form-group flex flex-col gap-2">
                                   <label htmlFor="subject">{translations[language].contact.contactForm.subject}<span className="text-pink-500 ms-1">*</span></label>
                                   <input disabled={loading ? true : false} required type="text" name="subject" className="disabled:opacity-40 disabled:cursor-not-allowed input form-control rounded-2xl focus:ring-white outline-none" id="subject" placeholder={translations[language].contact.contactForm.subjectPlaceholder} />
                            </div>

                            {/* Label and textarea for message */}

                            <div className="form-group flex flex-col gap-2">
                                   <label htmlFor="message">{translations[language].contact.contactForm.message}<span className="text-pink-500 ms-1">*</span></label>
                                   <textarea disabled={loading ? true : false} required rows="6" name="message" className="disabled:opacity-40 disabled:cursor-not-allowed input form-control rounded-xl focus:ring-white outline-none" id="message" placeholder={translations[language].contact.contactForm.messagePlaceholder}></textarea>
                            </div>

                            {/* Submit button or loading animiation (Spinner)*/}
                            <div className="flex justify-center">
                                   {loading ?
                                          <div>
                                                 <Spinner
                                                        color="purple"
                                                        aria-label={translations[language].contact.loadingSendingMessage}
                                                        size="xl"
                                                 />
                                                 <span className='ml-5'>
                                                        {translations[language].contact.loadingSendingMessage}
                                                 </span>
                                          </div> : <input type="submit" disabled={loading ? true : false} className="disabled:opacity-40 disabled:cursor-not-allowed rounded-full mb-5 button sm:w-1/6 h-10 w-1/2 hover:cursor-pointer" value={translations[language].contact.contactForm.submit}></input>
                                   }
                            </div>
                     </form >
              </div >
       );
};

export default withLanguage(ContactForm);

function checkStatus(response) {
       if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
       }
       return response;
}

function isValidEmail(email) {
       const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
       return emailPattern.test(email);
}