import React, { FC } from 'react';
import BrowserMockup from '@/components/BrowserMockup';

import styles from './index.less';

interface PreviewProps {
  meta?: { path: string };
}

const Preview: FC<PreviewProps> = ({ meta }: PreviewProps) => (
  <section className={styles.container}>
    <BrowserMockup>
      <iframe src={meta?.path || ''} className={styles.iframe}></iframe>
    </BrowserMockup>
  </section>
)

export default Preview;
