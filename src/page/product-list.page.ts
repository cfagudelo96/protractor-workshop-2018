import { browser, $, by, ElementFinder } from 'protractor';

export class ProductListPage {
  private productList: ElementFinder;

  constructor() {
    this.productList = $('#center_column > ul.product_list');
  }

  public async addProductByIndexToCart(index: number): Promise<void> {
    const productElement = this.productList.element(
      by.css(`li:nth-child(${index + 1}) > div.product-container`)
    );
    await browser.actions().mouseMove(productElement).perform();
    await productElement.element(
      by.css('a.button.ajax_add_to_cart_button')
    ).click();
  }
}
