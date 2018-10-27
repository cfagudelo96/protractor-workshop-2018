import { IFramePage } from '../src/page';

describe('Given my outdated website with IFrames', () => {
  const iFramePage = new IFramePage();

  beforeAll(async () => {
    await iFramePage.goToWebsite();
  });

  describe('When I inject a script that changes the height of the IFrame', () => {
    const newIFrameHeight = 600;

    beforeAll(async () => {
      await iFramePage.modifyIFrameHeight(newIFrameHeight);
    });

    it('Then the frame has the same new height', async () => {
      expect(await iFramePage.getIFrameHeight()).toBe(newIFrameHeight);
    });
  });

  describe('When I want to verify my title in the default page', () => {
    const defaultPageTitle = 'Sample Iframe page';

    it('Should have the title of the default page', async () => {
      expect(await iFramePage.getTitle()).toBe(defaultPageTitle);
    });

    describe('And when I switch to the IFrame inside my page', () => {
      beforeAll(async () => await iFramePage.switchToIFrame());
      it('Should get the title inside the IFrame', async () => {
        expect(await iFramePage.getTitle()).toBe('Practice Automation Form');
      });

      describe('But when I switch back to the default page', () => {
        beforeAll(async () => await iFramePage.switchToMainPage());
        it('Should have the same title as before', async () => {
          expect(await iFramePage.getTitle()).toBe(defaultPageTitle);
        });
      });
    });
  });
});
