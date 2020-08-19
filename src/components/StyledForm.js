import styled from "styled-components";

const StyledForm = styled.div`
    width: 50%;
    min-width: 400px;
    padding: 2rem;
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${props => props.theme.highlightTextColor};
    background-color: ${props => props.theme.highlightBackgroundColor};
    border-radius: 2rem;

    label{
        padding: 1rem;
        
        input{
            margin-left: 2rem;
            color: currentColor;
            border-color: currentColor;
            background-color: transparent;
            border-width: 1px;
            padding: 0.25rem;
        }
    }

    button{
        font-size: ${props => props.theme.largeTextSize};
        padding: 1rem 3rem;

        color: ${props => props.theme.headingTextColor};
        border-color: currentColor;
        background-color: ${props => props.theme.headingBackgroundColor};
        border-radius: 2rem;

        :disabled{
            color: currentColor;
            background-color: transparent;
        }
    }

    div.errors{
        margin-top: 2rem;
    }
`;

export default StyledForm;