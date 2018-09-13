const state = {
  currSelectedFile: null
}

const methods = {
  selectFile: function (file) {
    state.currSelectedFile = file
    console.log(state)
  }
}

export default {
  state,
  methods
}
