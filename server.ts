import fs from 'fs';
import path from 'path';
import express from 'express';
import { green, red } from 'chalk';
import { exec } from 'child_process';
import config from './build/webpack/webpack.prod';

const PORT = 8001;

const distPath = config?.output?.path || path.resolve(__dirname, 'dist');

/**
 * 启动测试服务器
 */
function startApp() {
  const app = express();

  // 将dist作为静态资源入口
  app.use(express.static(distPath));

  // 监听端口
  app.listen(PORT, () => {
    // if (err) {
    //   throw(err)
    //   return;
    // }

    console.log(
      green(
        `Project is running at http://localhost:${PORT}. Press Ctrl+C to stop.\n`
      )
    );
  });
}

if (fs.existsSync(distPath)) {
  startApp();
} else {
  const command = 'npm run build';
  exec(command, (err: any) => {
    if (err) {
      console.log(red(`build error: \n\n${err}`));
      return;
    }

    startApp();
  });
}
