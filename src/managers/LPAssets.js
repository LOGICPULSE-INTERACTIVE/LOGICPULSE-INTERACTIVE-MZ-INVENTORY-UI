//=============================================================================
// LPAssets.js (plugin-specific folders/images & parameters)
//=============================================================================

// Augment core's Assets with our own folders and images
LOGICPULSE.Assets.Folders = LOGICPULSE.Assets.Folders || {};
LOGICPULSE.Assets.Folders.Inventory = "img/LOGICPULSE_INTERACTIVE UI/INVENTORY_UI/";
LOGICPULSE.Assets.Folders.Sidebar = "img/LOGICPULSE_INTERACTIVE UI/INVENTORY_UI/Sidebar/";
LOGICPULSE.Assets.Folders.Items = "img/LOGICPULSE_INTERACTIVE UI/Items/";
LOGICPULSE.Assets.Folders.Showcase = "img/LOGICPULSE_INTERACTIVE UI/Items_Show_Case/";
LOGICPULSE.Assets.Folders.Synthesizer = "img/LOGICPULSE_INTERACTIVE UI/INVENTORY_UI/Synthesizer/";

LOGICPULSE.Assets.Images = LOGICPULSE.Assets.Images || {};
LOGICPULSE.Assets.Images.Inventory = {
    Background: "Background",
    Showcase: "Item Showcase Box",
    UseButtonIdle: "Use Button Idle",
    UseButtonHover: "Use Button Hover",
    ItemBoxCommon: "Item Box Common",
    ItemBoxRare: "Item Box Rare",
    ItemBoxLegendary: "Item Box Legendary",
    SelectionFrame: "Selection Frame"
};
LOGICPULSE.Assets.Images.Sidebar = {
    Box: "Sidebar box",
    ConsumableIdle: "Sidebar Consumable Tab Idle",
    ConsumableHover: "Sidebar Consumable Tab Hover",
    ConsumableHeader: "Frame Consumables",
    MaterialIdle: "Sidebar Material Tab Idle",
    MaterialHover: "Sidebar Material Tab Hover",
    MaterialHeader: "Frame Materials",
    KeyMaterialIdle: "Sidebar Key Materials Tab Idle",
    KeyMaterialHover: "Sidebar Key Materials Tab Hover",
    KeyMaterialHeader: "Frame Key Materials",
    SynthesizerIdle: "Sidebar Synthesizer Tab Idle",
    SynthesizerHover: "Sidebar Synthesizer Tab Hover",
    SynthesizerHeader: "Frame Synthesizer",
    KeyboardTABKeyIdle: "Sidebar Tab keyboard Key Idle",
    KeyboardTABKeyHover: "Sidebar Tab keyboard Key Hover"
};
LOGICPULSE.Assets.Images.Synthesizer = {
    Background: "Background",
    Showcase: "Item Showcase Box",
    SynthesizeTip: "Tip",
    RecipeItemBoxes: "Empty Item boxes",
    ItemDecreaseInactive: "Item Decrease Arrow Inactive",
    ItemDecreaseActive: "Item Decrease Arrow Active",
    ItemIncreaseInactive: "Item Increase Arrow Inactive",
    ItemIncreaseActive: "Item Increase Arrow Active",
    SynthesizeHover: "Synthesize Button Hover",
    SynthesizeIdle: "Synthesize Button Idle",
    SelectedFrame: "Selected Frame",
    SelectionFrame: "Selection Frame"
};

// Plugin-specific parameters – we keep the original LPParameters.js logic,
// but we need to ensure it uses the augmented Layout.
// No need to store params here; LPParameters will handle them.