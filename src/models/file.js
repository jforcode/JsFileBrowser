import moment from 'moment'
import err from './error.js'
import { errors } from './../consts.js'

const File = function (isFile, fileName, fileType, createdBy, parent) {
  this.isFile = isFile
  this.fileName = fileName
  this.fileType = fileType
  this.createdBy = createdBy
  this.createdAt = moment()
  this.lastUpdatedAt = moment()
  this.files = []
  this.parent = parent

  this.addFile = function (file) {
    let ind = this.findFileIndex(file.fileName, file.fileType)
    if (ind !== -1) {
      file.fileName = file.fileName + '_';
      this.addFile(file)
    }
    this.files.push(file)
    this.update()
  }

  this.removeFile = function (fileName, fileType) {
    let ind = this.findFileIndex(fileName, fileType)
    if (ind === -1) throw new err.Error(errors.FILE_NOT_FOUND, 'File not found')
    this.files.splice(ind, 1)
    this.update()
  }

  this.setFileName = function (fileName, fileType, updatedBy) {
    let ind = this.parent.findFileIndex(fileName, fileType)
    if (ind !== -1) throw new err.Error(errors.FILE_ALREADY_EXISTS, 'File already exists')
    this.fileName = fileName
    this.fileType = fileType
    this.update()
  }

  this.update = function (updatedBy) {
    this.lastUpdatedAt = moment()
  }

  this.findFileIndex = function (fileName, fileType) {
    return this.files.findIndex(fl => fl.fileName === fileName && fl.fileType === fileType);
  }

}

export default {
  File
}
