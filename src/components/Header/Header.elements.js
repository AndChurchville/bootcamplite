import styled from 'styled-components';
import {Container} from '../../globalStyles';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
color: white;
background-color: #2a6fdb;
height: 80px;
display:flex;
justify-content:center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: -2;
`;

export const NavContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;
export const NavLogo = styled(Link)`
color: #fff;
cursor: pointer;
justify-self: flex-start;
text-decoration:none;
display: flex;
align-items: center;
font-size: 2rem;
`;