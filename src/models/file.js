import moment from 'moment'
import Error from './error.js'
import errors from './../consts.js'

function File (isFile, fileName, fileType, createdBy) {
  this.isFile = isFile
  this.fileName = fileName
  this.fileType = fileType
  this.createdBy = createdBy
  this.createdAt = moment()
  this.lastUpdatedAt = moment()
  this.files = []

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

module.exports = { File }
