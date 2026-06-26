import { useForm } from 'react-hook-form'

function FormularioReactHookForm() {
    const { register, handleSubmit } = useForm()

    function OnSubmit({name, lastName}) {
        console.log(`El valor de name es: ${name}`)
        console.log(`El valor de last name es: ${lastName}`)
    }

    return (
        <div className="cajita">
            <h2>Formulario ReactHookForm</h2>
            <form onSubmit={handleSubmit(OnSubmit)}>
                Name: <input {...register('name')} /><br />
                Last Name: <input {...register('lastName')} /><br />
                <input type='submit' value='enviar' />
            </form>
        </div>
    )

}

export default FormularioReactHookForm