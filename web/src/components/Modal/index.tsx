import * as React from "react";
import "./styles.sass";
interface IProps {
  children: React.ReactNode;
}

function Modal({ children }: IProps) {
  return (
    
      <div className="modal">
           {children}
      </div>
    
  );
}

export default Modal;
