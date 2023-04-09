import React from 'react';

interface TextContentProps {
  title: string;
  content?: string;
  navItems?: {
    title: string;
    link?: string;
  };
}

const TextContent: React.FC<TextContentProps> = (props: TextContentProps) => {
  return (
    <>
      <h3>{props.title}</h3>
    </>
  );
};

export default TextContent;
