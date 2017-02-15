import { Ng2DeployPage } from './app.po';

describe('ng2-deploy App', function() {
  let page: Ng2DeployPage;

  beforeEach(() => {
    page = new Ng2DeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
