define([
    'jquery',
    'core/modal_factory',
    'core/notification',
    'core/templates'
], function($, ModalFactory, Notification, Templates) {
    var MOODLE_COMPONENT = 'local_crossmodal';
    var DEFAULTS = {
        triggerSelector: null
    };
    var $trigger;

    return {
        init: function(options) {
            options = $.extend(DEFAULTS, options);
            $trigger = $(options.triggerSelector);

            Templates.render(MOODLE_COMPONENT + '/body', {})
                .done(function(body) {
                    ModalFactory.create({
                        title: 'It works!',
                        body: body
                    }, $trigger);
                })
                .fail(Notification.exception);
        }
    };
});
