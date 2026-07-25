//=============================================================================
// Main.js
//=============================================================================

if (!LOGICPULSE.CoreVersion) {
    throw new Error("LOGICPULSE_Core is required for this plugin.");
}

// Initialize parameters (core already loaded system assets)
if (LOGICPULSE.Parameters && typeof LOGICPULSE.Parameters.initialize === 'function') {
    LOGICPULSE.Parameters.initialize();
}

// Register plugin commands
(function() {
    var pluginName = LOGICPULSE.Version.plugin;

    PluginManager.registerCommand(
        pluginName,
        "OpenInventory",
        function() {
            SceneManager.push(LOGICPULSE.Scenes.Inventory);
        }
    );

    PluginManager.registerCommand(
        pluginName,
        "OpenSynthesizer",
        function() {
            SceneManager.push(LOGICPULSE.Scenes.Synthesizer);
        }
    );
})();