import { users } from './../consts.js'
import file from './../models/file.js'

export default {
  fsRoot: null,

  init: function (initialData) {
    this.fsRoot = new file.File(false, '', '', users.root)
    initialData.forEach(game => this.fsRoot.addFile(getGameRoot(game)))
  },

}

function getGameRoot(game) {
  const gameRoot = new file.File(false, game.title, '', users.user)
  const resources = new file.File(false, 'Game play resources', '', users.user)

  const installation = new file.File(false, 'Installation', '', users.user)
  game['Game play resources']['Installation'].forEach(f =>
    installation.addFile(new file.File(true, f.file_name, f.type, users.user)))

  const dependency = new file.File(false, 'Resource Dependency', '', users.user)
  game['Game play resources']['Resource Dependency'].forEach(f =>
    dependency.addFile(new file.File(true, f.file_name, f.type, users.user)))

  resources.addFile(installation)
  resources.addFile(dependency)
  gameRoot.addFile(resources)

  return gameRoot
}
