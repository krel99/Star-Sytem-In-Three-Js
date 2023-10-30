import * as THREE from 'three';

/**
 * Creates a new WebGLRenderer instance and sets its size and pixel ratio.
 *
 * @param {HTMLElement} canvas - The canvas element to use for rendering.
 * @param {number} width - The width of the renderer.
 * @param {number} height - The height of the renderer.
 * @param {number} pixelRatio - The pixel ratio of the renderer.
 * @returns {THREE.WebGLRenderer} The newly created renderer instance.
 */

export function createRenderer(canvas, width, height, pixelRatio) {
	const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
	renderer.setSize(width, height);
	renderer.setPixelRatio(Math.min(pixelRatio, 2));
	return renderer;
}

/**
 * Updates the size of an existing renderer instance.
 *
 * @param {number} width - The new width of the renderer.
 * @param {number} height - The new height of the renderer.
 * @param {THREE.WebGLRenderer} renderer - The renderer instance to update.
 */

export function updateRenderer(width, height, renderer) {
	renderer.setSize(width, height);
}
