import React from 'react';

interface ResetButtonProps {
  onReset: () => void;
  className?: string;
}

export const ResetButton: React.FC<ResetButtonProps> = ({ onReset, className = '' }) => {
  return (
    <button
      onClick={onReset}
      className={`text-sm text-electric-blue hover:text-accent-orange 
        transition-colors ${className}`}
    >
      Reset Attributes
    </button>
  );
};