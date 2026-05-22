import { useEffect } from "react";

/**
 * Hook personalizado que se ejecuta DESPUÉS de cualquier render del componente
 * Utiliza useEffect sin dependencias para ejecutarse después de cada render
 */
export const useAfterRender = (mensaje = "Hook: Ejecutándose DESPUÉS del render") => {
  useEffect(() => {
    console.log(mensaje);
  });
  
  return null;
};
