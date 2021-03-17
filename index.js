import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function LoginForm(props) {
  const nameEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  const rememberMeEl = React.useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      rememberMe: rememberMeEl.current.checked,
    }
    // it would be a more completely correct REACT approach
    // to make a JSX component to render formData out to a selector on the HTML
    console.log(formData);
  };

  return (
     <form onSubmit={handleSubmit}>
      <b>Enter User Name:</b> &nbsp; <input type ="text" placeholder="username" ref={nameEl} /> 
       <br></br>
       <br></br>
       <b>Enter Password:</b> &nbsp;&nbsp; <input type="password" placeholder="password" ref={passwordEl} /> 
       <br></br>
       <br></br>
      <label>
         <input type="checkbox" ref={rememberMeEl} />
         &nbsp; Remember Me
         <br></br> 
       </label> 
       <br></br>
       <b><button type="submit" className="myButton">LOGIN</button></b>
     </form>
   );
}

ReactDOM.render(<div><LoginForm /></div>, document.getElementById("root"));
