import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaStar, FaInfoCircle, FaBook, FaPuzzlePiece, FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #3f51b5;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.8rem;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #3f51b5;
    width: 100%;
    padding: 1rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
    color: #ffcc00;
  }
`;

const MenuToggle = styled.div`
  display: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/mathosphere">
          <FaPuzzlePiece />
          Mathosphere
        </Logo>
        <MenuToggle onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
        <NavLinks isOpen={menuOpen}>
          <NavLink to="/mathosphere" onClick={() => setMenuOpen(false)}>
            <FaHome />
            Accueil
          </NavLink>
          <NavLink to="/daily-challenge" onClick={() => setMenuOpen(false)}>
            <FaStar />
            Défi du Jour
          </NavLink>
          <NavLink to="/mathematician" onClick={() => setMenuOpen(false)}>
            <FaPuzzlePiece />
            Mathématicien du Mois
          </NavLink>
          <NavLink to="/information" onClick={() => setMenuOpen(false)}>
            <FaInfoCircle />
            Informations
          </NavLink>
          <NavLink to="/documentation" onClick={() => setMenuOpen(false)}>
            <FaBook />
            Documentation
          </NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
