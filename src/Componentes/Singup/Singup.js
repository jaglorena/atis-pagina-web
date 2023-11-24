import React, { useRef, useEffect } from 'react';
import Navegacion from '../Navegacion/Navegacion';
import Footer from "../Footer/Footer";

const Signup = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const resizeIframe = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = `${iframeRef.current.contentWindow.document.body.scrollHeight}px`;
      }
    };

    window.addEventListener('resize', resizeIframe);
    resizeIframe(); // Ajustar el tamaño inicialmente

    return () => {
      window.removeEventListener('resize', resizeIframe);
    };
  }, []);

  return (
    <>
      <Navegacion />
      <iframe
        ref={iframeRef}
        title="Contenido externo"
        src="/register.html"
        style={{ width: '100%', height: '750px', border: 'none' }}
      />
      <Footer />
    </>
  );
};

export default Signup;
