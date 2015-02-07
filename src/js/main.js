(function (canvasId) {
	function safeSet(obj, src, key) {
		if (src) {
			obj[key] = src;
		}
	}

	GameContext = {
		"canvas": null,
		"engine": null,
		"gdc": null
	}
	
	var canvas = {canvas: document.getElementById(canvasId)};
	
	if (canvas) {
		GameContext["canvas"] = canvas;
	}

	TurbulenzEngine = WebGLTurbulenzEngine.create(canvas);
	if (TurbulenzEngine) {
		GameContext["engine"] = TurbulenzEngine;
		var gdc = TurbulenzEngine.createGraphicsDevice({});
		if (gdc) {
			GameContext["gdc"] = gdc;
		}
	}
})("mainCanvas");