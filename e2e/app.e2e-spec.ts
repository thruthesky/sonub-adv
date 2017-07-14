import { SonubAdvPage } from './app.po';

describe('sonub-adv App', () => {
  let page: SonubAdvPage;

  beforeEach(() => {
    page = new SonubAdvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
