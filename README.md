# AWS CLI SSO Login Button Clicker

When you do `aws sso login` with the [AWS CLI](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sso/login.html), you're prompted to click
a few buttons in your browser to authenticate. This extension clicks
the buttons for you to save time when you're doing this frequently.

## Installation

1. Clone this repository
2. Open Chrome and go to [`chrome://extensions`](chrome://extensions)
3. Enable Developer Mode
4. Click "Load Unpacked" and select the directory where you cloned this repository

Now when you run `aws sso login`, this extension will detect the login
and automatically click the buttons for you.
