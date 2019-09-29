# nsroad
Step 1: Create a project
`tns create HelloWorld --template tns-template-blank`
`cd HelloWorld`
`code .`
`tns preview`

Step 2: Follow tutotrial to add the image and animated css
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


Step 4:
Add `pageLoaded` event to Page and test `console.log` also seems best way to debug is using `debugger` tag!


