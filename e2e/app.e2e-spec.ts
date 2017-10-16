import { HskPage } from './app.po';

describe('hsk App', () => {
  let page: HskPage;

  beforeEach(() => {
    page = new HskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
