// @flow
import * as React from "react";

type Props = {
  load: () => Promise<React.Element>,
  loadingComponent?: React.Element,
  errorComponent?: React.Element,
  children: React.Element => React.Element
};
type State = {
  component: React.Element
};

export default class DynamicImport extends React.Component<Props, State> {
  static defaultProps = {
    loadingComponent: () => null,
    errorComponent: () => <p>Oops</p>
  };

  state = { component: undefined };

  async componentDidMount() {
    const { load, errorComponent } = this.props;

    try {
      const component = await load();

      this.setState(() => ({
        component: component.default ? component.default : component
      }));
    } catch (e) {
      this.setState(() => ({
        component: errorComponent
      }));
    }
  }

  render() {
    const { children, loadingComponent } = this.props;
    const { component = loadingComponent } = this.state;

    return children(component);
  }
}
