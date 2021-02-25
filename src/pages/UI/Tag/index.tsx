import React from 'react';
import { Card, Tag, MarkDown } from '@/components';
import { TwitterOutlined } from '@ant-design/icons';
import doc from './doc.md';

const TagDisplay = () => {
  const onClose = () => {
    console.log('closed');
  };

  return (
    <Card title="Tag 标签">
      <p className="subtitle">进行标记和分类的标签。</p>

      <Tag color="success">测试标签</Tag>
      <Tag color="processing">测试标签</Tag>
      <Tag color="error">测试标签</Tag>
      <Tag color="warning">测试标签</Tag>
      <Tag color="blue">测试标签</Tag>
      <Tag icon={<TwitterOutlined />}>测试标签</Tag>
      <Tag closable onClose={onClose}>
        Closable
      </Tag>

      <MarkDown markdown={doc}></MarkDown>
    </Card>
  );
};

export default TagDisplay;
