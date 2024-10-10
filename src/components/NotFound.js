import React from 'react';
import { useNavigate} from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={handleClick}>Go back to home page</button>
    </div>
  );
};

export default NotFound;