import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsOfServiceCheckbox: ElementFinder;
  private proceedToCheckoutButton: ElementFinder;

  constructor() {
    this.termsOfServiceCheckbox = $('#cgv');
    this.proceedToCheckoutButton = $('#form > p > button > span');
  }

  public async agreeToTermsOfService(): Promise<void> {
    this.termsOfServiceCheckbox.click();
  }

  public async proceedToCheckout(): Promise<void> {
    this.proceedToCheckoutButton.click();
  }
}
