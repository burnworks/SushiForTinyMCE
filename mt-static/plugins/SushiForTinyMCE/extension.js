(function($) {

var config   = MT.Editor.TinyMCE.config;
var base_url = StaticURI + 'plugins/SushiForTinyMCE/';
var buttons  =
   (config.plugin_mt_wysiwyg_buttons2 || '') + ',|,sushi';

$.extend(config, {
    plugins: config.plugins + ',sushi',
    plugin_mt_wysiwyg_buttons2: buttons
});

$.extend(config.plugin_mt_inlinepopups_window_sizes, {
    '/sushi.html': {
        width: 420,
        height: 350
    }
});

})(jQuery);
