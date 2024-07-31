MathJax = {
    tex: {
        inlineMath: [['\\(', '\\)']],
        displayMath: [['$$', '$$']],
        processEscapes: true,
        // packages: {'[+]': ['color']},
    },
    options: {
        renderActions: {
            assistiveMML: ['assistive-mml', MathJax._.a11y.A11yUtil.assistiveMML]
        }
    },
    svg: {
        scale: 1,
        minScale: 0.5,
        exFactor: 0.5,
        displayAlign: 'center',
        displayIndent: '0',
        fontCache: 'global',
        internalSpeechTitles: true,
        titleID: 0
    },
    startup: {
        ready() {
            MathJax.startup.defaultReady();
        }
    }
};