import * as THREE from 'three';
import createLight from './lights';
import { satellites } from '../stores';

//lights
const lights = createLight();

//making scene
const scene = new THREE.Scene();

//adding objects to scene
scene.add.apply(scene, lights);

// ! This must be run only during development. Output is logged and then copied to the stores
// let textureMap = '[';

/**
 * Process an array of satellite objects to create a mesh hierarchy of stars, planets, and moons.
 * Adds these mesh hierarchies to a given scene.
 *
 * * Working with arrays and reducing calls on add by calling it as an array improves performance
 * * Accessing the moon mesh: satelliteMeshes[0].children[0].children[0]
 * TODO - Abstract this to createSatellitesRecursively.js
 *
 * @param {Array} satellites - An array of satellite objects, each object potentially containing child satellites.
 * @see createSatellite() - Method to create mesh for a satellite
 */
satellites.map((satellite) => {
	const starSystemMesh = createSatellite(satellite);
	const planets = [];

	satellite.satellites.forEach((planet) => {
		const planetMesh = createSatellite(planet);
		const moons = [];

		if (planet.satellites.length > 0) {
			planet.satellites.forEach((moon) => {
				const moonMesh = createSatellite(moon);
				moons.push(moonMesh);
			});
			planetMesh.add.apply(planetMesh, moons);
		}
		planets.push(planetMesh);
	});
	starSystemMesh.add.apply(starSystemMesh, planets);
	scene.add(starSystemMesh);
});

/**
 * Creates a new satellite mesh object based on the input satellite data.
 * The function configures the mesh geometry, material, and various physical parameters.
 * @param {Object} satellite containing all the information needed to create a mesh and attach physics attributes
 * @returns {THREE.Mesh}
 */
function createSatellite(satellite) {
	const newSatellite = new THREE.Mesh(satellite.geometry, satellite.material);
	newSatellite.scale.setScalar(satellite.radiusRatio);

	newSatellite.receiveShadow = true;

	newSatellite.position.x = satellite.distance * Math.cos(satellite.initialRotation);
	newSatellite.position.z = satellite.distance * Math.sin(satellite.initialRotation);

	newSatellite.name = satellite.name;
	newSatellite.physics = {
		speed: satellite.speed,
		rotation: satellite.rotation,
		distance: satellite.distance,
		radius: satellite.radius,
		axises: satellite.semiAxises,
		translation: satellite.orbitTranslationY,
		inclination: satellite.orbitInclination,
		initialRotation: satellite.initialRotation
	};

	// ! This must be run only during development. Output is logged in satellites.map and then copied to the stores
	// textureMap += `["${satellite.name}", "${
	// 	satellite.name.charAt(0).toLowerCase() + satellite.name.slice(1) + 'T.png'
	// }"],`;

	return newSatellite;
}

// ! This must be run only during development. Output is logged in satellites.map and then copied to the stores
// console.warn(
// 	'%cDeactivate texture-mapping and copy the map to the stores. This is not a production code!',
// 	'color:red; font-size: 1.5em;'
// );
// console.log(textureMap + ']');

//export the scene
export default scene;
