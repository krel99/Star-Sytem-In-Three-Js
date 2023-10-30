// import { writable, derived, readable } from 'svelte/store';
import * as THREE from 'three';
import { displayWidth, displayHeight } from '$lib/stores.js';

/**
 * Creates a Three.js perspective camera and sets its position based on the provided parameters.
 *
 * @param {number} width - The width of the camera's frustum at the near plane.
 * @param {number} height - The height of the camera's frustum at the near plane.
 * @param {number} x - The x-coordinate of the camera's position.
 * @param {number} y - The y-coordinate of the camera's position.
 * @param {number} z - The z-coordinate of the camera's position.
 * @returns {THREE.PerspectiveCamera} The created Three.js perspective camera object.
 */
export default function createCamera(width, height, x, y, z) {
	const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 200);
	camera.position.set(x, y, z);
	return camera;
}
