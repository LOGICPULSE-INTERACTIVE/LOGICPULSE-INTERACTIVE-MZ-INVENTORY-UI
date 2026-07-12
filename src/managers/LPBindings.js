"use strict";

window.LOGICPULSE = window.LOGICPULSE || {};

//=============================================================================
// Input Bindings
//=============================================================================

LOGICPULSE.Bindings = Object.freeze({

    MoveLeft: Object.freeze({

        action: "moveLeft",
        key: "left",
        name: "Move Left"

    }),

    MoveRight: Object.freeze({

        action: "moveRight",
        key: "right",
        name: "Move Right"

    }),

    MoveUp: Object.freeze({

        action: "moveUp",
        key: "up",
        name: "Move Up"

    }),

    MoveDown: Object.freeze({

        action: "moveDown",
        key: "down",
        name: "Move Down"

    }),

    Confirm: Object.freeze({

        action: "confirm",
        key: "ok",
        name: "Confirm"

    }),

    Cancel: Object.freeze({

        action: "cancel",
        key: "cancel",
        name: "Cancel"

    }),

    NextCategory: Object.freeze({

        action: "nextCategory",
        key: "tab",
        name: "Next Category"

    }),

    PreviousCategory: Object.freeze({

        action: "previousCategory",
        key: "tab",
        modifier: "shift",
        name: "Previous Category"

    })


});