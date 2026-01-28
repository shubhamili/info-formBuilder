import { useEffect } from "react";
import { api } from "../utils/axios"
import { useFormStore } from "../store/form.store";

const FormList = () => {


    const { forms, setForms } = useFormStore()

    const fetchData = async () => {
        const response = await api.get('/form/getAll');
        console.log(response.data);
        if (response.status === 200) {
            setForms(response.data.data)
        }

    }




    useEffect(() => {
        fetchData()
    }, [])



    return (
        <>

            {
                forms.map((form) => {
                    return (
                        <div key={form._id}>{form.name}</div>
                    )
                })
            }



        </>
    )
}

export default FormList