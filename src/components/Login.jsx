import React, { useState } from 'react';
import {createClient} from '@supabase/supabase-js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const supabase = createClient('https://dhufseluundbrnzuevyz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRodWZzZWx1dW5kYnJuenVldnl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5OTc5NzAsImV4cCI6MjAxNDU3Mzk3MH0.VcCKoXEy7dReIvwGsGNs40uz1vsEMh022GiOmNcEhqI');
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        // Here you can call your signup API or method
        console.log('Logging in with', email, password);
        loginNewUser();
    }

    async function loginNewUser() {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        //   options: {
        //     redirectTo: 'https//example.com/welcome'
        //   }
        })
        setIsLoading(false);

        if (data && data.user) {
            // Gemme user info i context.
            console.log("Successful login, email is", data.user.email);
        }
        console.log("data", data);
        console.log("Error", error);

      }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            { isLoading && <h2>Loading...</h2> }
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
            <button disabled={isLoading} type="submit">Login</button>
        </form>
    );
}

export default Login;