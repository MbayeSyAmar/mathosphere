import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { getDocuments } from '../services/firebaseService';

const ExerciseSeriesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #3f51b5;
`;

const ExerciseList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ExerciseItem = styled.li`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const ExerciseLink = styled(Link)`
  text-decoration: none;
  color: #3f51b5;
  font-weight: bold;
`;

function ExerciseSeries() {
  const { level } = useParams();
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      const data = await getDocuments(level);
      setDocuments(data);
    };
    fetchDocuments();
  }, [level]);

  return (
    <ExerciseSeriesContainer>
      <Title>Séries d'exercices - {level}</Title>
      <ExerciseList>
        {documents.map((doc, index) => (
          <ExerciseItem key={index}>
            <ExerciseLink to={`/pdf-viewer?url=${encodeURIComponent(doc.pdfUrl)}&title=${encodeURIComponent(doc.title)}`}>
              {doc.title}
            </ExerciseLink>
          </ExerciseItem>
        ))}
      </ExerciseList>
    </ExerciseSeriesContainer>
  );
}

export default ExerciseSeries;

