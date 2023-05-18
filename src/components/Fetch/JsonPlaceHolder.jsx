import {useEffect, useState} from 'react'

const JsonPlaceHolder = () => {
    const [usuario, setUsuario] = useState([]);

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(data => setUsuario(data))
        .catch(error => console.log(error))

    }, [])

  return (
    <div>
        <h2>Usuarios JsonPlaceHolder:</h2>
        {
            usuario.map(usuarios =>{
                return(
                    <div key={usuarios.id}>
                        <p>Nombre: {usuarios.name}</p>
                        <p>Email: {usuarios.email}</p>
                    </div>

                )
            })
        }
    </div>
  )
}

export default JsonPlaceHolder