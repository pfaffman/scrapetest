(function() {
  if ('Discourse' in window && Discourse.__container__) {
    Discourse.__container__
      .lookup("service:theme-settings")
      .registerSettings(16, {"svg_icons":"star|fa-star|"});
  }
})();
(function () {
  if ('Discourse' in window && typeof Discourse._registerPluginCode === 'function') {
    var __theme_name__ = "New Like icon";
    var settings = Discourse.__container__.lookup("service:theme-settings").getObjectForTheme(16);
    var themePrefix = function themePrefix(key) {
      return 'theme_translations.16.' + key;
    };

    Discourse._registerPluginCode('0.8', function (api) {
      try {

        api.replaceIcon('d-liked', 'star');
        api.replaceIcon('d-unliked', 'star');
        api.replaceIcon('notification.liked', 'star');
        api.replaceIcon('notification.liked_2', 'star');
        api.replaceIcon('notification.liked_many', 'star');
        api.replaceIcon('notification.liked_consolidated', 'star');
        api.replaceIcon('heart', 'thumbs-up');
      } catch (err) {
        var rescue = require("discourse/lib/utilities").rescueThemeError;
        rescue(__theme_name__, err, api);
      }
    });
  }
})();