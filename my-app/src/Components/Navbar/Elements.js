import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"

export const NavLink = styled(Link)`
  color: #20bfd0;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  text-decoration: none;
  font-family: "Prompt", sans-serif;
`

export const NavMenuLeft = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`

export const NavMenuRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  position: absolute;
  right: 25%;
  top: 50%;
  transform: translate(50%, -50%);
  z-index: 5;
`
