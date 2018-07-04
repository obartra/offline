// @flow
import * as React from "react";
import { Root } from "gymnast";
import { FooterContainer } from "./components";
import H1 from "../h1";
import styles from "./footer.css";

export default function Footer() {
  return (
    <FooterContainer className={styles.footer}>
      <Root>
        <H1 margin={0}>Footer</H1>
      </Root>
    </FooterContainer>
  );
}
