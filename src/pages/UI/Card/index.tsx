import React from 'react';
import { Card, MarkDown } from '@/components';
import doc from './doc.md';

import styles from './index.less';

const CardDisplay: React.FC = () => {
  return (
    <div>
      <Card title="Card">
        <p className="subtitle">通用卡片容器。</p>
        <section className={styles.cardDisplay}>
          {/** demo1 */}
          <Card
            style={{ color: 'red' }}
            className="card-demo"
            bodyStyle={{ borderTop: '1px solid #fefefe' }}
            hoverable
          >
            Demo1 without title
          </Card>

          <Card title="Demo2" bordered={true}></Card>
        </section>
        <MarkDown markdown={doc}></MarkDown>
      </Card>
    </div>
  );
};

CardDisplay.displayName = 'CardDisplay';

export default CardDisplay;
