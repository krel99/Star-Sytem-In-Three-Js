import * as THREE from 'three';

//Materials

// const armageddonStarM = new THREE.MeshStandardMaterial({ map: testMaterial });
const armageddonStarM = new THREE.MeshBasicMaterial();
const armageddonPlanetM = new THREE.MeshStandardMaterial();
const mannheimMoonM = new THREE.MeshStandardMaterial();
const acheronMoonM = new THREE.MeshStandardMaterial();
const gorkamorkaPlanetM = new THREE.MeshStandardMaterial();
const morkMoonM = new THREE.MeshStandardMaterial();
const gorkMoonM = new THREE.MeshStandardMaterial();
const kadiaPlanetM = new THREE.MeshStandardMaterial();

//Geometry
const genericSphere = new THREE.SphereGeometry(1, 32, 32);

export {
	armageddonStarM,
	armageddonPlanetM,
	mannheimMoonM,
	acheronMoonM,
	gorkamorkaPlanetM,
	morkMoonM,
	gorkMoonM,
	kadiaPlanetM,
	genericSphere
};
