import { useForm, type SubmitHandler, } from "react-hook-form"

type Inputs = {
    example: string
    exampleRequired: string
}

export const CreateForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    console.log(watch("example")) // watch input value by passing the name of it

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />


                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}


                <input type="submit" />
            </form>
        </div>
    )
}


