import React from "react";

interface SizeContainer {
  children: React.ReactNode;
  // children é uma propriedade especial que permite que um componente tenha elementos filhos
}

export const Container: React.FC<SizeContainer> = ({ children }) => {
  return (
    <div className="w-full max-w-[1128px] mx-auto bg-blue-500 py-2 px-4">
      {children}
    </div>
  );
};
