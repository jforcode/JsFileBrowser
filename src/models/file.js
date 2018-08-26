import moment from 'moment'
import Error from './error.js'
import errors from './../consts.js'

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
    this.files.push(file)
  }

  this.removeFile = function (file) {
    // TODO
  }

  this.setFileName = function (fileName, fileType, actionBy) {
    this.fileName = fileName
    this.fileType = fileType
    this.lastUpdatedAt = moment()
  }
}

export default {
  File
}
