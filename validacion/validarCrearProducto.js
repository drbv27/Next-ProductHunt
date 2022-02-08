export default function validarCrearCuenta(valores) {
  let errores = {};
  //validar el nombre del usuario
  if (!valores.nombre) {
    errores.nombre = "El Nombre es obligatorio";
  }

  //validar empresa
  if (!valores.empresa) {
    errores.empresa = "Empresa es obligatorio";
  }

  //validar la url
  if (!valores.url) {
    errores.url = "la URL del producto es obligatorio";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "la URL del producto no es valida";
  }

  //validar descripcion
  if (!valores.descripcion) {
    errores.descripcion = "la descripcion es obligatoria";
  }

  return errores;
}
