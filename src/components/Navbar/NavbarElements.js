import styled from 'styled-components'
import { NavLink as NLink, Link } from 'react-router-dom'

export const Nav = styled.nav`
    position: fixed;
    top: 0px;
    background-color: rgb(27, 28, 28);
    width: 100vw;
    height: 80px;
    display: flex;
    padding: 0.5rem calc((100vm - 1000px) / 2);
    z-index: 100;
`

export const HomeShortcut = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
`

export const NavLink = styled(NLink)`
    transition: color .2s ease-in-out;
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 50%;

    &:hover {
        transition: color .2s ease-in-out;
        color: rgb(6, 49, 104);
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media ( max-width: 768px ) {
        display: none;
    }
`