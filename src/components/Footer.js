import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #3f51b5;
  color: white;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterCopyright = styled.p`
  margin: 1rem 0 0;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterInfo>
        <h3>Club de Mathématiques</h3>
        <p>Un espace dédié à l'exploration et à l'apprentissage des mathématiques.</p>
      </FooterInfo>
      <FooterContact>
        <p>
          <FaPhoneAlt /> Téléphone : <a href="tel:+221777654321">+221 77 765 43 21</a>
        </p>
        <p>
          <FaEnvelope /> Email : <a href="mailto:contact@clubmath.com">contact@clubmath.com</a>
        </p>
        <p>
          <FaMapMarkerAlt /> Adresse : Médina, Dakar, Sénégal
        </p>
      </FooterContact>
      <FooterCopyright>
        &copy; {new Date().getFullYear()} Club de Mathématiques. Tous droits réservés.
      </FooterCopyright>
    </FooterContainer>
  );
}

export default Footer;
