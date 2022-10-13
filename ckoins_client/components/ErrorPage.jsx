import React from 'react';

function ErrorComponent({ error }) {
  return <div>{JSON.stringify(error)}</div>;
}

export default ErrorComponent;
