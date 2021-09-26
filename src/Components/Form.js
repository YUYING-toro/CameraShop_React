import React from 'react';
//  haven't apply account at https://www.emailjs.com/
import emailjs from 'emailjs-com';   

const Form = () => {
    const sendForm = (e) => {
        e.preventDefault();   
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID',e.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        < >
        <div className="row">
            <form className="mb-3" onSubmit={{sendForm}}>
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <div className="col-auto mt-2">
                    <button type="submit" className="btn btn-primary mb-3">Send</button>
                </div>
            </form>
        </div>



        </>
    )
}

export default Form;
