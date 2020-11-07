## API

| Property | Description | Type | Default |
| ----- | ----- | ----- | ----- |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |
| btnType | 设置按钮类型 | `primary` \| `dashed` \| `link` \| `danger` \| `default` | `default` |
| disabled | 按钮失效状态 | boolean | false |
| href | Redirect url of点击跳转的地址，指定此属性 button 的行为和 a 链接一致link button | string | - |
| size | 设置按钮大小 | `lg` \| `default` \| `sm` | `default` |


```jsx
<Button btnType="dashed">dashed</Button>
<Button btnType="default" className={styles.buttonBetween}>Default</Button>
<Button btnType="danger" className={styles.buttonBetween}>Danger</Button>
<Button btnType="primary" className={styles.buttonBetween}>Primary</Button>
<Button btnType="link" className={styles.buttonBetween}>Link</Button>

<Button btnType="default" block></Button>
```
