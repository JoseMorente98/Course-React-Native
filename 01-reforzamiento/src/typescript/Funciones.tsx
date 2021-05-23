export const Funciones = () => {

    const sumar = (a:number,b:number):number => {
        return a + b;
    }

    return (
        <>
            <h3>Funciones</h3>
            <p>El resultado es {sumar(58,18)}</p>
        </>
    )
}
