import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMathematicianOfMonth } from '../services/firebaseService';
import { FaCrown, FaUserGraduate } from 'react-icons/fa';

const MathematicianContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h1`
  color: #3f51b5;
  font-size: 2.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Icon = styled(FaCrown)`
  color: #ffcc00;
  font-size: 2.5rem;
`;

const MathematicianCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const MathematicianImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin-top: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  color: #3f51b5;
  margin-top: 1.5rem;
`;

const ContributionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 0.5rem;
`;

const ContributionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const ContributionIcon = styled(FaUserGraduate)`
  color: #3f51b5;
  font-size: 1.2rem;
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #3f51b5;
`;

function MathematicianOfMonth() {
  const [mathematician, setMathematician] = useState(null);

  useEffect(() => {
    const fetchMathematician = async () => {
      const data = await getMathematicianOfMonth();
      setMathematician(data);
    };
    fetchMathematician();
  }, []);

  if (!mathematician) {
    return <Loading>Chargement...</Loading>;
  }

  return (
    <MathematicianContainer>
      <Title>
        <Icon />
        Mathématicien du Mois
      </Title>
      <MathematicianCard>
        <h2>{mathematician.name}</h2>
        <p><strong>Période :</strong> {mathematician.period}</p>
        <MathematicianImage src={mathematician.image} alt={mathematician.name} />
        <SectionTitle>Biographie :</SectionTitle>
        <p>{mathematician.biography}</p>
        <SectionTitle>Contributions notables :</SectionTitle>
        <ContributionList>
          {mathematician.contributions.map((contribution, index) => (
            <ContributionItem key={index}>
              <ContributionIcon />
              {contribution}
            </ContributionItem>
          ))}
        </ContributionList>
      </MathematicianCard>
    </MathematicianContainer>
  );
}

export default MathematicianOfMonth;
