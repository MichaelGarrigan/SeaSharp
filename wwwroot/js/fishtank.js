window.fishtank = {
    registerKeyHandler: function () {
        if (window.fishtank._registered) return;
        window.fishtank._registered = true;

        document.addEventListener("keydown", function (e) {
            const keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
            if (!keys.includes(e.key)) return;

            // Prevent page scroll
            e.preventDefault();

            DotNet.invokeMethodAsync("YourBlazorProjectAssemblyName", "MoveFish", e.key);
        });
    }
};
