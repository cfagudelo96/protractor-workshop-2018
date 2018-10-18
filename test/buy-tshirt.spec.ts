import { browser } from 'protractor';
import { MenuContentPage,
         ProductListPage,
         ProductAddedModalPage,
         OrderSummaryPage,
         BankPaymentPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

  it('then a t-shirt should be bought', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.addProductByIndexToCart(0);
    await productAddedModalPage.proceedToCheckout();
    await orderSummaryPage.summaryStep.proceedToCheckout();

    await orderSummaryPage.signInStep.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');

    await orderSummaryPage.addressStep.proceedToCheckout();

    await orderSummaryPage.shippingStep.agreeToTermsOfService();
    await orderSummaryPage.shippingStep.proceedToCheckout();

    await orderSummaryPage.paymentStep.selectPaymentByBankWire();
    await orderSummaryPage.paymentStep.confirmOrder();

    await expect(bankPaymentPage.getConfirmationMessage())
      .toBe('Your order on My Store is complete.');
  });
});
