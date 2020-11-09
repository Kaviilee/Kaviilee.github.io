## API

| Property  | Description          | Type    | Default |
| --------- | -------------------- | ------- | ------- |
| title     | 卡片标题             | string  | -       |
| bordered  | 是否有边框           | boolean | false   |
| hoverable | 鼠标划过时可浮起     | boolean | false   |
| bodyStyle | 内容区域自定义样式   | object  | -       |
| style     | 整个卡片的自定义样式 | object  | -       |
| className | 卡片自定义类名       | string  | -       |

```jsx
<section className={styles.cardDisplay}>
  <Card style={{ color: 'red' }} className="card-demo" bodyStyle={{ borderTop: '1px solid #fefefe' }} hoverable>
    Demo1 without title
  </Card>

  <Card title="Demo2" bordered={true}></Card>
</section>
```

