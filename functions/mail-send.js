const email_to = process.env.EMAIL_TO
const sib_api = process.env.SIB_API_KEY
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
  console.log(body)
  var sibData = {
    sender: {
      name: 'PCL LABS Contact',
      email: email_to || 'mrjoeelia@gmail.com',
    },
    to: [
      {
        email: email_to || 'mrjoeelia@gmail.com',
        name: 'PCL LABS Contact',
      },
    ],
    replyTo: {
      email: body.email,
    },
    subject: "PCL LAB's - Contact Form",
    htmlContent: `<html><head></head><body>PCL Labs Contact Form:<br/>--------<br/>Email: ${body.email}<br/>Name: ${body.name}<br/>Phone: ${body.phone}<br/>Message: ${body.message}<br/>Planning Event: ${body.event}<br/>--------</body></html>`,
  }
  try {
    console.log(sibData)
    let response = await axios({
      url: 'https://api.sendinblue.com/v3/smtp/email',
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key':
          sib_api ||
          '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',
      },
      data: sibData,
    })
    console.log(response)
    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    }
  } catch (err) {
    console.log(err.response.data)
    return {
      statusCode: 503,
      body: JSON.stringify({ error: 'Email is not valid' }),
    }
  }
}
