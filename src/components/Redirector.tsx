import { FC } from 'react';
import { useParams } from 'react-router';

const Redirector: FC = () => {
  const { id } = useParams();

  return (
    <div>{id}</div>
  );
};

export default Redirector;