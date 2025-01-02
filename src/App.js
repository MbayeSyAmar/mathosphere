import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DailyChallenge from './pages/DailyChallenge';
import MathematicianOfMonth from './pages/MathematicianOfMonth';
import Information from './pages/Information';
import Documentation from './pages/Documentation';
import ExerciseSeries from './pages/ExerciseSeries';
import PdfViewer from './pages/PdfViewer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/daily-challenge" element={<DailyChallenge />} />
            <Route path="/mathematician" element={<MathematicianOfMonth />} />
            <Route path="/information" element={<Information />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/exercise-series/:level" element={<ExerciseSeries />} />
            <Route path="/pdf-viewer" element={<PdfViewer />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;

