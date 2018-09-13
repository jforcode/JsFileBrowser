import User from './../models/User.js'
import Error from './../models/Error.js'
import File from './../models/File.js'

const state = {
  fsRoot: null
}

const methods = {
  createFile: function (f, isFile, newFileName, newFileType, createdBy) {
    if (!newFileName) throw new Error(Error.INVALID_PARAMETER, 'Invalid file name')
    if (f.isFile) throw new Error(Error.INVALID_PARAMETER, 'Invalid source folder')

    f.addFile(new File(isFile, newFileName, newFileType, createdBy))
  },

  renameFile: function (f, newName, type, updatedBy) {
    f.setFileName(newName, type, updatedBy)
  },

  deleteFile: function (f, deletedBy) {
    const parent = f.parent
    if (!parent) throw new Error(Error.CANT_DELETE_ROOT, 'Invalid operation to delete root')

    parent.removeFile(f.fileName, f.fileType)
  }
}

export default {
  state,
  methods
}
