import { $, ElementFinder, browser, ExpectedConditions as EC } from 'protractor';

export class ProductAddedModalPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor() {
    this.proceedToCheckoutButton = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    const buttonIsClickable = EC.elementToBeClickable(this.proceedToCheckoutButton);
    await browser.wait(buttonIsClickable, 5000);
    await this.proceedToCheckoutButton.click();
  }
}
