(function ($) {
    $(document).ready(function () {
        $.jScrollability([
            {
                'selector': '.first-wine div img',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'right': {
                        'start': 200,
                        'end': 0,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.second-wine div img',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'left': {
                        'start': 200,
                        'end': 0,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.third-wine div img',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'right': {
                        'start': 200,
                        'end': 0,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.fourth-wine div img',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'left': {
                        'start': 200,
                        'end': 0,
                        'unit': '%'
                    }
                }
            }
        ]);
    });
})(jQuery);