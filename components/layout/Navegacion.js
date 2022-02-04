import React from "react";
import Link from "next/link";

const Navegacion = () => {
  return (
    <nav>
      <Link href="/">Inicio</Link>
      <Link href="/">populares</Link>
      <Link href="/">Nuevo producto</Link>
    </nav>
  );
};

export default Navegacion;
