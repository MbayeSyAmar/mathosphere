import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

const PdfViewerContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #3f51b5;
`;

function PdfViewer() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pdfUrl = searchParams.get('url');
  const title = searchParams.get('title');

  return (
    <PdfViewerContainer>
      <Title>{title}</Title>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div style={{ height: '750px' }}>
          <Viewer fileUrl={pdfUrl} />
        </div>
      </Worker>
    </PdfViewerContainer>
  );
}

export default PdfViewer;

