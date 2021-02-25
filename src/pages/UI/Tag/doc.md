## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| closable | 标签是否可以关闭 | boolean | false |
| color | 标签颜色 | 'success' \| 'warning' \| 'error' \| 'processing' \| 'red' \| 'green' \| 'cyan' \| 'blue' \| string | - |
| icon | 图标 | ReactNode | - |
| onClose | 关闭时的回调 | (e) => void | - |

```jsx
const onClose = () => {
    console.log('closed')
  }

<Tag color="success">测试标签</Tag>
<Tag color="processing">测试标签</Tag>
<Tag color="error">测试标签</Tag>
<Tag color="warning">测试标签</Tag>
<Tag color="blue">测试标签</Tag>
<Tag icon={<TwitterOutlined />}>测试标签</Tag>
<Tag closable onClose={onClose}>Closable</Tag>
```
