import { Angular2NodeTemplatePage } from './app.po';

describe('angular2-node-template App', function() {
  let page: Angular2NodeTemplatePage;

  beforeEach(() => {
    page = new Angular2NodeTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
