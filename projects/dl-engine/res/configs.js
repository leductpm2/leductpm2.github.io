window.EXTERNAL_CONFIGS = {
    TAP_TO_START: false,
    MORE_GAME_REDIRECT: "https://leductpm2.github.io/",

    TEXT_COLOR: {
        DEFAULT: "#3c3c78",
        INPUT_TEXT: "#3c3c78",
        BUTTON_TEXT: "#3c3c78",
        POPUP_TITLE: "#3c3c78"
    },

    Z_INDEX: {
        BACKGROUND: -10000,
        DEFAULT: 0,
        UI: 10000,
        POPUP: 20000,
        NOTIFICATION: 30000
    },

    SCENE_TWEEN_TIME: {
        DEFAULT: { IN: 400, OUT: 300 },
        MAIN: { IN: 400, OUT: 300 },
        GAME: { IN: 400, OUT: 300 }
    },

    POPUP_TWEEN_TIME: {
        DEFAULT: { IN: 400, OUT: 300 }
    },

    GAME_AREA: {
        WIDTH: 720,
        HEIGHT: 1000,
        x: 0,
        y: 0
    },
};

/**
 * @usage
 * dl.resources.getConfig("TEXT_COLOR", "DEFAULT");
 */