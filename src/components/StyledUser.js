import styled from "styled-components";

const StyledUser = styled.div`
    margin: 2rem;
    padding: 2rem;
    border-radius: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${props => props.theme.headingBackgroundColor};

    p {
        margin: 0.25rem;
    }
`;

export default StyledUser;
