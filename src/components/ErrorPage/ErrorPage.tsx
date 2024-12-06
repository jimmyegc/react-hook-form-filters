import React from "react";
import './ErrorPage.css'; // Asegúrate de crear estilos apropiados en este archivo

const ErrorPage = ({ onRetry, supportLink }) => {
  return (
    <div className="error-page">
      <img 
        src="./b360-error.webp" 
        alt="Error illustration" 
        className="error-image"
      />
      <h1>Oops! Something went wrong.</h1>
      <p>
        We encountered an unexpected error. Please try again or contact our support team for assistance.
      </p>
      <div className="actions">
        <button className="retry-button" onClick={onRetry}>
          Try Again
        </button>
        <a href={supportLink} className="support-link">
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
