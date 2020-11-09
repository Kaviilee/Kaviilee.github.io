import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Message from './message';
import { MessageType, MessageApi } from './index.d';

import styles from './index.less'

// type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right' | 'slide-in-top'

export interface Notice {
    text: string;
    key: string;
    type: MessageType;
}

let uid = 0
const now = Date.now()
const getUuid = (): string => {
    const id = uid;
    uid += 1
    return `MESSAGE_${now}_${id}`
}

let add: (notice: Notice, duration?: number) => void


export const MessageContainer = () => {
    const [notices, setNotices] = useState<Notice[]>([]);
    const max = 10;
    const remove = (notice: Notice) => {
        const {key} = notice;

        setNotices((prevNotices) => {
            return prevNotices.filter(({ key: noticeKey }) => key !== noticeKey);
        })
    }

    add = (notice: Notice, duration?: number) => {
        setNotices((prevNotices) => [...prevNotices, notice]);

        const timer = (duration && duration * 1000) || 3000;

        setTimeout(() => {
            remove(notice)
        }, timer);
    }

    useEffect(() => {
        if (notices.length > max) {
            const [first] = notices;
            remove(first)
        }
    }, [notices])

    return (
        <div className={styles.messageContainer}>
            <TransitionGroup>
                {
                    notices.map(({ text, key, type }) => (
                        <CSSTransition
                            timeout={200}
                            classNames="slide-in-top"
                            key={key}
                            >
                            <Message type={type} text={text} />
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </div>
    )
}

let el = document.querySelector('#message-wrapper');
if (!el) {
    el = document.createElement('div');
    el.className = 'message-wrapper';
    el.id = 'message-wrapper';
    document.body.append(el)
}

ReactDOM.render(
    <MessageContainer></MessageContainer>,
    el
)

const api: MessageApi = {
    info: (text, duration) => {
        // console.log(text)
        add({
            text,
            key: getUuid(),
            type: 'info'
        }, duration)
    },
    success: (text, duration) => {
      add({
        text,
        key: getUuid(),
        type: 'success'
      }, duration)
    },
    warn: (text, duration) => {
      add({
        text,
        key: getUuid(),
        type: 'warn'
      }, duration)
    },
    error: (text, duration) => {
      add({
        text,
        key: getUuid(),
        type: 'error'
      }, duration)
    }
}

export default api;
