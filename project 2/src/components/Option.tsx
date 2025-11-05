import React from 'react';
import { Option as OptionType } from '../types';

interface OptionProps {
  option: OptionType;
  isSelected: boolean;
  onClick: () => void;
}

const Option: React.FC<OptionProps> = ({ option, isSelected, onClick }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`option-card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
    >
      <p className="text-secondary-700 font-medium leading-relaxed">
        {option.text}
      </p>
    </div>
  );
};

export default Option;