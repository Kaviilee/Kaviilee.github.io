import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

export interface HightLightProps {
  language: string;
  value: any;
}

export interface CodeBlockProps {
  markdown: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ markdown, showLineNumbers }) => {

  const renderHighlight = ({ value, language }: HightLightProps) => {
    return (
      <SyntaxHighlighter language={language} style={a11yDark} showLineNumbers={showLineNumbers}>
        {value}
      </SyntaxHighlighter>
    )
  }

  return (
    <ReactMarkdown
      renderers={{
        code: renderHighlight
      }}
      children={markdown}
    ></ReactMarkdown>
  )
}

CodeBlock.defaultProps = {
  showLineNumbers: false
}
