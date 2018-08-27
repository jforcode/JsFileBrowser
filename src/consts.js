module.exports = {
  errors: {
    NOT_A_FILE: 0,
    INVALID_PARAMETER: 1,
    FILE_ALREADY_EXISTS: 2,
    CANT_DELETE_ROOT: 3,
    FILE_NOT_FOUND: 4
  },
  users: {
    root: 'root',
    user: 'user'
  },
  fileTypes: [
    {
      label: 'iso image'
    },
    {
      label: 'dat file'
    },
    {
      label: 'sav file'
    },
    {
      label: 'AT3 file'
    }
  ],
  pages: {
    "home": 0,
    "trash": 1
  }
}
