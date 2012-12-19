/*jshint jquery:true */

define(
    [   'util'],
    function(util) {

        var assetCache  = {};

        var assets      = {};

        /*  Helper function that handles asynchronous asset loading & calls
            callback on completion */
        assets.loadAssets = function(bundleIdentifier, assetManifest, completeCallback, progressCallback) {
            var assetArr    = {};

            if(bundleIdentifier in assetCache && assetCache.hasOwnProperty(bundleIdentifier)) {
                assetArr    = assetCache[bundleIdentifier];
            }
            else {
                var collector   = util.collector(assetManifest.length, completeCallback, progressCallback);
                for(var i = 0; i < assetManifest.length; i++) {
                    var ns              = assetManifest[i].ns;
                    delete(assetManifest[i].ns);
                    switch(assetManifest[i].type) {
                        case 'image':
                            assetArr[ns]                = assetManifest[i];
                            assetArr[ns].asset          = new Image();
                            assetArr[ns].asset.onload   = collector;
                            assetArr[ns].asset.src      = assetManifest[i].path;
                            break;

                        case 'json':
                            assetArr[ns]                = assetManifest[i];
                            collector();
                            break;

                        default:
                            throw 'Invalid type "' + assetManifest[i].type + '" provided.';
                    }
                }
            }

            return assetArr;
        };

        return assets;
    }
);
