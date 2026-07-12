"use strict";

window.LOGICPULSE = window.LOGICPULSE || {};

//=============================================================================
// Input Manager
//=============================================================================

LOGICPULSE.Input = {

    //--------------------------------
    // Triggered
    //--------------------------------

    isTriggered(binding) {

        if (!binding) {

            return false;

        }

        if (

            binding.modifier &&

            !Input.isPressed(binding.modifier)

        ) {

            return false;

        }

        return Input.isTriggered(

            binding.key

        );

    },

    //--------------------------------
    // Repeated
    //--------------------------------

    isRepeated(binding) {

        if (!binding) {

            return false;

        }

        if (

            binding.modifier &&

            !Input.isPressed(binding.modifier)

        ) {

            return false;

        }

        return Input.isRepeated(

            binding.key

        );

    },

    //--------------------------------
    // Pressed
    //--------------------------------

    isPressed(binding) {

        if (!binding) {

            return false;

        }

        if (

            binding.modifier &&

            !Input.isPressed(binding.modifier)

        ) {

            return false;

        }

        return Input.isPressed(

            binding.key

        );

    },

    //--------------------------------
    // Binding Key
    //--------------------------------

    key(binding) {

        return binding?.key ?? "";

    },

    //--------------------------------
    // Binding Name
    //--------------------------------

    name(binding) {

        return binding?.name ?? "";

    }

};