import React from 'react'
import { Container } from "reactstrap";


interface Props {
    className: string,
    children: any
}

export const BasePage: React.FC<Props> = props => {
  const { className = "", children } = props;
  return (
    <div className={`base-page ${className}`}>
      <Container>
        {children}
      </Container>
    </div>
  )
}

export default BasePage;