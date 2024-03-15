'use client';

import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import type { RootState } from './redux/store';
import LanguageSwitch from './components/SwitchLanguage';
import TermsAndConditions from './components/TermsAndConditions';
import SignupForm from './components/SignupForm';
import About from './components/About';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/Features/counter/counterSlice';
export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const { fullname, email, phone, password } = useSelector((state: RootState) => state.signup);

  // Now you have access to the signup state values
  // You can use these values as needed in your component
  // console.log('Fullname:', fullname);
  // console.log('Email:', email);
  // console.log('Phone:', phone);
  // console.log('Password:', password);
  return (
    <main>
      <div className="container-fluid">
        <div className="row position-relative">
          <div className="col-md-6 align-self-center">
            <LanguageSwitch />
            <SignupForm />
            <TermsAndConditions />
          </div>
          <About />
        </div>
      </div>
      {/* {`Email: ${email}`}
      <h1> Hello World </h1>
      <Link href="/users" className="link">Users</Link>
      <ProductCard />

      <div className="m-2">

        <button className="btn btn-success me-2" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span className="p-5">{count}</span>
        <button className="btn btn-danger me-2" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button className="btn btn-secondary me-2" onClick={() => dispatch(incrementByAmount(2))}>
          Increment by 2
        </button>
      </div> */}
    </main>

  );
}
