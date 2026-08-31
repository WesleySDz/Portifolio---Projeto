/**
 */
export const RECIPIENT_EMAIL = "wesleydomingos.dev@gmail.com";

export interface ContactFormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}

/**
 * Função responsável por formatar e disparar o e-mail de contato
 */
export function sendContactEmail(formData: ContactFormData): void {
  const { name, email, topic, message } = formData;

  const subject = `[Portfólio - ${topic}] Mensagem de ${name}`;
  const body = `Olá, Wesley!\n\n${message}\n\n---\nDetalhes do Contato:\nNome: ${name}\nEmail: ${email}\nAssunto: ${topic}`;

  const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
}
