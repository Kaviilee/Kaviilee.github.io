import React from 'react';
import { Card, Button, MarkDown } from 'Components/index';
import docMd from './doc.md';

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

      <div className={styles.codeContent}>
        <MarkDown markdown={docMd}></MarkDown>
      </div>
    </Card>
  )
}

ButtonDisplay.displayName = 'ButtonDisplay';

export default ButtonDisplay
