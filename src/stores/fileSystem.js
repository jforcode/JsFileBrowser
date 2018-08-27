import { users, errors } from './../consts.js'
import Error from './../models/error.js'
import file from './../models/file.js'

export default {
  fsRoot: null,

  init: function (initialData) {
    this.fsRoot = new file.File(false, '', '', users.root)
    initialData.forEach(game => this.fsRoot.addFile(getGameRoot(game, this.fsRoot)))
  },

  createFile: function (f, isFile, newFileName, newFileType, createdBy) {
    if (!newFileName || !newFileType) throw new Error(errors.INVALID_PARAMETER, 'Invalid file name')
    if (f.isFile) throw new Error(errors.INVALID_PARAMETER, 'Invalid source folder')

    const folder = new file.File(isFile, toCreate, '', createdBy)
    f.addFile(folder)
  },

  renameFile: function (f, newName, type, updatedBy) {
    f.setFileName(newName, type, updatedBy)
  },

  deleteFile: function (f, deletedBy) {
    const parent = f.parent;
    if (!parent) throw new Error(errors.CANT_DELETE_ROOT, 'Invalid operation to delete root')

    parent.removeFile(f.fileName, f.fileType)
  },

}

function getGameRoot(game, rootEle) {
  const gameRoot = new file.File(false, game.title, '', users.user, rootEle)
  const resources = new file.File(false, 'Game play resources', '', users.user, gameRoot)

  const installation = new file.File(false, 'Installation', '', users.user, resources)
  game['Game play resources']['Installation'].forEach(f =>
    installation.addFile(new file.File(true, f.file_name, f.type, users.user, installation)))

  const dependency = new file.File(false, 'Resource Dependency', '', users.user, resources)
  game['Game play resources']['Resource Dependency'].forEach(f =>
    dependency.addFile(new file.File(true, f.file_name, f.type, users.user, installation)))

  resources.addFile(installation)
  resources.addFile(dependency)
  gameRoot.addFile(resources)

  return gameRoot
}
