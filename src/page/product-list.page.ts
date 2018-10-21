import { browser, $$, ElementFinder, ElementArrayFinder } from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;

  constructor() {
    this.products = $$('#center_column > ul.product_list > li');
  }

  private findProductByName(productName: string): ElementFinder {
    return this.products.filter(element =>
      element.$('.product-name').getText().then(text => text === productName)
    ).first();
  }

  public async addProductToCartByName(name: string): Promise<void> {
    const productElement = await this.findProductByName(name);
    await browser.actions().mouseMove(productElement).perform();
    await productElement.$('a.button.ajax_add_to_cart_button').click();
  }
}
