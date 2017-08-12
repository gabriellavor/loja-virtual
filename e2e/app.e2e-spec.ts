import { LojaVirtualPage } from './app.po';

describe('loja-virtual App', () => {
  let page: LojaVirtualPage;

  beforeEach(() => {
    page = new LojaVirtualPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
