import { useForm } from 'react-hook-form'


function FormularioReactHookFormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    function OnSubmit({name, lastName, email}) {

        console.log(`El valor de name es: ${name}`)
        console.log(`El valor de last name es: ${lastName}`)
        console.log(`El valor de email es: ${email}`)

    }

    return (
        <div className="cajita">
            <h2>Formulario ReactHookFormValidation</h2>
            <form onSubmit={handleSubmit(OnSubmit)}>
                { errors.name && <p className='error'>{errors.name.message}</p> }
                Name: <input {...register('name', { required: "El nombre es requerido"})} /><br />
                { errors.lastName && <p className='error'>{errors.lastName.message}</p> }
                Last Name: <input {...register('lastName', { required: "El apellido es requerido"})} /><br />
                { errors.email && <p className='error'>{errors.email.message}</p> }
                Email <input {...register('email', {
                    required: "El email es obligatorio",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Formato inválido"
                    }
                } )} /><br />
                { errors.phone && <p className='error'>{errors.phone.message}</p> }
                Phone: <input 
                    {...register('phone', {
                    required: "El telefono es obligatorio",
                    pattern: {
                        value: /^\+52 \(\d{3}\) \d{3} \d{4}$/,
                        message: "Formato inválido"
                    } 
                } )} />
                <input type='submit' value='enviar' />
            </form>
        </div>
    )
}

export default FormularioReactHookFormValidation