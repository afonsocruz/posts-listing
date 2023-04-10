import React from 'react';

interface CardProps {
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ title, body }: CardProps) => {
  return (
    <div className="max-w-xs rounded-lg bg-primary p-4 border-opacity-40 border border-fluorescent h-48 overflow-hidden">
      <h1 className="text-fluorescent mb-2 font-bold">{title}</h1>
      <p className="text-white text-sm">{body}</p>
    </div>
  );
};

export default Card;
