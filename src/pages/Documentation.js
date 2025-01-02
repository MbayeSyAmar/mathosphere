import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../services/firebaseService';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { FaBook, FaGraduationCap } from 'react-icons/fa';

const DocumentationContainer = styled.div`
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

const Icon = styled(FaBook)`
  color: #ffcc00;
  font-size: 2.5rem;
`;

const LevelContainer = styled.div`
  margin-bottom: 2rem;
`;

const LevelTitle = styled.h2`
  color: #3f51b5;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const GraduationIcon = styled(FaGraduationCap)`
  color: #3f51b5;
  font-size: 1.5rem;
`;

const DocumentList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const DocumentCard = styled(Link)`
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
  text-decoration: none;
  color: #3f51b5;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #757575;
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #3f51b5;
`;

function Documentation() {
  const [documentsByLevel, setDocumentsByLevel] = useState({});

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const levels = ['Seconde', 'Première', 'Terminale'];
        const levelDocuments = {};

        // Fetch documents for each level
        for (const level of levels) {
          const q = query(collection(db, 'documents'), where('level', '==', level));
          const querySnapshot = await getDocs(q);
          levelDocuments[level] = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
        }

        setDocumentsByLevel(levelDocuments);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  if (Object.keys(documentsByLevel).length === 0) {
    return <Loading>Chargement des documents...</Loading>;
  }

  return (
    <DocumentationContainer>
      <Title>
        <Icon />
        Documentation
      </Title>
      {Object.entries(documentsByLevel).map(([level, documents]) => (
        <LevelContainer key={level}>
          <LevelTitle>
            <GraduationIcon />
            {level}
          </LevelTitle>
          <DocumentList>
            {documents.map(doc => (
              <DocumentCard key={doc.id} to={doc.pdfUrl} target="_blank" rel="noopener noreferrer">
                <h3>{doc.title}</h3>
                <p>{doc.description}</p>
              </DocumentCard>
            ))}
          </DocumentList>
        </LevelContainer>
      ))}
    </DocumentationContainer>
  );
}

export default Documentation;
