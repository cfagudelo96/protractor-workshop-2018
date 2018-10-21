import { browser } from 'protractor';
import { MenuContentPage,
         ProductListPage,
         ProductAddedModalPage,
         OrderSummaryPage,
         BankPaymentPage } from '../src/page';

describe('Given my shopping application', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('When I want to buy a t-shirt', () => {
    const productListPage: ProductListPage = new ProductListPage();
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
    const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
    const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

    describe('Then I select a product from the t-shirt list to buy', () => {
      beforeAll(async () => {
        await menuContentPage.goToTShirtMenu();
        await productListPage.addProductToCartByName('Faded Short Sleeve T-shirts');
        await productAddedModalPage.proceedToCheckout();
        await orderSummaryPage.summaryStep.proceedToCheckout();
      });

      describe('and I sign in the application', () => {
        beforeAll(async () => {
          await orderSummaryPage.signInStep.signIn('aperdomobo@gmail.com', 'WorkshopProtractor');
        });

        describe('and I give my address details', () => {
          beforeAll(async () => {
            await orderSummaryPage.addressStep.proceedToCheckout();
          });
          describe('and I agree to the terms of service', () => {
            beforeAll(async () => {
              await orderSummaryPage.shippingStep.agreeToTermsOfService();
              await orderSummaryPage.shippingStep.proceedToCheckout();
            });

            describe('and I select my payment option', () => {
              beforeAll(async () => {
                await orderSummaryPage.paymentStep.selectPaymentByBankWire();
                await orderSummaryPage.paymentStep.confirmOrder();
              });

              it('then a t-shirt should be bought', async () => {
                await expect(bankPaymentPage.getConfirmationMessage())
                  .toBe('Your order on My Store is complete.');
              });
            });
          });
        });
      });
    });
  });
});
