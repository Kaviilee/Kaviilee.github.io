import { Compiler } from 'webpack'

class EndWebpackPlugin {
  donecb: Function

  failcb: Function

  constructor(donecb: Function, failcb: Function) {
    this.donecb = donecb;
    this.failcb = failcb;
  }

  apply(compiler: Compiler) {
    compiler.hooks.done.tap('my-plugin' ,(stats) => {
      this.donecb(stats)
    })

    compiler.hooks.failed.tap('my-plugin' ,(err) => {
      this.failcb(err)
    })
  }
}

export default EndWebpackPlugin
