import React from "react";

class Bang extends React.Component {
  static defaultProps = {
    s1: "🐈",
    s2: "🐯",
    s3: "🐈",
  };

  render() {
    const { s1, s2, s3 } = this.props;

    const win = s1 === s2 && s2 === s3;

    //   console.log(Bang.defaultProps);
    console.log(this.props);

    return (
      <div>
        <span>
          {s1}
          {s2}
          {s3}
        </span>
        <h3 className={win ? 'win' : 'loose'}>
            {win ? "You win" : "You loose"}</h3>
      </div>
    );
  }
}

export default Bang;
