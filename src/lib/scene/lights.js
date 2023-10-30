import * as THREE from 'three';

/**
 * Create light sources for a Three.js scene.
 *
 * @returns {Array} An array containing the created light sources and helper.
 *
 * Usage: const light = createLight();
 * scene.add.apply(scene, light);
 */
function createLight() {
	const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
	const pointLight = new THREE.PointLight(0xffeecc, 40, 69, 1.2);
	pointLight.position.set(0, 0, 0);
	pointLight.castShadow = true;
	return [ambientLight, pointLight];
}

export default createLight;
