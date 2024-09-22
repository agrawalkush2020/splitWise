"use client";
import React from "react";
import Group from "../../components/Group";
import { useRouter } from 'next/navigation';
import { makeTheCall } from '../../utils/api'

const AddGroupButton = ({

}) => {

    const handleTheNewGroup = async () => {
        try {
            let response = await fetch('http://127.0.0.1:8000/users/fetch_all_users/');

            if (response.ok) {
                let data = await response.json();
                users = data.users;
                currentUserName = data.current_username;
                // Pass the users list via router's state
                router.push({
                    pathname: '/addGroup',
                    state: { users, currentUserName },  // Pass users through the router's state
                });
            }
            else {
                throw new Error('some thing went wrong');
            }

        } catch (error) {
            alert(error.message);
            return;
        }

    }

    return (
        <button onClick={handleTheNewGroup}>New Group</button>
    )
}

const AllGroups = ({
    groups = []

}) => {

    const router = useRouter();

    const enterTheGroup = async (groupId, goupName) => {

        try {
            const data = await makeTheCall()
        } catch (error) {


        }

        // Programmatically navigate to /groups/[groupId]
        router.push(`/groups/${groupId}`);
    }

    return (
        <>
            Your Groups
            <div>
                {groups.map((grp) => {
                    return <Group
                        photo={grp.photo}
                        name={grp.name}
                        id={grp.id}
                        key={grp.id}
                        openTheGroup={enterTheGroup}
                    />
                })}
            </div>
            <AddGroupButton />
        </>
    )
}

export default AllGroups;