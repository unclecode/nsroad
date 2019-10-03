/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
const application = require("tns-core-modules/application");
const applicationSettings = require("tns-core-modules/application-settings");

application.on(application.launchEvent, (args)=>{
    if (args.android) {
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        console.log("Launched iOS application with options: " + args.ios);
    }
})
application.on(application.suspendEvent, (args) => {
    if (args.android) {
        console.log("Activity: Suspend " + args.android);
    } else if (args.ios) {
        console.log("UIApplication: Suspend " + args.ios);
    }
});

application.on(application.resumeEvent, (args) => {
    if (args.android) {
        console.log("Activity: Resumed " + args.android);
    } else if (args.ios) {
        console.log("UIApplication: Resumed " + args.ios);
    }
});

application.on(application.displayedEvent, (args) => {
    console.log("displayedEvent");
});

application.on(application.orientationChangedEvent, (args) => {
    console.log(args.newValue); // "portrait", "landscape", "unknown"
});


application.on(application.exitEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: Exit " + args.android);
        if (args.android.isFinishing()) {
            console.log("Activity: " + args.android + " is exiting");
        } else {
            console.log("Activity: " + args.android + " is restarting");
        }
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: Exit " + args.ios);
    }
});


applicationSettings.setString("token", "123456")
application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
