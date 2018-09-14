import fs from './../stores/fileSystem.js'
import { User, File } from './../models'

export const fileOptionsMixin = {
  methods: {
    createFolder: function (file) {
      if (file.isFile) return
      const fileName = prompt('New Folder Name', '')
      if (fileName) {
        const newFolder = new File(false, fileName, file.type, User.NORMAL_USER)
        fs.methods.createFile(file, newFolder)
      }
    },
    createFile: function (file) {
      if (file.isFile) return
      const fileName = prompt('New File Name', '')
      if (fileName) {
        const newFile = new File(true, fileName, file.type, User.NORMAL_USER)
        fs.methods.createFile(file, newFile)
      }
    },
    renameFile: function (file) {
      let fileName = prompt('New Name', '')
      if (fileName) {
        fs.methods.renameFile(file, fileName, file.type, User.NORMAL_USER)
      }
    },
    deleteFile: function (file) {
      fs.methods.deleteFile(file.parent, file, User.NORMAL_USER)
    }
  }
}
