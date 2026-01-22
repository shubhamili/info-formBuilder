import { useEffect } from "react";
import { api } from "../utils/axios"

const FormList = () => {




    const fetchData = async () => {
        const response = await api.get('/form/getAll');
        console.log(response);

    }




    useEffect(() => {
        fetchData()
    }, [])



    return (
        <>





        </>
    )
}

export default FormList