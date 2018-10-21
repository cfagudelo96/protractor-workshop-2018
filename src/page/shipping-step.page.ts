import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private termsOfServiceCheckbox: ElementFinder;
  private proceedToCheckoutButton: ElementFinder;

  constructor() {
    this.termsOfServiceCheckbox = $('#cgv');
    this.proceedToCheckoutButton = $('.cart_navigation button[type="submit"]');
  }

  public async agreeToTermsOfService(): Promise<void> {
    await this.termsOfServiceCheckbox.click();
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
