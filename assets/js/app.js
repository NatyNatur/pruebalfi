(function ($) {
    $(document).ready(function () {
        $.jScrollability([{
                'selector': '.first-wine div img',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'right': {
                        'start': 50,
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
                        'start': 50,
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
                        'start': 50,
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
                        'start': 50,
                        'end': 0,
                        'unit': '%'
                    }
                }
            }
        ]);
    });
})(jQuery);


function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}