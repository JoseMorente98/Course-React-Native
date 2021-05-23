export const TiposBasicos = () => {

    const nombre: string | number = 'Rafael';
    const edad:number = 35;
    const estaActivo:boolean = true;
    const arrayHeroes:string[] = ['Naruto', 'Goku', 'Vegeta'];

    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre}, {edad}, {(estaActivo)?'1':'0'}
            <br />
            {arrayHeroes.join(',')}
        </>
    )
}
