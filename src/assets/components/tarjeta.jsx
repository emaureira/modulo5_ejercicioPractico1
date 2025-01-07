import React from 'react';

const Tarjeta = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No hay datos para mostrar.</p>;
    }

    return (
        <div className='d-flex flex-row justify-content-around flex-wrap gap-3 '>
                {data.map((item, index) => (
                    <div className='card border-light text-bg-light' key={index}>
                        <div className="card-header"><h5 className="card-title">{item.nombre} {item.apellido}</h5></div>
                        <div className="card-body">
                            
                            <p className='card-text'>Especialidad: {item.especialidad}</p>
                            <p className='card-text'>Años Experiencia: {item.añosExperiencia}</p>
                            <p className='text-muted'>Tipo de Atención: {item.atencion}</p>
                        </div>
                    </div>
                   
                ))}
        </div>
    );
};

export default Tarjeta;