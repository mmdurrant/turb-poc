var GameContext = (function (canvasId, errorContentId) {
	var errorContent = document.getElementById(errorContentId);
	
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
		try {
			var canvas = {canvas: document.getElementById(canvasId)};
			safeSet(ctx, undefined, "canvas");
			TurbulenzEngine = WebGLTurbulenzEngine.create(canvas);
			safeSet(ctx, TurbulenzEngine, "engine");
			var gdc = TurbulenzEngine.createGraphicsDevice({});
			safeSet(ctx, gdc, "gdc")
		}
		catch (ex) {
			var errors = []
			errors.push(ex)
			displayErrors(errorContent, errors)
		}
	}

	function displayErrors(elem, errors) {
		msg = ""

		while (errors && errors.length > 0) {
			error = errors.pop();
			msg += (error + "<br>");
		}
		
		elem.innerHTML = msg;
		elem.display = msg.length > 0 ? elem.display : "none";
	}
	
	initContext(gameContext)
	return gameContext;
})("mainCanvas", "errorContent");