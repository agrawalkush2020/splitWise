import React, {useState} from "react";
import Input from "./Input";

const Login = ({

}) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');

    const handleUserNameChange = (value) => {
        setUserName(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const makeTheCall = async (url, body) => {
        let response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        })

        return response;
    }

    const handleTheSubmit = async (event) => {

        if(!userName || !password){
            alert('Don"t leave the input empty')
            return ;
        }

        event.preventDefault();

        debugger

        let url = 'http://127.0.0.1:8000/' + "users/login/";
        let body = {
            userName: userName,
            password: password,
        };

        let response = await makeTheCall(url, body);
        if(response.ok){
            const data = await response.json();
            if(data?.success){
                // user logged In


            }
            else{
                alert(`${data?.message}`);
            }
        }
        else{
            alert('Some thing went Wrong!!');
        }

    }

    return (
        <>
            <form onSubmit={handleTheSubmit}>

                <Input
                    name={"username"}
                    type={"text"}
                    label={"Username:"}
                    value={userName}
                    placeHolder={"UserName"}
                    handleChange={handleUserNameChange}
                />
                <Input
                    name={"password"}
                    type={"password"}
                    label={"Password:"}
                    value={password}
                    placeHolder={"Enter your password"}
                    handleChange={handlePasswordChange}
                />

                <button className="bg-orange-600" type="submit">Log In</button>
            </form>
        </>
    )
}

export default Login;