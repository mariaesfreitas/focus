const send = require('../services/resend');

const sendMail = async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    await send(name, phone, email, message);
    return res.json('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return res.status(500).json('Erro ao enviar o e-mail.');
  }
}

module.exports = {
  sendMail
}