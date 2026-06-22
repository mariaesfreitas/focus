const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  family: 4,
  connectionTimeout: 15000,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD_EMAIL
  }
});

const send = (name, phone, email, message) => {
  return transporter.sendMail({
    from: process.env.USER_EMAIL,
    to: 'adrian.moraes@moraesfrederico.com.br',
    subject: 'Um novo formulário foi submetido!',
    html: `
    <h1>Você recebeu um novo formulário!</h1>
    <p>Nome do cliente:<p>
    <p>${name}</p>
    <p>Telefone do cliente:<p>
    <p>${phone}</p>
    <p>E-mail do cliente:<p>
    <p>${email}</p>
    <p>Mensagem do cliente:<p>
    <p>${message}</p>
  `
  })
}

module.exports = send;
