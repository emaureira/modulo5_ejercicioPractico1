
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Tarjeta from './assets/components/tarjeta';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/data.json');
      setData(response.data);
    } catch (err) {
      let errorMessage = 'Hubo un error al obtener los datos. Por favor, intenta nuevamente.';

      if (err.response) {
        if (err.response.status === 404) {
            errorMessage = 'No se pudo encontrar el archivo data.json. Verifica que el archivo exista y la ruta sea correcta.';
        }
        console.error('Error en la respuesta:', err.response);
        
      } else if (err.request) {
          errorMessage = 'No se pudo conectar al servidor. Verifica tu conexión de internet.';
           console.error('Error en la request:', err.request);
      }else {
         console.error('Error al hacer request:', err);
      }
        setError(errorMessage);
    } finally {
      setLoading(false);
    }
  },[]) ;

  useEffect(() => {
    fetchData();
  }, [fetchData]);



  return (
    <div className="container mt-4">
      <h1>Lista de Médicos</h1>
      {loading && <p>Cargando datos...</p>}
      {error && (
        <div>
          <p className="text-danger">{error}</p>
          <button className="btn btn-primary" onClick={handleRetry}>Reintentar</button>
        </div>
      )}
      {!loading && !error && <Tarjeta data={data} />}
      <button className="btn btn-secondary mt-3" onClick={fetchData}>Recargar Lista</button>
    </div>
  );
}

export default App;