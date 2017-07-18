import { IntelligoGroupPage } from './app.po';

describe('intelligo-group App', () => {
  let page: IntelligoGroupPage;

  beforeEach(() => {
    page = new IntelligoGroupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
