Johns Creek High School FBLA submission for Website Design 2018 - 2019

JCHS Accuracy was designed with the latest in HTML, CSS and Javascript technologies. This allowed us to add advanced Progressive Web App (https://developers.google.com/web/progressive-web-apps/) functionality to the website. JCHS Accuracy is hosted with Googles Firebase (https://firebase.google.com/) platform and takes advantage of their advanced caching features to provide offline browsing functionality (to an extent). JCHS Accuracy also leverages Google CDN (https://cloud.google.com/cdn/) to provide fast low-latency content delivery. 

Note: To improve overall website loading times we have minified (https://www.imperva.com/learn/performance/minification/) our code using the Google Polymer CLI toolkit (https://polymer-library.polymer-project.org/3.0/docs/tools/polymer-cli) but have kept the code hosted here unminified (to view minified code enter into the "~/build/production" directory of this repository. To view our polymer configuration view the "polymer.json" file in the main directory.

Build: To build/ test code clone this project and install the Polymer CLI (https://github.com/Polymer/tools/tree/master/packages/cli). CD into the directory and run "polymer build" or if on Linux Based systems you can run the "produce.sh" script to run the process automatically. To spawn a local web server for testing the code run "polymer serve --open" this will open the webpage in your default browser.

Publically Available Link: https://jchsaccuracy.firebaseapp.com/

Note: JCHS Accuracy makes use of Javascript and Browser Cookies to enhance/ provide the functionality of certian features such as our Accessibilities Tool Menu (Font Scaling Tool, Translations, Color Switcher) and Cookie Concent Form (To make sure it is only displayed once).
