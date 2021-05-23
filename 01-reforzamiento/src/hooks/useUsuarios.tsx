import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/interfaces";

export const useUsuarios = () => {
    const [arrayUsuarios, setArrayUsuarios] = useState<Usuario[]>([])

    const refPagina = useRef(1)

    useEffect(() => {
        getAllUsuarios();
    }, []);

    const getAllUsuarios = async() => {
        reqResApi.get<ReqResListado>('/users', {params: {page: refPagina.current}})
        .then((res) => {
            if (res.data.data.length > 0) {
                setArrayUsuarios(res.data.data);
            } else {
                refPagina.current--;
                console.log('nel perro')
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    const paginaSiguiente = () => {
        refPagina.current++;
        getAllUsuarios();
    }

    const paginaAnterior = () => {
        if(refPagina.current > 0) {
            refPagina.current--;
            getAllUsuarios();
        }
    }

    return {
        arrayUsuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
