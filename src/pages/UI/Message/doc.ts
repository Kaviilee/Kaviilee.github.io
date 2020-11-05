
export const doc = `
  ~~~jsx
  // init function
  const info = () => {
    message.info('This is an info message');
  }

  const error = () => {
    message.error('This is an error message');
  }

  const success = () => {
    message.success('This is a success message');
  }

  const warn = () => {
    message.warn('This is a warn message');
  }


  <Button btnType="default" onClick={info}>Info</Button>
  <Button onClick={error}>Error</Button>
  <Button btnType="default" onClick={success}>Success</Button>
  <Button btnType="default" onClick={warn}>Warn</Button>
  ~~~
`
