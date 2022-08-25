window.EXTERNAL_CONFIGS = {
    TAP_TO_START: false,

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
        MAIN: { IN: 500, OUT: 400 },
        GAME: { IN: 500, OUT: 400 }
    },

    POPUP_TWEEN_TIME: {
        DEFAULT: { IN: 400, OUT: 300 }
    },

    GAME_AREA: {
        WIDTH: 720,
        HEIGHT: 960,
        x: 0,
        y: 25
    },

    GRID_SETTINGS: {
        ROW: 10,
        COL: 10
    },

    TILE_SETTINGS: {
        WIDTH: 64,
        HEIGHT: 64
    },

    MIN_BUBBLE_TO_POP: 5,
    BUBBLE_SPAWN_PER_MOVE: 3,
    BUBBLE_TYPES: [3, 4, 5]
};

/**
 * @usage
 * dl.resources.getConfig("TEXT_COLOR", "DEFAULT");
 */