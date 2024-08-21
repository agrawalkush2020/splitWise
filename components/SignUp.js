import React, { useState } from "react";
import Input from "./Input";

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);

    // Handling functions for each input state
    const handleFullNameChange = (value) => {
        setFullName(value);
    }

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value);
    }

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
    }

    const handleFileChange = (event) => {
        setProfilePhoto(event.target.files[0]);
    }

    const handleTheSubmit = (event) => {
        event.preventDefault(); 
        // Handle the form submission
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            // Proceed with form submission logic
        }
    }

    return (
        <div>
            <form onSubmit={handleTheSubmit}>
                <Input
                    name={"fullName"}
                    type={"text"}
                    label={"Full Name:"}
                    value={fullName}
                    placeHolder={"Enter your full name"}
                    handleChange={handleFullNameChange}
                />
                <Input
                    name={"phoneNumber"}
                    type={"number"}
                    label={"Phone Number:"}
                    value={phoneNumber}
                    placeHolder={"Enter your phone number"}
                    handleChange={handlePhoneNumberChange}
                />
                <Input
                    name={"email"}
                    type={"email"}
                    label={"Email Address:"}
                    value={email}
                    placeHolder={"Enter your email address"}
                    handleChange={handleEmailChange}
                />
                <Input
                    name={"password"}
                    type={"password"}
                    label={"Password:"}
                    value={password}
                    placeHolder={"Enter your password"}
                    handleChange={handlePasswordChange}
                />
                <Input
                    name={"confirmPassword"}
                    type={"password"}
                    label={"Confirm Password:"}
                    value={confirmPassword}
                    placeHolder={"Confirm your password"}
                    handleChange={handleConfirmPasswordChange}
                />
                <div>
                    <label>Profile Photo (Optional):</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                </div>
                <button className="bg-orange-600" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
