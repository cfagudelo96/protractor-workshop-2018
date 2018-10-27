import { PersonalInformationPage } from '../src/page';

describe('Given a personal information form', () => {
  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

  beforeAll(async () => {
    await personalInformationPage.goToWebsite();
  });

  describe('and that I fill out the form', () => {
    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        professions: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands'
        ]
      });
    });

    it('then it should not have thrown an error', () => {
      const didNotFail = true;
      expect(didNotFail).toBe(true);
    });
  });
});
