import React from 'react'
import Person from './Props04'

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({children}) => (
    <div className='card'>
        {children}
    </div>
);

export default function profile() {
  return (
    <Card>
        <Person 
            person={{
                name: 'Human1',
                imageId: 'Yfe0qp2'
            }}
            size={100}
        />
    </Card>
  )
}
