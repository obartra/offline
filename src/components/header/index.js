// @flow
import * as React from "react";
import { Root, Col } from "gymnast";
import { ListLink, HeaderContainer } from "./components";
import styles from "./header.css";

type Props = {
  pages: Array<{ path: string, title: string }>
};

export default function Header({ pages }: Props) {
  return (
    <HeaderContainer className={styles.header}>
      <Root>
        <Col marginBottom={0} align="center">
          {pages.map(({ path, title }) => (
            <ListLink size="2" key={path} path={path} title={title} />
          ))}
        </Col>
      </Root>
    </HeaderContainer>
  );
}
