import srv from './fileSrv.js'

class App {
  constructor() {
    this._state = {
      rootFile: null,
      currSelectedFile: null
    }
  }

  get state() {
    return this._state
  }

  selectFile (file) {
    // TODO: checks
    this._state.currSelectedFile = file
  }

}

const app = new App()

export default app
