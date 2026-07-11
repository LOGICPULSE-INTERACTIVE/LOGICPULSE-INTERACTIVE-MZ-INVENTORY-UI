"use strict";

window.LOGICPULSE = window.LOGICPULSE || {};

//=============================================================================
// Animator
//=============================================================================

LOGICPULSE.Animator = {

    _animations: [],

    //--------------------------------
    // Update
    //--------------------------------

    update() {

        for (const animation of this._animations) {

            if (!animation.target || animation.target.destroyed) {

                continue;

            }

            switch (animation.type) {

                case "pulse":

                    this.updatePulse(animation);

                    break;

            }

        }

    },

    //--------------------------------
    // Pulse
    //--------------------------------

    pulse(target, options = {}) {

        if (!target) {

            return;

        }

        const existing = this._animations.find(

            animation =>

                animation.target === target &&
                animation.type === "pulse"

        );

        if (existing) {

            return;

        }

        target.alpha = options.max ?? 1.0;

        this._animations.push({

            type: "pulse",

            target: target,

            min: options.min ?? 0.35,

            max: options.max ?? 1.0,

            speed: options.speed ?? 0.02,

            direction: -1

        });

    },

    //--------------------------------
    // Stop
    //--------------------------------

    stop(target) {

        this._animations = this._animations.filter(

            animation => animation.target !== target

        );

        if (target) {

            target.alpha = 1.0;

        }

    },

    //--------------------------------
    // Clear
    //--------------------------------

    clear() {

        for (const animation of this._animations) {

            if (animation.target) {

                animation.target.alpha = 1.0;

            }

        }

        this._animations = [];

    },

    //--------------------------------
    // Pulse Update
    //--------------------------------

    updatePulse(animation) {

        animation.target.alpha +=

            animation.speed * animation.direction;

        if (animation.target.alpha <= animation.min) {

            animation.target.alpha = animation.min;

            animation.direction = 1;

        }

        else if (animation.target.alpha >= animation.max) {

            animation.target.alpha = animation.max;

            animation.direction = -1;

        }

    }

};

//=============================================================================
// Scene Hook
//=============================================================================

(() => {

    const aliasUpdate = Scene_Base.prototype.update;

    Scene_Base.prototype.update = function() {

        aliasUpdate.call(this);

        LOGICPULSE.Animator.update();

    };

})();