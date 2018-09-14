const state = {
  currSelectedFile: null
}

const methods = {
  selectFile: function (file) {
    state.currSelectedFile = file
  }
}

export default {
  state,
  methods
}
