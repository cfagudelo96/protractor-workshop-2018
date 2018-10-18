import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailInput: ElementFinder;
  private passwordInput: ElementFinder;
  private signInButton: ElementFinder;

  constructor() {
    this.emailInput = $('#email');
    this.passwordInput = $('#passwd');
    this.signInButton = $('#SubmitLogin > span');
  }

  public async signIn(email: string, password: string): Promise<void> {
    this.emailInput.sendKeys(email);
    this.passwordInput.sendKeys(password);
    this.signInButton.click();
  }
}
