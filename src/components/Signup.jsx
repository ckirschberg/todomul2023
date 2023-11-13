import React, { useState } from 'react';
import {createClient} from '@supabase/supabase-js';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const supabase = createClient('https://dhufseluundbrnzuevyz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRodWZzZWx1dW5kYnJuenVldnl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5OTc5NzAsImV4cCI6MjAxNDU3Mzk3MH0.VcCKoXEy7dReIvwGsGNs40uz1vsEMh022GiOmNcEhqI');
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can call your signup API or method
        console.log('Signing up with', email, password);
        signUpNewUser();
    }

    async function signUpNewUser() {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        //   options: {
        //     redirectTo: 'https//example.com/welcome'
        //   }
        })

        console.log("data", data);
        console.log("Error", error);

      }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange} required />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} required />
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default Signup;