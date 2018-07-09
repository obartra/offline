// @flow
import * as React from "react";
import { Grid } from "gymnast";
import { Img, H1, Video } from "../components";
/**
 * Loading files through webpack has multiple purposes. It ensures that:
 *
 * - Assets can be optimized
 * - Assets have a cache busting hash as part of the url
 * - Assets can be processed by the offline plugin
 */
import apolloLogo from "../../assets/apollo-logo.png";
import routerLogo from "../../assets/reactrouter-logo.png";
import webpackLogo from "../../assets/webpack-logo.svg";
import videoSrc from "../../assets/video.mp4";

export default function Home() {
  return (
    <Grid justify="center">
      <H1>Home</H1>
      <Img size={4} src={apolloLogo} alt="Apollo" />
      <Img size={4} src={routerLogo} alt="React Router" />
      <Img size={4} src={webpackLogo} alt="Webpack" />
      <Video size={4} src={videoSrc} />
    </Grid>
  );
}
