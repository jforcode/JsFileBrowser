function Error (code, desc, extra) {
  this.code = code
  this.desc = desc
  this.extra = extra
}

module.exports = { Error }
