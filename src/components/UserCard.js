import React from "react";
import StyledUser from "./StyledUser";

const UserCard = ({user}) => {
    return(
        <StyledUser>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </StyledUser>
    );
};

export default UserCard;