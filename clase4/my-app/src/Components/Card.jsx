import React from 'react';

function Card({title, footer, children}){
    return (
        <div className="card">
            {title? <h1> {title}</h1> : undefined }
            <div className='contenido'>{children}</div>
            {footer? <div className='footer'>{footer}</div> : undefined}
        </div>
    )
}

export default Card