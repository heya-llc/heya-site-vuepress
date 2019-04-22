import VueGtm from 'vue-gtm';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
    }) => {
    // ...apply enhancements to the app

    Vue.use(VueGtm, {
        id: 'GTM-5NXFLKJ', // Your GTM ID
        enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
        debug: true, // Whether or not display console logs debugs (optional)
        vueRouter: router, // Pass the router instance to automatically sync with router (optional)
        // ignoredViews: ['homepage'] // If router, you can exclude some routes name (case insensitive) (optional)
    });
}