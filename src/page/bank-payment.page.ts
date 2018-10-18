import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmationMessage: ElementFinder;

  constructor() {
    this.confirmationMessage = $('#center_column > div > p > strong');
  }

  public async getConfirmationMessage(): Promise<string> {
    return await this.confirmationMessage.getText();
  }
}
