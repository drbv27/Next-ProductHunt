import React from "react";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import styles from "../styles/Home.module.css";
import { Formulario, Campo, InputSubmit } from "../components/ui/Formulario";

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearCuenta from "../validacion/validarCrearCuenta";

export default function CrearCuenta() {
  const STATE_INICIAL = {
    nombre: "",
    email: "",
    password: "",
  };

  const { valores, errores, submitForm, handleSubmit, handleChange } =
    useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  function crearCuenta() {
    console.log("Creando Cuenta...");
  }

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
            `}
          >
            Crear Cuenta
          </h1>
          <Formulario>
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                name="nombre"
              />
            </Campo>
            <Campo>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Tu email"
                name="email"
              />
            </Campo>
            <Campo>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Tu password"
                name="password"
              />
            </Campo>
            <InputSubmit type="submit" value="Crear Cuenta" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
}
