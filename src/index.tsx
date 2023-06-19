import React from 'react';
import './style.css';

interface MyComponentProps {
  name: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ name } : MyComponentProps) => {

  // const [Selection, setSelect] = useState("hello");
  // console.log(Selection);
  
  return <div className=' bg-blue-700'>Hello, {name}!</div>;
};
