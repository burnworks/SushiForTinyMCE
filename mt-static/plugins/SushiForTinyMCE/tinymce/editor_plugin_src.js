/**
 * editor_plugin_src.js
 *
 * Copyright 2014, Yoshimi Yoshizawa (hibiki443)
 * Released under LGPL License.
 *
 */

/**
 * modified by 2014-06-02 yoshiki kato (burnworks)
 */


/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function(tinymce) {
	tinymce.create('tinymce.plugins.SushiPlugin', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('mceSushi', function() {
				ed.windowManager.open({
					file : url + '/sushi.html',
					width : 250 + parseInt(ed.getLang('sushi.delta_width', 0)),
					height : 160 + parseInt(ed.getLang('sushi.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url
				});
			});

			// Register buttons
			ed.addButton('sushi', {
                title: '\u5bff\u53f8\u3086\u304d',
				cmd : 'mceSushi'
			});
		},

		getInfo : function() {
			return {
				longname : 'TinyMCE Sushiyuki Plugin',
				author : 'Yoshiki kato',
				authorurl : 'http://hyper-text.org/',
				infourl : 'https://github.com/burnworks/SushiForTinyMCE',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('sushi', tinymce.plugins.SushiPlugin);
})(tinymce);