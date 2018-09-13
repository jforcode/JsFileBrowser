export function getGameRoot(game, rootEle) {
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
