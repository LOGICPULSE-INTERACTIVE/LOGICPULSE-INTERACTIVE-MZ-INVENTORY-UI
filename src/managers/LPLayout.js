//=============================================================================
// LPLayout.js
//=============================================================================

LOGICPULSE.Layout = LOGICPULSE.Layout || {};

LOGICPULSE.Layout.Inventory = {
    Grid: {
        rect: { x: 82, y: 118, width: 768, height: 576 },
        mask: { x: 82, y: 118, width: 768, height: 576 },
        Icon: { offset: { x: 0, y: 0 } },
        columns: 8,
        itemSize: 92,
        spacingX: 96,
        spacingY: 96
    },
    Amount: {
        x: 52, y: 4,
        width: 36, height: 20,
        align: "right",
        fontSize: 18
    },
    Sidebar: {
        x: 0, y: 0,
        tabs: {
            x: 4, y: 130,
            spacing: 52,
            width: 44, height: 44
        }
    },
    Showcase: {
        Overlay: { x: 0, y: 0 },
        Frame: { x: 912, y: 144, width: 288, height: 288 },
        Item: { width: 184, height: 184, maxWidth: 184, maxHeight: 184 },
        Name: { x: 912, y: 152, width: 288, height: 32, align: "center", fontSize: 24 },
        Description: { x: 912, y: 460, width: 288, height: 160, padding: 8, fontSize: 20, lineHeight: 26 },
        Button: { x: 912, y: 640, scale: 1.0, hoverScale: 1.05, width: 288, height: 48 }
    }
};

LOGICPULSE.Layout.Synthesizer = {
    Grid: {
        rect: { x: 96, y: 192, width: 384, height: 480 },
        mask: { x: 96, y: 192, width: 384, height: 480 },
        Icon: { offset: { x: 0, y: 0 } },
        columns: 4,
        itemSize: 92,
        spacingX: 96,
        spacingY: 96
    },
    Amount: {
        x: 52, y: 4,
        width: 36, height: 20,
        align: "right",
        fontSize: 18
    },
    Showcase: {
        Overlay: { x: 0, y: 0 },
        Frame: { x: 720, y: 168, width: 288, height: 288 },
        Item: { width: 184, height: 184, maxWidth: 184, maxHeight: 184 },
        Name: { x: 720, y: 170, width: 288, height: 32, align: "center", fontSize: 24 },
        Description: { x: 528, y: 168, width: 180, height: 300, align: "center", padding: 8, fontSize: 16, lineHeight: 26 },
        Tip: { x: 1032, y: 145 },
        ItemDecrease: { x: 768, y: 600, width: 27, height: 27 },
        ItemIncrease: { x: 930, y: 600, width: 27, height: 27 },
        CurrentNumber: { x: 822, y: 598, width: 80, height: 32, align: "center", fontSize: 28 },
        MaxNumber: { x: 686, y: 194, width: 80, height: 32, align: "center", fontSize: 20 },
        Button: { x: 790, y: 650, scale: 1.0, hoverScale: 1.05, width: 160, height: 30 }
    },
    RecipeItemBoxes: {
        firstSlot: { x: 672, y: 480 },
        spacing: 96,
        Amount: { x: 52, y: 70, width: 36, height: 20, align: "right", fontSize: 18 },
        ItemName: { x: 0, y: 0, width: 92, height: 92, align: "center", fontSize: 12 }
    }
};