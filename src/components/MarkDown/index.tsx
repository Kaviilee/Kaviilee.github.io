import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {base16AteliersulphurpoolLight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import gfm from 'remark-gfm'

import styles from './index.less'

export interface HightLightProps {
  language: string;
  value: any;
}

export interface MarkDownProps {
  markdown: string;
  showLineNumbers?: boolean;
}

export const MarkDown: React.FC<MarkDownProps> = ({ markdown, showLineNumbers }: MarkDownProps) => {

  const renderHighlight = ({ value, language }: HightLightProps) => {
    return (
      <div className={styles.codeMarkup}>
        <SyntaxHighlighter language={language} style={base16AteliersulphurpoolLight} showLineNumbers={showLineNumbers}>
          {value}
        </SyntaxHighlighter>
      </div>
    )
  }

  return (
    <ReactMarkdown
      renderers={{
        code: renderHighlight
      }}
      plugins={[gfm]}
    >{markdown}</ReactMarkdown>
  )
}

MarkDown.defaultProps = {
  showLineNumbers: false
}

export default MarkDown;
