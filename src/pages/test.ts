export async function sendMail(name: string, lastName: string, email:string, test: string, object: string, message: string) { 
       await fetch('http://localhost/api/apitest.php')
              .then(response => response.text())
              .then(text => {
                     console.log(text)
              })
              .catch(error => {
                     console.error('Error fetching data:', error);
              });
}