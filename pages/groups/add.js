
import React, { useState } from "react";
import Input from "../../components/Input";
import DropDown from "../../components/DropDown";

const AddGroup = ({
    allUsers=[]

}) => {

    const [groupName, setGroupName] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);

    const addUser = (userName)=>{
        setSelectedUsers((prevState)=> [...prevState,userName])
    }

    const makeGroup=()=>{
        
    }

    return (
        <>
            <header>
                Make New Group
            </header>
            <div>
                <div>
                    <label>Profile Photo (Optional):</label>
                    <Input
                        type="file"
                        onChange={handleFileChange}
                    />
                </div>
                <Input
                    name={"fullName"}
                    type={"text"}
                    label={"Full Name:"}
                    value={fullName}
                    placeHolder={"Enter your full name"}
                    handleChange={handleFullNameChange}
                />
                <div>
                    <div>
                        {selectedUsers.map((user)=>{
                            return <div>{user}</div>
                        })}
                    </div>
                    <DropDown 
                        deafultOption={'--select To Add--'}
                        label={'Add friend'}
                        options={allUsers}
                        handleTheChange={addUser}
                        selectedOptions={selectedUsers}
                        alwaysShowDefault={true}
                    />
                </div>

                <div> 
                    <button onClick={makeGroup}>Make</button>
                </div>
            </div>
        </>
    )
}

export default AddGroup;