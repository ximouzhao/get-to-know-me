import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//import { coy } from "react-syntax-highlighter/dist/styles/prism";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles/hljs';


class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null,
    value: ''
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={docco}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;