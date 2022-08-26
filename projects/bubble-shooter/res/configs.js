window.EXTERNAL_CONFIGS = {
    TAP_TO_START: false,
    MORE_GAME_REDIRECT: "https://leductpm2.github.io/",

    TEXT_COLOR: {
        DEFAULT: "#3c3c78",
        INPUT_TEXT: "#3c3c78",
        BUTTON_TEXT: "#3c3c78",
        POPUP_TITLE: "#3c3c78",
        FLYING_SCORE: "#ffffff",
        SCORE: "#ffffff",
        COUNT_DOWN: "#ffffff",
        BLACK: "#000000",
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

    DESIGN_RESOLUTION: {
        WIDTH: 720,
        HEIGHT: 1280
    },

    GAME_AREA: {
        WIDTH: 720 - 16,
        HEIGHT: 1080,
        x: 0,
        y: 50
    },

    GRID_SETTINGS: {
        WIDTH: 720,
        HEIGHT: 768 + 32,
        COL: 11,
        ROW: 17,
        START_OFFSET_ROW: 8,
        MOVE_SPEED: 20
    },

    TILE_SIZE: {
        x: 64,
        y: 64
    },

    TILE_OFFSET_Y: 0.85,
    BUBBLE_SPEED: 2000,
    BUBBLE_DROP_START_SPEED: 500,
    BUBBLE_DROP_GRAVITY: 1000,
    NUMBER_BUBBLE_TO_POP: 3,
    RANDOM_POOL_MULTIPLE: 3,
    MAX_BUBBLE_TYPE: 3,
    COUNT_DOWN_TIME: 3000,
    POP_DELAY_TIME: 35,
};

/**
 * @usage
 * dl.resources.getConfig("TEXT_COLOR", "DEFAULT");
 */