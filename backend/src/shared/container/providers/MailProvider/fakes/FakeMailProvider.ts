import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';
import ISendEmailDTO from '@shared/container/providers/MailProvider/dtos/ISendMailDTO';

export default class FakeMailProvider implements IMailProvider {
  private messages: ISendEmailDTO[] = [];

  public async sendMail(message: ISendEmailDTO): Promise<void> {
    this.messages.push(message);
  }
}
