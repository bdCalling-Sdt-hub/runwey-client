import React from 'react'
import { useParams } from 'react-router-dom';

const NewPassword = () => {
  let { email } = useParams();
  return (
    <div>NewPassword</div>
  )
}

export default NewPassword