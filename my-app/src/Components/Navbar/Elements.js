import styled from "styled-components";
import { NavLink as Link} from "react-router-dom";

export const Nav = styled.nav `
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    `;

export const NavLink = styled(Link)`
    color: #20bfd0;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    text-decoration: none;
    `;

export const NavMenu = styled.div `
    display: flex;
    align-items: center;
    margin-right: -24px;
    `;