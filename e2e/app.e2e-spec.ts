import { LazyloadPage } from './app.po';

describe('lazyload App', () => {
  let page: LazyloadPage;

  beforeEach(() => {
    page = new LazyloadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
