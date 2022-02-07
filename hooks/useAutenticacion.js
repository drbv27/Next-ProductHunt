import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

function useAutenticacion() {
  const [usuarioAutenticado, guardarUsuarioAutenticado] = useState(null);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        guardarUsuarioAutenticado(usuario);
      } else {
        guardarUsuarioAutenticado(null);
      }
    });
    return () => unsuscribe();
  }, []);
  return usuarioAutenticado;
}

export default useAutenticacion;
