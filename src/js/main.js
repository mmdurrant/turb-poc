var GameContext = (function (canvasId) {
	var gameContext = {
		"canvas": null,
		"engine": null,
		"gdc": null
	}
	
	function safeSet(obj, src, key) {
		if (!obj) {
			throw "safeSet(): obj must be specified";
		}
		if (!src) {
			throw "safeSet(): src must be specified for assignment to obj";
		}
		
		obj[key] = src;
	}
	// setup basic game context.
	// TODO(mmdurrant) Refactor these in to private vars.
	
	function initContext(ctx) {
		var canvas = {canvas: document.getElementById(canvasId)};
		safeSet(ctx, canvas, "canvas");
		TurbulenzEngine = WebGLTurbulenzEngine.create(canvas);
		safeSet(ctx, TurbulenzEngine, "engine");
		var gdc = TurbulenzEngine.createGraphicsDevice({});
		safeSet(ctx, gdc, "gdc")
	}
	
	initContext(gameContext)
	return gameContext;
})("mainCanvas");