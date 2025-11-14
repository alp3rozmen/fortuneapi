import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alp3rozmen@gmail.com",
    pass: "crwi pqfi acop ukut"
  }
});

const sendMail = async (to, subject, html) => {
  return transporter.sendMail({
    from: "alp3rozmen@gmail.com",
    to,
    subject,
    html
  });
};


// Falcı ve kullanıcı için mail template fonksiyonları
/**
 * Falcılar için mail içeriği şablonu (template).
 * @param {string} falciName - Falcının adı.
 * @param {Date|string} appointmentDate - Randevu tarihi/saatı.
 * @returns {string} HTML formatında mail içeriği.
 */
export function falciMailTemplate(falciName, appointmentDate) {
  return `
    <div style="font-family: Arial, sans-serif;">
      <h3>Merhaba ${falciName},</h3>
      <p style="font-size:16px;">
        Size atanmış yeni bir fal bulunuyor.<br/>
        <strong>Randevu Tarihi:</strong> ${appointmentDate}
      </p>
      <p>Lütfen fal yorumunuzu en kısa sürede tamamlayınız.</p>
      <hr/>
      <small>Bu bir otomatik bildiridir. Lütfen yanıtlamayınız.</small>
    </div>
  `;
}

/**
 * Kullanıcılar için mail içeriği şablonu (template).
 * @param {string} userName - Kullanıcının adı.
 * @param {Date|string} estimatedTime - Tahmini değerlendirme zamanı.
 * @returns {string} HTML formatında mail içeriği.
 */
export function userMailTemplate(userName) {
  var estimatedTime = "30 dakika";
  return `
    <div style="font-family: Arial, sans-serif;">
      <h3>Merhaba ${userName},</h3>
      <p style="font-size:16px;">
        Falınız sisteme alınmıştır.<br/>
        <strong>Yaklaşık değerlendirme süresi:</strong> ${estimatedTime}
      </p>
      <p>
        Falınız 30 dakika içinde bir falcı tarafından yanıtlanacaktır. <br/>
        Takip için uygulamamızı kontrol edebilirsiniz.
      </p>
      <hr/>
      <small>Bu bir otomatik bildiridir. Lütfen yanıtlamayınız.</small>
    </div>
  `;
}


export default sendMail;