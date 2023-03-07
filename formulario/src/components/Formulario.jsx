import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5 bg-[#f4a261] '>
        <form>
            <label htmlFor="">Nombre</label>
            <input type="text" placeholder='Nombre' />
            <label htmlFor="">Correo</label>
            <input type="text" placeholder='Correo' />
            <label htmlFor="">Numero</label>
            <input type="text" placeholder='Numero' />
        </form>
    </div>
  )
}

export default Formulario