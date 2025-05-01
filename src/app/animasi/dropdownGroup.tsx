import React from 'react';

interface DropdownGroupProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  spacing?: 'tight' | 'normal' | 'wide';
  className?: string;
}

const DropdownGroup: React.FC<DropdownGroupProps> = ({
  children,
  direction = 'row',
  spacing = 'normal',
  className = '',
}) => {
  const spacingClasses = {
    tight: 'gap-1.5',
    normal: 'gap-2.5',
    wide: 'gap-4',
  };

  const directionClasses = {
    row: 'flex-row',
    column: 'flex-col',
  };

  return (
    <div 
      className={`flex ${directionClasses[direction]} ${spacingClasses[spacing]} ${className}`}
    >
      {children}
    </div>
  );
};

export default DropdownGroup;