(function (canvasId) {
    var canvas = {canvas: document.getElementById(canvasId)};

    // TODO(MMD): Move turbolenz initialization into separate function.
    TurbulenzEngine = WebGLTurbulenzEngine.create(canvas);
       
    var graphicsDevice = TurbulenzEngine.createGraphicsDevice({});
})("mainCanvas");