import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/interfaces';

export const Usuarios = () => {

    const {arrayUsuarios, paginaSiguiente, paginaAnterior} = useUsuarios();

    const renderItem = (usuario:Usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img style={{width:50, borderRadius:100}} src={usuario.avatar} alt={usuario.first_name} />
                </td>
                <td>{usuario.first_name}</td>
                <td>{usuario.email}</td>
            </tr>
        );
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrayUsuarios.map(usuario => renderItem(usuario))
                    }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={paginaAnterior}>
                Anterior
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={paginaSiguiente}>
                Siguiente
            </button>
        </>
    )
}
