/**
 * Simulates the orbital movement of a given Three.js object (subsystem) in a 3D environment.
 * Takes into account various physics and geometry parameters defined in the object.
 *
 * @param {THREE.Mesh} subsystem - The Three.js mesh object that represents the celestial body to navigate.
 * @param {boolean} subsystem.isMesh - Indicates if the object is a mesh.
 * @param {Object} subsystem.physics - Object containing physics properties of the subsystem.
 * @param {number} subsystem.physics.rotation - Rotation speed of the celestial body around its own axis.
 * @param {number} subsystem.physics.initialRotation - Initial rotation angle in radians for orbit calculation.
 * @param {number} subsystem.physics.distance - Distance from the parent celestial body.
 * @param {number[]} subsystem.physics.axises - Array of semi-axises for the orbital ellipse [a, b].
 * @param {number} subsystem.physics.translation - Optional Y-axis translation for the orbit.
 * @param {number} subsystem.physics.inclination - Inclination angle in degrees for the orbit.
 */
export default function navigateOrbits(subsystem) {
	if (subsystem.isMesh) {
		// Increment rotation angle based on rotation speed.
		subsystem.rotation.y += subsystem.physics.rotation;

		// Calculate new positions in 2D plane (x, z)
		const x =
			Math.sin(subsystem.rotation.y + subsystem.physics.initialRotation) *
			subsystem.physics.distance *
			subsystem.physics.axises[0];

		const z =
			Math.cos(subsystem.rotation.y + subsystem.physics.initialRotation) *
			subsystem.physics.distance *
			subsystem.physics.axises[1];

		// Get the inclination angle in radians.
		const inclination = (subsystem.physics.inclination || 0) * (Math.PI / 180);

		// Rotate (x, z) position around x-axis by inclination angle to get final 3D position.
		subsystem.position.x = x;

		// Apply orbit translation on the Y-axis if available
		const translationY = subsystem.physics.translation || 0;

		subsystem.position.y = Math.sin(inclination) * z + translationY;
		subsystem.position.z = Math.cos(inclination) * z;
	}
}

// 2D plane version
// function navigateOrbits(subsystem) {
// 	if (subsystem.isMesh) {
// 		subsystem.rotation.y += subsystem.physics.rotation;
// 		subsystem.position.x =
// 			Math.sin(subsystem.rotation.y) * subsystem.physics.distance * subsystem.physics.axises[0];
// 		subsystem.position.z =
// 			Math.cos(subsystem.rotation.y) * subsystem.physics.distance * subsystem.physics.axises[1];
// 	}
// }
