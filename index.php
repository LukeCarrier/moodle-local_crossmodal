<?php

use local_crossmodal\util;

require dirname(dirname(__DIR__)) . '/config.php';

/** @var \stdClass      $CFG */
/** @var \core_renderer $OUTPUT */
/** @var \moodle_page   $PAGE */

$PAGE->set_context(context_system::instance());
$PAGE->set_url(new moodle_url('/local/crossmodal/index.php'));

$module = version_compare($CFG->release, '3.3', '>=')
        ? 'modal' : 'legacy_modal';
$PAGE->requires->js_call_amd(
        sprintf('%s/%s-lazy', util::MOODLE_COMPONENT, $module), 'init',
        array(array(
            'triggerSelector' => '#clicky-here',
        )));

echo
    $OUTPUT->header(),
    $OUTPUT->heading(new lang_string('pluginname', util::MOODLE_COMPONENT)),
    html_writer::tag(
            'button', new lang_string('clickyhere', util::MOODLE_COMPONENT),
            array(
                'id' => 'clicky-here',
                'style' => implode('; ', array(
                    'font-size: 75em',
                    'line-height: 0.75em',
                )),
    )),
    $OUTPUT->footer();
