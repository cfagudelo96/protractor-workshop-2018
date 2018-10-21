import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireOption: ElementFinder;
  private confirmOrderButton: ElementFinder;

  constructor() {
    this.payByBankWireOption = $('#HOOK_PAYMENT a.bankwire');
    this.confirmOrderButton = $('#cart_navigation > button[type="submit"]');
  }

  public async selectPaymentByBankWire(): Promise<void> {
    await this.payByBankWireOption.click();
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();
  }
}
