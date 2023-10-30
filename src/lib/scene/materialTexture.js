import { textureLoader } from '$lib/scene/loaders';

// Importing Images
import armageddonStarT from '../texturesSatellites/armageddonStar.png';
import armageddonT from '../texturesSatellites/armageddon.png';
import mannheimT from '../texturesSatellites/mannheim.png';
import acheronT from '../texturesSatellites/acheron_1.png';
import gorkamorkaT from '../texturesSatellites/gorkaMorka_1.png';
import gorkT from '../texturesSatellites/gork_1.png';
import morkT from '../texturesSatellites/mork_1.png';
import kadiaT from '../texturesSatellites/kadia.png';

const textureMap = new Map([
	['ArmageddonStar', armageddonStarT],
	['Armageddon', armageddonT],
	['Mannheim', mannheimT],
	['Acheron', acheronT],
	['Gorkamorka', gorkamorkaT],
	['Mork', morkT],
	['Gork', gorkT],
	['Kadia', kadiaT]
]);

/**
 * Applies a texture to a given Three.js object based on its name.
 * The texture path is retrieved from a pre-defined map (`textureMap`).
 * @param {THREE.Mesh} object - The Three.js object to which the texture is to be applied.
 * @throws Will throw an error if the texture for the given object name is not found in `textureMap`
 */
export default function addMaterialTexture(object) {
	try {
		const texturePath = textureMap.get(object.name);
		if (texturePath === undefined) {
			throw new Error(`No texture found for object named ${object.name}`);
		}
		const material = textureLoader.load(texturePath);
		object.material.map = material;
		object.material.needsUpdate = true;
	} catch (error) {
		console.error(`Failed to apply texture: %c${error.message}`, 'color: red;');
	}
}
