import { useState } from 'react';
import './App.css';
// import Button from 'react-bootstrap/Button';

const save = (event) =>{
  event.preventDefault();
  var data = new FormData(event.target);
  let formObject = Object.fromEntries(data.entries());
  console.log(formObject);
}

const initialValues = {
  fname:"",
  lname:"",
  email:"",
  phone:"",
  address:"",
  dob:"",
  state:""
};

function App() {
  const[values, setValues] = useState(initialValues);
  const[radioBtn, setRadioBtn] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleRadioBtn = (e) =>{
    setRadioBtn(e.target.value);
  }

  return (
    <form onSubmit={save}>
      <div>
        <h1>React Form Pracrice</h1>
        <div>
          <p>First Name:</p>
          <input type='text' name='fname' placeholder='Please enter first name.' value={values.fname} 
          onChange={handleInputChange} />
        </div>
        <div>
          <p>Last Name:</p>
          <input type='text' name='lname' placeholder='Please enter last name.' value={values.lname} 
          onChange={handleInputChange} />
        </div>
        <div>
          <p>Email:</p>
          <input type='email' name='email' placeholder='Please enter email id.' value={values.email}
          onChange={handleInputChange} />
        </div>
        <div>
          <p>Phone no:</p>
          <input type='text' name='phone' placeholder='Please enter phone no.' value={values.phone} 
          onChange={handleInputChange} />
        </div>
        <div>
          <p>Address:</p>
          <textarea placeholder='Please enter addrss.' name='address' value={values.address}
          onChange={handleInputChange}></textarea>
        </div>
        <div>
          <p>Date of birth:</p>
          <input type='date' name='dob' value={values.dob} onChange={handleInputChange} />
        </div>
        <div>
          <p>State:</p>
          <select name='state'>
            <option>Please select State</option>
            <option>Utter Pradesh</option>
            <option>Maharastra</option>
            <option>Delhi</option>
          </select>
        </div>
        <div>
          <p>Gender:</p>
          <input type="radio" id="maleGender" name="personGender" value="male" onChange={handleRadioBtn}
          checked={radioBtn === "male"} />
          <label htmlFor="maleGender">Male</label>
          <input type="radio" id="femaleGender" name="personGender" value="female" onChange={handleRadioBtn}
          checked={radioBtn === "female"}/>
          <label htmlFor="femaleGender">Female</label>
          <input type="radio" id="otherGender" name="personGender" value="other" onChange={handleRadioBtn}
          checked={radioBtn === "other"} />
          <label htmlFor="otherGender">Other</label>
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default App;
