// src/components/Alert.tsx
import React, { useState } from 'react';

interface AlertProps {
  message: string;
}

const Alert: React.FC<AlertProps> = ({ message }) => {
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  if (!showAlert) {
    return null;
  }

  return (
    <div className="text-center py-4 bg-yellow-200 flex justify-center items-center">
      <p className="text-xl font-semibold flex-grow">{message}</p>
      <button onClick={handleCloseAlert} className="px-4 py-2 font-bold">
        &times;
      </button>
    </div>
  );
};

export default Alert;
