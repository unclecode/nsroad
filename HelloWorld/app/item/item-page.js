exports.goDetails = function(args){
    args.object.page.frame.navigate("details/details-page")
}

exports.goBack = function(args){
    args.object.page.frame.goBack();
}


exports.pageLoaded = function() {
    console.log("Item page loaded");
};