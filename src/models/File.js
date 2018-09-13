import moment from 'moment'
import Error from './Error.js'

export class File {
  constructor (isFile, fileName, fileType, createdBy, parent) {
    this.isFile = isFile
    this.fileName = fileName
    this.fileType = fileType
    this.createdBy = createdBy
    this.createdAt = moment()
    this.lastUpdatedAt = moment()
    this.files = []
    this.parent = parent
  }

  addFile (file) {
    let ind = this.findFileIndex(file.fileName, file.fileType)
    if (ind !== -1) {
      file.fileName = file.fileName + '_';
      this.addFile(file)
      return;
    }
    this.files.push(file)
    this.update()
  }

  removeFile (fileName, fileType) {
    let ind = this.findFileIndex(fileName, fileType)
    if (ind === -1) throw new Error(Error.FILE_NOT_FOUND, 'File not found')
    this.files.splice(ind, 1)
    this.update()
  }

  setFileName (fileName, fileType, updatedBy) {
    let ind = this.parent.findFileIndex(fileName, fileType)
    if (ind !== -1) throw new Error(Error.FILE_ALREADY_EXISTS, 'File already exists')
    this.fileName = fileName
    this.fileType = fileType
    this.update()
  }

  update (updatedBy) {
    this.lastUpdatedAt = moment()
  }

  findFileIndex (fileName, fileType) {
    return this.files.findIndex(fl => fl.fileName === fileName && fl.fileType === fileType);
  }

  getPath () {
    let ret = []
    let temp = this;

    while (temp && temp.fileName) {
      ret.push({
        label: temp.fileName,
        file: temp
      })
      temp = temp.parent
    }

    return ret.reverse()
  }
}
