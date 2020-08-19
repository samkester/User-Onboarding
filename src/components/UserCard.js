import React from "react";

const UserCard = ({user}) => {
    return(
        <div>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </div>
    );
};

export default UserCard;