/**
 * Hook personalizado que se ejecuta ANTES del render del componente
 * Se ejecuta durante el cuerpo del componente, antes de que React haga el return del JSX
 */
export const useBeforeRender = (mensaje = "Hook: Ejecutándose ANTES del render") => {
  console.log(mensaje);
  
  return null;
};
