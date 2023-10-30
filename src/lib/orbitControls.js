import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/**
 * Creates and configures OrbitControls for a Three.js camera object.
 * Allows users to interactively rotate, zoom, and pan the camera within a 3D scene.
 *
 * @param {THREE.PerspectiveCamera|THREE.OrthographicCamera} camera - The Three.js camera object to be controlled.
 * @param {HTMLCanvasElement} canvas - The HTML canvas element on which the 3D scene is rendered.
 * @returns {OrbitControls} - The configured OrbitControls instance.
 * @see {@link https://threejs.org/docs/#examples/en/controls/OrbitControls} for OrbitControls documentation.
 */

export default function createOrbitControls(camera, canvas) {
	const controls = new OrbitControls(camera, canvas);
	controls.enableDamping = true;
	controls.maxDistance = 300;
	controls.minDistance = 20;
	return controls;
}
