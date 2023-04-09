import React from 'react';

interface CardProps {
  title: string;
  description: string;
  author: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  author,
}: CardProps) => {
  return (
    <div className="max-w-xs rounded-lg bg-primary p-4 border-opacity-40 border border-fluorescent">
      <h1 className="text-white">{title}</h1>
      <p className="text-white">{description}</p>
      <span className="text-white inline-block text-center">{author}</span>
    </div>
  );
};

export default Card;
