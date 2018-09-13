const NOT_A_FILE = 'NOT_A_FILE',
  INVALID_PARAMETER = 'INVALID_PARAMETER',
  FILE_ALREADY_EXISTS = 'FILE_ALREADY_EXISTS',
  CANT_DELETE_ROOT = 'CANT_DELETE_ROOT',
  FILE_NOT_FOUND = 'FILE_NOT_FOUND'

export class Error {
  constructor (code, message, extra) {
    this.code = code
    this.message = message
    this.extra = extra
  }

  static get NOT_A_FILE () {
    return NOT_A_FILE
  }

  static get INVALID_PARAMETER () {
    return INVALID_PARAMETER
  }

  static get FILE_ALREADY_EXISTS () {
    return FILE_ALREADY_EXISTS
  }

  static get CANT_DELETE_ROOT () {
    return CANT_DELETE_ROOT
  }

  static get FILE_NOT_FOUND () {
    return FILE_NOT_FOUND
  }
}
