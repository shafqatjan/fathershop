// SignupForm.client.js
'use client';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setFullname, setPassword, setPhone, submitSignup, validateField } from '../redux/Features/signup/signupSlice';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';

const input = document.querySelector("#phone");
intlTelInput(input, {
    utilsScript: "path/to/utils.js"
});
const SignupForm = () => {
  const dispatch = useDispatch();

  // Access the entire signup state from the Redux store
  const { validationErrors } = useSelector((state) => state.signup);
  const formData = useSelector((state) => state.signup);

  // State to store form submission status
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    let noError = true;
    setFormSubmitted(true); // Set form submission status
    if (formData.fullname === '') {
      noError = false;
      dispatch(validateField({ field: 'fullname', value: '' }));
    }
    if (formData.email === '') {
      noError = false;
      dispatch(validateField({ field: 'email', value: '' }));
    }
    if (formData.phone === '') {
      noError = false;
      dispatch(validateField({ field: 'phone', value: '' }));
    }
    if (formData.password === '') {
      noError = false;
      dispatch(validateField({ field: 'password', value: '' }));
    }
    // Dispatch the submitSignup action with the entire form data
    if (noError) {
      dispatch(submitSignup());
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case 'fullname':
        dispatch(setFullname(value));
        dispatch(validateField({ field: 'fullname', value }));
        break;
      case 'email':
        dispatch(setEmail(value));
        dispatch(validateField({ field: 'email', value }));
        break;
      case 'phone':
        dispatch(setPhone(value));
        dispatch(validateField({ field: 'phone', value }));
        break;
      case 'password':
        dispatch(setPassword(value));
        dispatch(validateField({ field: 'password', value }));
        break;
      default:
        break;
    }
  };


  return (
    <div className={`${styles.containerSignup} text-center`}>
      <div className={`${styles.logo} mb-4`}>
        <img src="/logo.svg" alt="" className="img-fluid" />
      </div>
      <h4 className="mb-3">Sign Up</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className={`form-control ${styles.formControl}`} id="fullname" placeholder="Full Name" onChange={handleChange} />
          {formSubmitted && validationErrors?.fullname && <span className="text-danger">{validationErrors?.fullname}</span>}
        </div>
        <div className="mb-3">
          <input type="tel" className={`form-control ${styles.formControl}`} id="phone" placeholder="Phone" onChange={handleChange} />
          {formSubmitted && validationErrors?.phone && <span className="text-danger">{validationErrors?.phone}</span>}
        </div>
        <div className="mb-3">
          <input type="email" className={`form-control ${styles.formControl}`} id="email" placeholder="Email" onChange={handleChange} />
          {formSubmitted && validationErrors?.email && <span className="text-danger">{validationErrors?.email}</span>}
        </div>
        <div className="mb-3">
          <input type="password" className={`form-control ${styles.formControl}`} id="password" placeholder="Password" onChange={handleChange} />
          {formSubmitted && validationErrors?.password && <span className="text-danger">{validationErrors?.password}</span>}
          <span className="password-toggle-icon"><i className="fas fa-eye"></i></span>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-dark d-block">Create Account</button>
        </div>
        <div className="text-muted small mt-3">
          Already have an Account <a href="#" className="link-dark text-decoration-none">Login</a>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
