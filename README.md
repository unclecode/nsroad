# nsroad

**Create a project**
`tns create HelloWorld --template tns-template-blank`
`cd HelloWorld`
`code .`
`tns preview`

**Follow tutotrial to add the image and animated css**
- I changed to a local image
- Create `images` folder within the app folder
- Access to image like `~/images/wink.png`

Step 3: Debuggin

**Emulator**
LiveSync is when app is synced to NS playvgroud app on phone, while HMR happens when we run the app with emulator or device. To run app on emulator or connected device `tns run ios | android` to have HMR `tns run ios | android --hmr` which can be set as default value

```json
nsconfig.json
{
    "useLegacyWorkflow": false
}
```

**inspect**
First check https://docs.nativescript.org/tooling/debugging/debugging. 

***Chrome Dev***
Then I just run `tns debug ios` and it will gv u a chrome inspector link, open it and thats all. Doesn't hv visual element inspector but you have access and realtime you can change it. Use `debugger` to stop and work. But seems VSCODE extention is better, I am gonna try it

***VSCODE***
Install the extention, go to debug, add "Nativescript" it givs you few build mode, and just hit it! Seems fine, let see!

***CSS RELOAD ISSUE***
Happens to me that after some css changes at application module level, emulator could'nt be updated,so I had to restart the whole things, also I noticed this in JS part, seems code in app.js runs only one time, which make sense, becoz app still is running in emulator, I will try to see is it gonna be runned if i close the app in emulator and run it again!

**Page Loaded**
Add `pageLoaded` event to Page and test `console.log` also seems best way to debug is using `debugger` tag!


**Modules Types**
***Application Modules***
They are regular components and It will be a folder like `home` and it will have three files like
- home-page.xml
- home-page.css
- home-page.js

They all should be same name, and can have `-page` or `-root` postfix

```xml
<!-- home-page.xml -->
<Page class="page" loaded="onPageLoaded">
    <StackLayout>
        <Label text="Hooray! Home Page loaded!"/>
    </StackLayout>
</Page>
```
***Root Modules***
They are main UI container.
- app container: which is only one, the first one run the app, we set it by pass it to `application.run()`
- modal view container: you call them by `showModal()`

A root module can have only one component at the root of its content. the most commonly used components are the one that can have children - the layouts, TabView, SideDrawer or Frame. The Frame component can't have children, but it can display and navigate between page modules.

```xml
<!-- app-root.xml -->
<Frame loaded="onFrameLoaded" defaultPage="home-page" />
```

***Page Module***
These modules represent pages and are used by the Frame component to implement forward and backward navigation. You can pass these modules to the Frame in one of two ways:

- The `defaultPage` attribute - the page module set in this attribute will be initially shown by the Frame.
- The `navigate()` method - this method forces the Frame to hide the currently navigated page module and to show the page module passed as parameter.

**Multiplatform**
We can folloq `<file-name>[.<qualifier>]*.<extension>` to set file for releated platform, size, dimenssion.

All the values in screen size qualifiers are in density independent pixels (DP) — meaning it corresponds to the physical dimensions of the screen. The assumptions are that there are ~160 DP per inch. For example, according to Android guidelines, if the device's smaller dimension is more than 600 dp (~3.75 inches), it is probably a tablet.

- minWH<X> - The smaller dimension (width or height) should be at least X dp.
- minW<X> - Width should be at least X dp.
- minH<X> - Height should be at least X dp.

Example (separate XML file for tablet and phone):
- main-page.minWH600.xml - XML file to be used for tablet devices.
- main-page.xml - XML to be used for phones.

or platform

- app.android.css - CSS styles for Android.
- app.ios.css - CSS styles for iOS.

and Orientation

- land - orientation is in landscape mode.
- port - orientation is in portrait mode.

**Data Binding**
Simple way but seems not the best is use the `page.bindingContext`

```xml
<!-- home-page.xml-->
<Page class="page" loaded="onPageLoaded">
    <StackLayout>
        <Label text="{{source}}"/>
    </StackLayout>
</Page>
```

```js
// home-page.js
const fromObject = require("tns-core-modules/data/observable").fromObject;

function onPageLoaded(args) {
    const page = args.object;
    const source = fromObject({ text: "Hooray! Home Page loaded!" });
    page.bindingContext = source;
}
exports.onPageLoaded = onPageLoaded;
```
