import React, { useState } from 'react';
import { Spinner, Button, Label, TextInput, Checkbox } from 'flowbite-react';

const MyComponent = () => {
       const [fetchStatus, setStatus] = useState(null);
       const [loading, setLoading] = useState(false);
       const [error, setError] = useState(null);

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

       if (loading) return (<Spinner color="info" />);

       if (error) return "An error has occurred: " + error.message;


       // Assume data is an array of objects with a name property
       return (
              <form className="flex flex-col gap-4">
                     <div>
                            <div className="mb-2 block">
                                   <Label
                                          htmlFor="email1"
                                          value="Your email"
                                   />
                            </div>
                            <TextInput
                                   id="email1"
                                   placeholder="name@flowbite.com"
                                   required
                                   type="email"
                            />
                     </div>
                     <div>
                            <div className="mb-2 block">
                                   <Label
                                          htmlFor="password1"
                                          value="Your password"
                                   />
                            </div>
                            <TextInput
                                   id="password1"
                                   required
                                   type="password"
                            />
                     </div>
                     <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">
                                   Remember me
                            </Label>
                     </div>
                     <Button type="submit">
                            Submit
                     </Button>
              </form>
       );
};

export default MyComponent;
