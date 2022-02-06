export default function validarCrearCuenta(valores) {
  let errores = {};
  //validar el nombre del usuario
  if (!valores.nombre) {
    errores.nombre = "El Nombre es obligatorio";
  }

  //validar el email
  if (!valores.email) {
    errores.email = "El email es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email)) {
    errores.email = "Email no válido";
  }

  //validar password
  if (!valores.password) {
    errores.password = "La contraseña es obligatoria";
  } else if (valores.password < 6) {
    errores.password = "El password debe tener al menos 6 caracteres";
  }

  return errores;
}
