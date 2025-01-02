import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.jpg'; // Remplacez par le chemin réel du logo

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #3f51b5;
  font-size: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Content = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  text-align: center;
`;

const FooterLogo = styled.img`
  width: 70px;
  height: 70px;
  margin-top: 1rem;
`;

function Home() {
  return (
    <HomeContainer>
      <Title>
        <Logo src={logo} alt="Logo du club" />
        Bienvenue sur mathosphere
      </Title>
      <Content>
        <p>
          Notre club est dédié à l'exploration et à l'apprentissage des mathématiques. 
          Nous organisons des défis quotidiens, des compétitions et fournissons des 
          ressources pour tous les niveaux.
        </p>
        <p>
          Explorez notre site pour découvrir nos activités, participer à nos défis 
          et accéder à nos ressources pédagogiques.
        </p>
        <FooterLogo src={logo} alt="Logo du club" />
      </Content>
    </HomeContainer>
  );
}

export default Home;
