import { File, User, Error } from './../models'

const state = {
  root: new File(false, '', '', User.ROOT_USER)
}

const methods = {
  createFile (parent, file) {
    parent.addFile(file)
  },

  renameFile (file, newName, newType, updatedBy) {
    file.setFileName(newName, newType, updatedBy)
  },

  deleteFile (parent, file, deletedBy) {
    parent.removeFile(file.fileName, file.fileType)
  }
}

export default {
  state,
  methods
}
