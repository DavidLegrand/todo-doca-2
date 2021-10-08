import React from "react";
import { Spinner } from 'react-bootstrap'
const Loading = ({ loading }) => {
  return loading && <Spinner className='align-self-center my-5' animation="border" />;
};

export default Loading;
