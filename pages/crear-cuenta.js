import React from "react";
import Layout from "../components/layout/Layout";
import Image from "next/image";
import styled from "@emotion/styled";
import styles from "../styles/Home.module.css";

export default function CrearCuenta() {
  return (
    <div>
      <Layout>
        <>
          <h1>Crear Cuenta</h1>
          <form>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre"
                name="nombre"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Tu email"
                name="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Tu password"
                name="password"
              />
            </div>
            <input type="submit" value="Crear Cuenta" />
          </form>
        </>
      </Layout>
    </div>
  );
}
