import { FC } from 'react';

type HelloWorldProps = {
 text: string;
};

const HelloWorld = ({type}) => { /* ... */}

export const HelloWorld: FC<HelloWorldProps> = ({ text }) => (
 
 <div
 className="titlemain"
  style={{
    display: type === "landscape" ? "flex" : "block"
  }}
 >
  <div>{text}</div>
 </div>
);

