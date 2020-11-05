import React from 'react';
import { Card, Button } from 'Components/index';
import { CodeBlock } from 'Components/CodeBlock';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {doc, propsDescription} from './doc'

import styles from './index.less'

const ButtonDisplay: React.FC = () => {
  return (
    <Card title="Button">
      <section>
        <Button btnType="dashed">dashed</Button>
        <Button btnType="default" className={styles.buttonBetween}>Default</Button>
        <Button btnType="danger" className={styles.buttonBetween}>Danger</Button>
        <Button btnType="primary" className={styles.buttonBetween}>Primary</Button>
        <Button btnType="link" className={styles.buttonBetween}>Link</Button>
      </section>

      <section className={styles.sectionTop}>
        <Button btnType="default" block>Block</Button>
      </section>

      <div>
        <ReactMarkdown plugins={[gfm]}>{propsDescription}</ReactMarkdown>
      </div>

      <div className={styles.codeContent}>
        <CodeBlock markdown={doc}></CodeBlock>
      </div>
    </Card>
  )
}

ButtonDisplay.displayName = 'ButtonDisplay';

export default ButtonDisplay
