const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)

const actionSchema = new mongoose.Schema({
  blogid:{
    type:String,
    default:String("a")
  },
  likes:{
    type:Number,
    default:Number("0"),
    required: true
  },
  comment:[{
    type: String,
    
  }]

})



module.exports = mongoose.model('Action', actionSchema)

module.exports = model