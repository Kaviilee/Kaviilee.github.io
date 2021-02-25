import React from 'react';
import { message, Card, Button, MarkDown } from '@/components';
import styles from './index.less';
import docMd from './doc.md';

const MessageDisplay: React.FC = () => {
  const info = () => {
    message.info('This is an info message');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const success = () => {
    message.success('This is a success message');
  };

  const warn = () => {
    message.warn('This is a warn message');
  };

  return (
    <Card title="Message 提示">
      <p className="subtitle">全局展示操作反馈信息。</p>
      <Button btnType="default" onClick={info}>
        Info
      </Button>
      <Button className={styles.buttonBetween} onClick={error}>
        Error
      </Button>
      <Button className={styles.buttonBetween} btnType="default" onClick={success}>
        Success
      </Button>
      <Button className={styles.buttonBetween} btnType="default" onClick={warn}>
        Warn
      </Button>

      <div className={styles.codeContent}>
        <MarkDown markdown={docMd}></MarkDown>
      </div>
    </Card>
  );
};

MessageDisplay.displayName = 'MessageDisplay';

export default MessageDisplay;
