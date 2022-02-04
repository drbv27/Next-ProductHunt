import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import styles from "../styles/Home.module.css";

const Heading = styled.h1`
  color: green;
`;

export default function Home() {
  return (
    <div>
      <Heading>Inicio</Heading>
    </div>
  );
}
