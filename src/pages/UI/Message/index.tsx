import React from 'react';
import message from 'Components/Message';
import Card from 'Components/Card'
import Button from 'Components/Button'
import { MessageType } from 'Components/Message/index.d';

 const MessageDisplay: React.FC = () => {

  const handleButtonClick = (messageType: MessageType) => {
    switch(messageType) {
      case 'info':
        if (message.info) message.info(messageType)
        break;
      case 'error':
        if (message.error) message.error(messageType)
    }
  }

  return (
    <Card>
      <Button btnType="default" onClick={() => handleButtonClick('info')}>info</Button>
      <Button style={{ marginLeft: '8px' }} btnType="danger" onClick={() => handleButtonClick('error')}>info</Button>
    </Card>
  )
}

MessageDisplay.displayName = 'MessageDisplay';

export default MessageDisplay;
