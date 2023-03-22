import styled from "styled-components";

export const NavbarWrapper = styled.nav`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: white;
    position: fixed;
    top: 10vh;
    right: ${props => (props.open ? "0" : "-100%")};
    width: 75%;
    height: 90vh;
    transition: right 0.3s linear;

    .menuNav {
        color: white;
        background: #1DBEB4;
        width: 100%;
        padding-top: 5rem;
        padding-right: 1rem;
        text-align: right;
    }

    .LinkNav {
        display: block;
        text-align: right;
        padding: 1rem 0.8rem;
        color: #383B58;
        text-decoration: none;
        font-weight: bold;
    }

    .redesNav {
        text-align: right;
        justify-content: flex-end;
        position: absolute;
        padding-right: 1rem;
        bottom: 0;
        right: 0;
    }

    .iconNav {
        margin: 0.5rem;
    }

    @media only screen and (min-width: 624px) {

        flex-direction: row;
        position: initial;
        height: auto;
        justify-content: center;
        background: white;
        width: 100%;

        .menuNav {
            display: none;
        }

        .redesNav {
            display: none;
        }

        .userNav {
            display: flex;
            flex-direction: row;
        }

        .LinkNav {
            color: #1DBEB4;
            border: 1px solid #1DBEB4;
            border-radius: 5px;
            font-weight: bold;
            margin-right: 1rem;
        }
    }
    
`;