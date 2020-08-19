import styled from "styled-components";

const StyledApp = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${props => props.theme.mainTextColor};
    background-color: ${props => props.theme.mainBackgroundColor};
    font-size: ${props => props.theme.mainTextSize};

    h1{
        color: ${props => props.theme.headingTextColor};
        background-color: ${props => props.theme.headingBackgroundColor};
        font-size: ${props => props.theme.bannerTextSize};

        padding: 2rem;
        margin-bottom: 4rem;
        border-radius: 0 0 2rem 2rem;
    }
`;

export default StyledApp;
