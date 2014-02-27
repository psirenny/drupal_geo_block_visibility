(function ($) {
  /**
   * Provide the summary information for the Geo Block Visibility settings
   * vertical tab.
   */
  Drupal.behaviors.GeoBlockVisibilitySettingsSummary = {
    attach: function (ctx) {
      $('fieldset#edit-geolocation', ctx).drupalSetSummary(function (ctx) {
        // if a country is selected
        if ($('.form-item-countries input[type=checkbox]:checked', ctx).val()) {
          return Drupal.t('Restricted to certain countries');
        }

        return Drupal.t('Not restricted');
      });
    }
  };
})(jQuery);