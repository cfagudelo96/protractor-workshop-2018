import { $, browser } from 'protractor';
import { MenuContentPage,
         ProductListPage,
         ProductAddedModalPage,
         OrderSummaryPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then a t-shirt should be bought', async () => {
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(3000));
    await productListPage.addProductByIndexToCart(0);
    await (browser.sleep(3000));
    await productAddedModalPage.proceedToCheckout();
    await (browser.sleep(3000));
    await orderSummaryPage.summaryStep.proceedToCheckout();
    await (browser.sleep(3000));

    await orderSummaryPage.signInStep.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await (browser.sleep(3000));

    await orderSummaryPage.addressStep.proceedToCheckout();
    await (browser.sleep(3000));

    await orderSummaryPage.shippingStep.agreeToTermsOfService();
    await (browser.sleep(3000));
    await orderSummaryPage.shippingStep.proceedToCheckout();
    await (browser.sleep(3000));

    await orderSummaryPage.paymentStep.selectPaymentByBankWire();
    await (browser.sleep(3000));
    await orderSummaryPage.paymentStep.confirmOrder();
    await (browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});
