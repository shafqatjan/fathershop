'use client';

// Features/signup/signupSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { submitSignupRequest } from '../../../helpers/api';
interface SignupState {
    fullname: string;
    email: string;
    phone: string;
    password: string;
    validationErrors: {
        fullname: string;
        email: string;
        phone: string;
        password: string;
    };
}

const initialState: SignupState = {
    fullname: '',
    email: '',
    phone: '',
    password: '',
    validationErrors: {
        fullname: '',
        email: '',
        phone: '',
        password: '',
    },
};

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setFullname: (state, action: PayloadAction<string>) => {
            state.fullname = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        validateField: (state, action: PayloadAction<{ field: string; value: string }>) => {
            const { field, value } = action.payload;
            switch (field) {
                case 'fullname':
                    state.validationErrors.fullname = value.length > 0 ? '' : 'Full name is required';
                    break;
                case 'email':
                    state.validationErrors.email = /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address';
                    break;
                case 'phone':
                    state.validationErrors.phone = /^\d{10}$/.test(value) ? '' : 'Phone number must be 10 digits';
                    break;
                case 'password':
                    state.validationErrors.password = value.length >= 6 ? '' : 'Password must be at least 6 characters long';
                    break;
                default:
                    break;
            }
        },
        submitSignup: async(state) => {
            const data = { "fullname": state.fullname, "email": state.email, "password": state.password, "phone": state.phone };
            console.log('submitSignup', data);
            const res = await submitSignupRequest(data);
            // Implement submission logic here
            // This action can trigger an API call or any other async operation
        },
    },
});

export const { setFullname, setEmail, setPhone, setPassword, validateField, submitSignup } = signupSlice.actions;

export default signupSlice.reducer;
