/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(Link)`
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    letter-spacing: 0.125rem;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 0.3rem;
        height: 0.3rem;
        top: 56%;
        right: -0.25rem;
        background-color: var(--color-primary);
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
    }

    h2 {
        text-transform: capitalize;
    }

    /* &:link,
    &:visited {
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.4rem;
        font-size: 2.5rem;
        color: var(--black);
        transition: var(--main-transition);
        svg {
            color: var(--green);
            transition: var(--main-transition);
        }
    } */
    /* &:hover,
    &:active,
    &.active:link,
    &.active:visited {} */
`;

function Logo() {
    return (
        <>
            <StyledLogo to="/home" className="nav-logo">
                <h2>Mazen</h2>
            </StyledLogo>
            {/* 
            <a href="index.html" className="nav-logo">
                <h2>Mazen</h2>
            </a> */}
        </>
    );
}

export default Logo;
