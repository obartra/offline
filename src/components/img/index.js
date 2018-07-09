// @flow
import * as React from "react";
import { asGrid, Col } from "gymnast";
import { loadImage } from "./img.logic";

const ImgGrid = asGrid("img");

type Props = {
  alt?: string,
  src: string
};

type State = {
  img: Image | void
};

export default class Img extends React.Component<Props, State> {
  static defaultProps = { alt: undefined };

  constructor(props) {
    super(props);
    loadImage(props.src).then(this.setImage);
  }

  state = { img: null };

  setImage = (img: Image) => this.setState(() => ({ img }));

  render() {
    const { src, alt, ...props } = this.props;
    const { img } = this.state;

    if (!img) {
      return null;
    }

    return (
      <Col {...props} align="center">
        <ImgGrid
          src={src}
          alt={alt}
          style={{ maxWidth: img.width, maxHeight: img.height }}
          justify="center"
        />
      </Col>
    );
  }
}
