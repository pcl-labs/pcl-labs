const axios = require('axios')
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Max-Age': '2592000',
  'Access-Control-Allow-Credentials': 'true',
}
exports.handler = async function (event, context, callback) {
  var body = JSON.parse(event.body)

  try {
    let response = await axios({
      url: 'https://api.sendinblue.com/v3/contacts',
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.SIB_API_KEY,
      },
      data: body,
    })
    console.log(response)
    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (err) {
    console.log(err.response.data)
    return {
      statusCode: 400,
      body: JSON.stringify(err.response.data),
    }
  }
}
