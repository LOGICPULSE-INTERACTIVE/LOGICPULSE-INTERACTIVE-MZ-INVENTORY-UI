"use strict";

window.LOGICPULSE = window.LOGICPULSE || {};
LOGICPULSE.UI = LOGICPULSE.UI || {};

//=============================================================================
// Synthesizer Grid Slot
//=============================================================================

LOGICPULSE.UI.SynthesizerGridSlot = class extends LOGICPULSE.UI.InventoryGridSlot {

    constructor(options = {}) {
        super(options);
        this._lastClickTime = null; // for double-click detection
    }

    create() {
        super.create();
        this.createSelectedFrame();
        this.refreshCraftState();
    }

    createSelectedFrame() {
        this._selectedFrame = new Sprite(
            LOGICPULSE.Assets.load(
                LOGICPULSE.Assets.Folders.Synthesizer,
                LOGICPULSE.Assets.Images.Synthesizer.SelectedFrame
            )
        );
        this._selectedFrame.visible = false;
        this.addChildAt(this._selectedFrame, 0);
    }

    setCraftSelected(selected) {
        this._craftSelected = selected;
        if (this._selectedFrame) {
            this._selectedFrame.visible = selected;
        }
        this.updateSelection();
    }

    selectionFrameAsset() {
        return {
            folder: LOGICPULSE.Assets.Folders.Synthesizer,
            image: LOGICPULSE.Assets.Images.Synthesizer.SelectionFrame
        };
    }

    refreshCraftState() {
        const craftable = LOGICPULSE.RecipeManager.canCraft(this.item());
        this.setLocked(!craftable);
        this.applyDisabledStyle(!craftable);
    }

    applyDisabledStyle(disabled) {
        const alpha = disabled ? 0.45 : 1.0;
        const tint = disabled ? 0x808080 : 0xFFFFFF;
        if (this._background) {
            this._background.alpha = alpha;
            this._background.tint = tint;
        }
        if (this._icon) {
            this._icon.alpha = alpha;
            this._icon.tint = tint;
        }
        if (this._amountText) {
            this._amountText.alpha = alpha;
        }
    }

    // ============================================================
    //  Override _onMouseUp to detect double-click
    // ============================================================
    _onMouseUp(button, x, y) {
        if (this._isDestroyed || this.destroyed) return;
        if (!this._isMouseDown) return;
        this._isMouseDown = false;
        if (this._background) this._background.alpha = 1.0;

        if (this._isDragging) {
            this._onDragEnd(x, y);
            this._isDragging = false;
            return;
        }

        const dx = x - this._mouseDownX;
        const dy = y - this._mouseDownY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 5) {
            const now = Date.now();
            if (this._lastClickTime && (now - this._lastClickTime) < 300) {
                // Double-click detected!
                this._lastClickTime = null;

                // Trigger craft mode via the controller
                const scene = SceneManager._scene;
                if (scene && scene._controller && typeof scene._controller.onConfirm === 'function') {
                    scene._controller.onConfirm();
                }
                return; // Don't fire single-click
            } else {
                this._lastClickTime = now;
                this._triggerEvent('click', [button, x, y]);
            }
        }
    }
};