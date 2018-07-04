// @flow
import * as React from "react";
import { Link } from "react-router-dom";
import { Grid } from "gymnast";
import styles from "./listLink.css";

type Props = {
  path: string,
  title: string
};

export default function ListLink({ path, title, ...props }: Props) {
  return (
    <Grid className={styles.listLink} padding="M 0" {...props}>
      <Link to={path}>{title}</Link>
    </Grid>
  );
}
