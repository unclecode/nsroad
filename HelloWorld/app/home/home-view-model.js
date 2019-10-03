const observableModule = require("tns-core-modules/data/observable");
const applicationSettings = require("tns-core-modules/application-settings");
function HomeViewModel() {
    const viewModel = observableModule.fromObject({
        token: applicationSettings.getString("token") || "nothing"
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = HomeViewModel;
