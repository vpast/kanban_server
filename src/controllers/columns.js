const express = require('express')
const Columns = require('../models/columns')

const getColumns = async (req, res) => {
  try {
    let columns = await Columns.find()
    if (columns) {
      res.status(200).json(columns)
      // console.log(columns)
    }
  } catch (err) {
    res.status(404).json(err)
  }
}

module.exports = {getColumns}