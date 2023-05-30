import React, { useState } from 'react';
import { Spinner, Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useTheme, useStyles } from './../contexts/themeContext';
import { translations } from "./../translations";
import { withLanguage } from "./../contexts/languageContext";


const ContactForm = (props) => {
       const [fetchStatus, setStatus] = useState(null);
       const [loading, setLoading] = useState(false);
       const [error, setError] = useState(null);
       const { language, toggleLanguage } = props;

       const styles = useStyles();

       const handleClick = () => {
              setLoading(true);
              setError(null);

              fetch("https://crahe-arthur.com/api/sendContactForm.php")
                     .then(response => {
                            if (!response.ok) {
                                   setStatus("error");
                                   throw new Error(`HTTP error! status: ${response.status}`);
                            }
                            return response.json();
                     })
                     .then(data => {
                            setStatus(data.status);
                            setLoading(false);
                     })
                     .catch(error => {
                            setError(error);
                            setLoading(false);
                     });
       };

       if (fetchStatus === "success") return (<div className="text-center text-success">Votre message a bien été envoyé !</div>);

       if (loading) return (<div className="text-center"><Spinner color="info" /></div>);

       if (error) return "An error has occurred: " + error.message;


       // Assume data is an array of objects with a name property
       return (
              <div className="container mt-10">
                     <form className="flex flex-col gap-4 container-md">
                            <div>
                                   <div className="mb-2 block">
                                          <Label
                                                 htmlFor="mail"
                                                 value={translations[language].contact.form.mail}
                                                 style={styles.text}
                                          />
                                   </div>
                                   <TextInput
                                          id="mail"
                                          placeholder="name@flowbite.com"
                                          required
                                          type="email"
                                          style={styles.input}
                                   />

                            </div>
                            <div>
                                   <div className="mb-2 block">
                                          <Label
                                                 htmlFor="subject"
                                                 value={translations[language].contact.form.subject}
                                                 style={styles.text}

                                          />
                                   </div>
                                   <TextInput
                                          id="subject"
                                          required
                                          type="text"
                                          style={styles.input}

                                   />
                            </div>

                            <div>
                                   <div className="mb-2 block">
                                          <Label
                                                 htmlFor="message"
                                                 value={translations[language].contact.form.message}
                                                 style={styles.text}

                                          />
                                   </div>
                                   <Textarea
                                          id="message"
                                          required
                                          type="text"
                                          style={styles.input}
                                   />
                            </div>

                            <Button type="submit" onClick={handleClick}>
                                   {translations[language].contact.form.send}
                                   
                            </Button>
                     </form></div>
       );
};

export default withLanguage(ContactForm);