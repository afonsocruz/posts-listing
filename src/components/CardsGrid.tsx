import React from 'react';

interface CardsGridProps {
  children: React.ReactNode;
}

const CardsGrid: React.FC<CardsGridProps> = (props: CardsGridProps) => {
  return (
    <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
      {props.children}
    </div>
  );
};

export default CardsGrid;
