import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import CryptoJS from 'crypto-js';

const Redirector: FC = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id && id.length > 0) {
      const url = CryptoJS.AES.decrypt(id, process.env.REACT_APP_PRESSPOOL_AES_KEY as string).toString(CryptoJS.enc.Utf8);
      window.open(url, '_self');
    }
  }, [id]);

  return (
    <div></div>
  );
};

export default Redirector;