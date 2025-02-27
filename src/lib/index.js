export function implementThroughViewTransitions(cb) {
	if (document.startViewTransition) {
		document.startViewTransition(cb);
	} else {
		cb();
	}
}
