import React, { createContext } from "react";

// Crea el contexto
const MiContexto = createContext();

// Establece el valor del contexto
const valorDelContexto = "Hola desde el contexto";

export { MiContexto, valorDelContexto };
