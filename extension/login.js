
const DEBUG = true;
const DELAY = 750;

const LAST_PAGE_TEXT = new RegExp(/you can close this window/i);
const BTN_ALLOW = new RegExp(/Allow/);
const BTN_LOGIN_ETC = new RegExp(/login|cli_verification_btn/);
const print = (o) => (DEBUG && console.log(o?.innerHTML ?? o, window.location.href)) && o || o;
const thereYet = () => document.body.innerText.match(LAST_PAGE_TEXT);

function tryClick(ms = undefined) {
  if (ms) {
    print('trying');
    for (const btn of document.getElementsByTagName('button')) {
      if (btn && (btn.innerText.match(BTN_ALLOW) || !!btn.id?.match(BTN_LOGIN_ETC))) {
        print({ btn, form: btn.form });
        btn.click();
      }
    }
    print('tried');
  }

  setTimeout(() => thereYet() || tryClick(DELAY), ms);
}

tryClick();

