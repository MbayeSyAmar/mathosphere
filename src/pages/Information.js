import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getInformation } from '../services/firebaseService';
import { FaInfoCircle, FaCalendarAlt } from 'react-icons/fa';

const InformationContainer = styled.div`
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

const Icon = styled(FaInfoCircle)`
  color: #ffcc00;
  font-size: 2.5rem;
`;

const InfoCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  color: #3f51b5;
  margin-bottom: 0.5rem;
`;

const InfoDate = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #757575;
  margin-bottom: 1rem;
`;

const DateIcon = styled(FaCalendarAlt)`
  color: #3f51b5;
`;

const InfoDescription = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #3f51b5;
`;

function Information() {
  const [informationList, setInformationList] = useState([]);

  useEffect(() => {
    const fetchInformation = async () => {
      const data = await getInformation();
      setInformationList(data);
    };
    fetchInformation();
  }, []);

  if (informationList.length === 0) {
    return <Loading>Chargement des informations...</Loading>;
  }

  return (
    <InformationContainer>
      <Title>
        <Icon />
        Informations
      </Title>
      {informationList.map((info, index) => (
        <InfoCard key={index}>
          <InfoTitle>{info.title}</InfoTitle>
          <InfoDate>
            <DateIcon />
            {info.date}
          </InfoDate>
          <InfoDescription>{info.description}</InfoDescription>
        </InfoCard>
      ))}
    </InformationContainer>
  );
}

export default Information;
