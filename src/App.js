import { useState } from 'react';
import './App.css';


const gender = ["Male", "Female", "Other"];
const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  address: "",
  dob: "",
  state: "",
  personGender: gender
};

function App() {
  const [values, setValues] = useState(initialValues);
  //const [radioBtn, setRadioBtn] = useState();
  const [errorMsg, setErrorMsg] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const save = (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    let formObject = Object.fromEntries(data.entries());
    console.log(formObject);
    setErrorMsg(validate(formObject));
  }
  
  const validate = (values) => {
    console.log(values);
    const err = {};
    if(!values.fname){
      err.fname = "First name required."
    }
    if(!values.lname){
      err.lname = "Last name required."
    }
    return err;
  }
  // const handleRadioBtn = (e) => {
  //   setRadioBtn(e.target.value);
  // }

  return (
    <form onSubmit={save}>
      <div>
        <h1>React Form Pracrice</h1>
        <div>
          <p>First Name:</p>
          <input type='text' name='fname' placeholder='Please enter first name.' value={values.fname}
            onChange={handleInputChange} />
            <p>{errorMsg.fname}</p>
        </div>
        <div>
          <p>Last Name:</p>
          <input type='text' name='lname' placeholder='Please enter last name.' value={values.lname}
            onChange={handleInputChange} />
            <p>{errorMsg.lname}</p>
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
          <input type="radio" id="maleGender" name="personGender" value={initialValues.personGender[0]} onChange={handleInputChange}
            checked={values.personGender === initialValues.personGender[0]} />
          <label htmlFor="maleGender">Male</label>
          <input type="radio" id="femaleGender" name="personGender" value={initialValues.personGender[1]} onChange={handleInputChange}
            checked={values.personGender === initialValues.personGender[1]} />
          <label htmlFor="femaleGender">Female</label>
          <input type="radio" id="otherGender" name="personGender" value={initialValues.personGender[2]} onChange={handleInputChange}
            checked={values.personGender === "Other"} />
          <label htmlFor="otherGender">Other</label>
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default App;
