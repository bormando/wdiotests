import PortalPage from "./portal.page";

class ProfilePage extends PortalPage {
  get iconUser () { return $('.ant-avatar-square'); }

  async isOpen () {
    await expect(browser).toHaveUrlContaining('/profile/');
    await expect(this.iconUser).toBeDisplayed();
  }
}

export default new ProfilePage();
