/*jshint jquery:true */

define(
    [   'util'],
    function(util) {

        var assetCache      = {};
        var loadedBundles   = {};

        var assets      = {};

        /*  Helper function that handles asynchronous asset loading & calls
            callback on completion */
        assets.load = function(bundleIdentifier, assetManifest, completeCallback, progressCallback) {

            if(!(bundleIdentifier in loadedBundles)) {
                var assetArr    = {};
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

                assetCache  = $.extend(assetCache, assetArr);
                loadedBundles[bundleIdentifier] = true;
            }
        };

        assets.get  = function(ns) {
            var asset;

            if(ns in assetCache) {
                asset   = assetCache[ns];
            }

            return asset;
        };

        return assets;
    }
);
