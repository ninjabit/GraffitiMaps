import { StreetartloversPage } from './app.po';

describe('streetartlovers App', () => {
  let page: StreetartloversPage;

  beforeEach(() => {
    page = new StreetartloversPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
