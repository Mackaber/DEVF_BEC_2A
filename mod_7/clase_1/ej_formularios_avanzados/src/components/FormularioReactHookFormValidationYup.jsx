import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// Paso 1. Especificar el schema
const schema = yup.object({
    name: yup.string().required("El nombre es requerido"),
    lastName: yup.string().required("El apellido es requerido"),
    age: yup.number("La edad debe ser un número").positive().integer("La edad debe ser un número entero").min(0, "La edad es inválida"),
})


function FormularioReactHookFormYup() {
    // Paso 2. Instalar el resolver de yup: npm i @hookform/resolvers 

    // Paso 3. Especificarle a react-hook-form que use el resolver de yup 
    const { register, handleSubmit, formState: {errors} } = useForm({ resolver: yupResolver(schema) })

    function OnSubmit({name, lastName}) {
        console.log(`El valor de name es: ${name}`)
        console.log(`El valor de last name es: ${lastName}`)
    }

    return (
        <div className="cajita">
            <h2>Formulario ReactHookForm</h2>
            <form onSubmit={handleSubmit(OnSubmit)}>
                { errors.name && <p className='error'>{errors.name.message}</p> }
                Name: <input {...register('name')} /><br />
                { errors.lastName && <p className='error'>{errors.lastName.message}</p> }
                Last Name: <input {...register('lastName')} /><br />
                { errors.age && <p className='error'>{errors.age.message}</p> }
                Age: <input {...register('age')} /><br />
                { errors.email && <p className='error'>{errors.email.message}</p> }
                Email: <input {...register('email')} /><br />
                <input type='submit' value='enviar' />
            </form>
        </div>
    )

}

export default FormularioReactHookFormYup