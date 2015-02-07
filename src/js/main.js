(function (canvasId) {
	function safeSet(obj, src, key) {
		if (!obj) {
			throw "safeSet(): obj must be specified";
		}
		if (!src) {
			throw "safeSet(): src must be specified for assignment to obj";
		}
		
		obj[key] = src;
	}

	GameContext = {
		"canvas": null,
		"engine": null,
		"gdc": null
	}
	
	var canvas = {canvas: document.getElementById(canvasId)};
	safeSet(GameContext, canvas, "canvas");
	TurbulenzEngine = WebGLTurbulenzEngine.create(canvas);
	safeSet(GameContext, TurbulenzEngine, "engine");
	var gdc = TurbulenzEngine.createGraphicsDevice({});
	safeSet(GameContext, gdc, "gdc")
	
})("mainCanvas");