import React from 'react';
import {
  InfoCircleOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

import styles from './index.less';

import { MessageProps, MessageType } from './index.d';

function Message({ text, type }: MessageProps) {
  // render Icon
  const renderIcon = (messageType: MessageType) => {
    let messageIcon: React.ElementType;

    switch (messageType) {
      case 'error':
        messageIcon = CloseCircleOutlined;
        break;
      case 'success':
        messageIcon = CheckCircleOutlined;
        break;
      case 'warn':
        messageIcon = ExclamationCircleOutlined;
        break;
      case 'info':
      default:
        messageIcon = InfoCircleOutlined;
        break;
    }

    return React.createElement(messageIcon, { className: `icon-${messageType}` });
  };

  return (
    <div className={styles.message}>
      <div className={styles.messageContent}>
        <div className={styles.icon}>{renderIcon(type)}</div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}

Message.displayName = 'Message';

export default Message;
