import React, { useState } from 'react';
import { Button, Spinner } from 'flowbite-react';
import { translations } from "./../translations";
import { withLanguage } from "./../contexts/languageContext";

import DOMPurify from 'dompurify';

const ContactForm = (props) => {
       const [fetchStatus, setStatus] = useState(null);
       const [loading, setLoading] = useState(false);
       const [error, setError] = useState(null);
       const { language } = props;

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
                     })
                     .catch(error => {
                            setStatus("error");
                            setError(error);
                            setLoading(false);
                     });
       };

       if (fetchStatus === "success") return (<div className="text-center text-success">{translations[language].contact.successMessageSent}</div>);

       if (loading) return (
              <div className="test mx-auto flex justify-center h-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center z-0">
                     <Button color="gray">
                            <Spinner
                                   color="info"
                                   aria-label={translations[language].contact.loadingSendingMessage}
                                   size="xl"
                            />
                            <span className='ml-5'>
                                   {translations[language].contact.loadingSendingMessage}
                            </span>
                     </Button>
              </div>);

       if (error) return "An error has occurred: " + error.message;

       return (
              <form onSubmit={handleSubmit} method='POST' className="mx-auto container md:mt-24 mt-16 flex flex-col gap-5">
                     {/* Label and input for email */}
                     <div className="form-group flex flex-col gap-2">
                            <label htmlFor="email">{translations[language].contact.contactForm.mail}<span className="text-pink-500 ms-1">*</span></label>
                            <input required type="email" autoComplete='off' name="mail" className="input form-control rounded-2xl focus:ring-white outline-none" placeholder={"joe.bolmon@gmail.com"} />
                     </div>

                     {/* Fist name, last name, organization */}
                     <div className="form-group flex flex-col md:flex-row gap-5">
                            <div className="form-group flex flex-col gap-2">
                                   <label htmlFor="firstName">{translations[language].contact.contactForm.firstName}<span className="text-pink-500 ms-1">*</span></label>
                                   <input required type="text" autoComplete='off' name="firstName" className="input form-control rounded-2xl focus:ring-white outline-none" placeholder={"Joe"} />
                            </div>
                            <div className="form-group flex flex-col gap-2">
                                   <label htmlFor="lastName">{translations[language].contact.contactForm.lastName}</label>
                                   <input type="text" autoComplete='off' name="lastName" className="input form-control rounded-2xl focus:ring-white outline-none" placeholder={"Bolmon"} />
                            </div>
                            <div className="form-group flex flex-col gap-2">
                                   <label htmlFor="companyOrOrganizationOrSchool">{translations[language].contact.contactForm.companyOrOrganizationOrSchool}</label>
                                   <input type="text" autoComplete='off' name="companyOrOrganizationOrSchool" className="input form-control rounded-2xl focus:ring-white outline-none" placeholder={translations[language].contact.contactForm.companyOrOrganizationOrSchoolPlaceholder} />
                            </div>
                     </div>

                     {/* Label and input for subject */}
                     <div className="form-group flex flex-col gap-2">
                            <label htmlFor="subject">{translations[language].contact.contactForm.subject}<span className="text-pink-500 ms-1">*</span></label>
                            <input required type="text" name="subject" className="input form-control rounded-2xl focus:ring-white outline-none" id="subject" placeholder={translations[language].contact.contactForm.subjectPlaceholder} />
                     </div>

                     {/* Label and textarea for message */}

                     <div className="form-group flex flex-col gap-2">
                            <label htmlFor="message">{translations[language].contact.contactForm.message}<span className="text-pink-500 ms-1">*</span></label>
                            <textarea required rows="6" name="message" className="input form-control rounded-xl focus:ring-white outline-none" id="message" placeholder={translations[language].contact.contactForm.messagePlaceholder}></textarea>
                     </div>

                     {/* Submit button */}
                     <div className="flex justify-center">
                            <input type="submit" className="rounded-full mb-5 button sm:w-1/6 h-10 w-1/2 hover:cursor-pointer" value={translations[language].contact.contactForm.submit}></input>
                     </div>
              </form>
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