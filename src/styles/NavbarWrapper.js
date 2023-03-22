import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    h2 {
        color: white;
        background: #1DBEB4;
        padding-top: 5rem;
        padding-right: 1rem;
        text-align: right;
    }

    a {
        text-align: right;
        padding: 1rem 0.8rem;
        color: #383B58;
        text-decoration: none;
        font-weight: bold;
    }

    div {
        text-align: right;
    }

    img {
        margin: 0.5rem;
    }

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: white;
    position: fixed;
    top: 10vh;
    right: ${props => (props.open ? "0" : "-100%")};
    width: 70%;
    height: 90vh;
    transition: right 0.3s linear;

    @media only screen and (min-width: 624px) {
        h2 {
            display: none;
        }
        
        div {
            display: none;
        }

        a {
            color: #1DBEB4;
            border: 1px solid #1DBEB4;
            border-radius: 5px;
            font-weight: bold;
            margin-right: 1rem;
        }

        flex-direction: row;
        position: initial;
        height: auto;
        justify-content: flex-end;
        background: white;
    }

    
`;