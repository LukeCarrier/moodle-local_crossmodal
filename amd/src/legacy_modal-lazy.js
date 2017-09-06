define([
    'jquery',
    'core/yui',
    'core/notification',
    'core/templates'
], function($, Y, Notification, Templates) {
    var MOODLE_COMPONENT = 'local_crossmodal';
    var DEFAULTS = {
        triggerSelector: null
    };
    var $trigger;

    return {
        // it's not yui, it's me
        init: function(options) {
            options = $.extend(DEFAULTS, options);
            $trigger = $(options.triggerSelector);

            Templates.render(MOODLE_COMPONENT + '/body', {})
                .done(function(body) {
                    Y.use('moodle-core-notification', function() {
                        var modal = new M.core.dialogue({
                            headerContent: 'It works!',
                            bodyContent: body,
                            visible: false, // lies!
                            modal: false,
                            zIndex: 100,
                            closeButtonTitle: 'Close'
                        });

                        $trigger.on('click', Y.bind(modal.show, modal));
                    });
                })
                .fail(Notification.exception);
        }
    };
});
