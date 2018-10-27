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
});
