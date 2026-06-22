const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const send = async (name, phone, email, message) => {
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: 'adrian.moraes@moraesfrederico.com.br',
    replyTo: email,
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
  });

  if (error) {
    throw new Error(error.message);
  }
};

module.exports = send;
