// @flow
import * as React from "react";
import { asCol } from "gymnast";

const VideoCol = asCol("video");

type Props = {
  src: string,
  controls: boolean
};

export default function Video({ src, controls = true, ...props }: Props) {
  return (
    <VideoCol controls={controls} {...props}>
      <source src={src} type="video/mp4" />
      Your browser does not support HTML5 video.
    </VideoCol>
  );
}
