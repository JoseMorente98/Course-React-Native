import { useForm } from '../hooks/useForm';

export const Formularios = () => {

    const {formulario, onChange} = useForm({
        email: 'josemorenteg98@gmail.com',
        password: 'foxylabs'
    });
    return (
        <>
            <h3>Formulario</h3>
            <input type="text"  
            className="form-control" 
            placeholder="Correo"
            value={formulario.email}
            onChange={({target}) => onChange(target.value, 'email')}/>

            <input type="text"  
            className="form-control mt-2 mb-2" 
            placeholder="Contraseña"
            value={formulario.password}
            onChange={({target}) => onChange(target.value, 'password')}/>

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}
