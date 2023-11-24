import React, { useState, useEffect } from 'react';
import Navegacion from "../Navegacion/Navegacion";
import './Foro.css'; // Importa el archivo CSS para los estilos
import Footer from '../Footer/Footer';
import BotonFlotante from "../BotonFlotante/BotonFlotante";

const Foro = () => {
  const [threads, setThreads] = useState([]);

  // Cargar hilos desde el localStorage al cargar el componente
  useEffect(() => {
    const storedThreads = localStorage.getItem('forumThreads');
    if (storedThreads) {
      setThreads(JSON.parse(storedThreads));
    }
  }, []);

  const handleDelete = (index) => {
    const updatedThreads = threads.filter((_, i) => i !== index);
    setThreads(updatedThreads);
    localStorage.setItem('forumThreads', JSON.stringify(updatedThreads));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.threadTitle.value;
    const content = event.target.threadContent.value;

    if (title.trim() !== '' && content.trim() !== '') {
      const newThread = {
        title,
        content,
      };

      setThreads([...threads, newThread]);

      // Guardar hilos en el localStorage
      localStorage.setItem('forumThreads', JSON.stringify([...threads, newThread]));

      // Limpiar el formulario
      event.target.threadTitle.value = '';
      event.target.threadContent.value = '';
    }
  };

  return (
    <>
        <Navegacion />
        <div className="forum-container">
          <main>
              <div className="forum">
                <h4 className='mt-5 mb-5'>Compartamos experiencias: </h4>
                <h3 className='mb-5'>¡Tu voz importa! Únete y comparte en el foro</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="threadTitle" placeholder="Título del hilo" style={{ width: '750px' }} required /><br />
                    <textarea name="threadContent" placeholder="Contenido del hilo" style={{ minHeight: '100px', maxHeight: '300px', width: '750px' }} required></textarea><br />
                    <button type="submit">Crear</button>
                </form>
                <hr />
                <h4>Comentarios</h4>
                <div id="threadList">
                    {threads.map((thread, index) => (
                    <div key={index} className="thread">
                        <h3>{thread.title}</h3>
                        <p>{thread.content}</p>
                        <button onClick={() => handleDelete(index)}>Eliminar</button>
                        <hr />
                    </div>
                    ))}
                </div>
              </div>
              <BotonFlotante />
          </main>
        </div>
        <Footer/>
    </>
  );
};

export default Foro;