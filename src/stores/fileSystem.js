import { users, gameConsts } from './../consts.js'
import File from './../models/file.js'

module.exports = {
  fsRoot: null,

  init: function (initialData) {
    this.fsRoot = new File(false, '', '', users.root)
    initialData.forEach(game => this.fsRoot.addFile(getGameFile(game)))
  },

}

function getGameRoot(game) {
  const gameRoot = new File(false, game.title, '', users.user)
  const resources = new File(false, 'Game play resources', '', users.user)

  const installation = new File(false, 'Installation', '', users.user)
  game['Game play resources']['Installation'].forEach(file =>
    installation.addFile(new File(true, file.file_name, file.type, users.user)))

  const dependency = new File(false, 'Resource Dependency', '', users.user)
  game['Game play resources']['Resource Dependency'].forEach(file =>
    dependency.addFile(new File(true, file.file_name, file.type, users.user)))

  resources.addFile(installation)
  resources.addFile(dependency)
  gameRoot.addFile(resources)

  return gameRoot
}
