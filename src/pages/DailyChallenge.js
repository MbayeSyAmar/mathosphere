import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getDailyChallenge } from '../services/firebaseService';
import { FaPuzzlePiece } from 'react-icons/fa';

const ChallengeContainer = styled.div`
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
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Icon = styled(FaPuzzlePiece)`
  color: #ffcc00;
  font-size: 2rem;
`;

const ChallengeCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ChallengeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProblemTitle = styled.h3`
  color: #3f51b5;
  margin-top: 1.5rem;
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #3f51b5;
`;

function DailyChallenge() {
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      const data = await getDailyChallenge();
      setChallenge(data);
    };
    fetchChallenge();
  }, []);

  if (!challenge) {
    return <Loading>Chargement...</Loading>;
  }

  return (
    <ChallengeContainer>
      <Title>
        <Icon />
        Défi du Jour
      </Title>
      <ChallengeCard>
        <h2>{challenge.title}</h2>
        <p>{challenge.description}</p>
        {challenge.imageUrl && <ChallengeImage src={challenge.imageUrl} alt="Défi du jour" />}
        <ProblemTitle>Problème :</ProblemTitle>
        <p>{challenge.problem}</p>
      </ChallengeCard>
    </ChallengeContainer>
  );
}

export default DailyChallenge;
