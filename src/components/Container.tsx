import React from 'react';

interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <div className="max-w-screen-xl my-0 mx-auto bg-inherit min-h-screen xs:py-10 xs:px-5 xl:px-0">
      {props.children}
    </div>
  );
};

export default Container;
