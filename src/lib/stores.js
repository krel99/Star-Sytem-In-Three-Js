import { writable } from 'svelte/store';
import {
	armageddonStarM,
	armageddonPlanetM,
	mannheimMoonM,
	acheronMoonM,
	gorkamorkaPlanetM,
	morkMoonM,
	gorkMoonM,
	kadiaPlanetM,
	genericSphere
} from '$lib/scene/materialsAndGeometriesStore.js';

export const displayWidth = writable(600);
export const displayHeight = writable(480);
export const satellites = [
	{
		name: 'ArmageddonStar',
		radiusRatio: 1 * 2,
		distance: 0,
		speed: 0.005,
		material: armageddonStarM,
		geometry: genericSphere,
		initialRotation: Math.random() * Math.PI * 2,
		satellites: [
			{
				name: 'Armageddon',
				radiusRatio: (0.75 / 4) * 2,
				distance: 7.5,
				speed: 0.01,
				rotation: 0.002,
				semiAxises: [1, 0.95],
				material: armageddonPlanetM,
				geometry: genericSphere,
				initialRotation: Math.random() * Math.PI * 2,
				satellites: [
					{
						name: 'Mannheim',
						radiusRatio: (0.15 / 0.75) * 2,
						distance: 1.05,
						speed: 0.04,
						rotation: 0.005,
						semiAxises: [1.2, 1],
						orbitTranslationY: -0.2,
						orbitInclination: 15.0,
						material: mannheimMoonM,
						geometry: genericSphere,
						initialRotation: Math.random() * Math.PI * 2
					},
					{
						name: 'Acheron',
						radiusRatio: (0.12 / 0.75) * 2,
						distance: 1.35,
						speed: 0.02,
						rotation: 0.005,
						semiAxises: [1.1, 0.9],
						orbitTranslationY: 0.3,
						orbitInclination: 25.0,
						material: acheronMoonM,
						geometry: genericSphere,
						initialRotation: Math.random() * Math.PI * 2
					}
				]
			},
			{
				name: 'Gorkamorka',
				radiusRatio: (0.9 / 4) * 2,
				distance: 13.5,
				speed: 0.008,
				rotation: 0.0015,
				semiAxises: [1.1, 0.95],
				material: gorkamorkaPlanetM,
				geometry: genericSphere,
				initialRotation: Math.random() * Math.PI * 2,
				satellites: [
					{
						name: 'Mork',
						radiusRatio: (0.15 / 0.9) * 2,
						distance: 1.2,
						speed: 0.025,
						rotation: 0.006,
						semiAxises: [1, 0.98],
						orbitTranslationY: -0.1,
						orbitInclination: 10.0,
						material: morkMoonM,
						geometry: genericSphere,
						initialRotation: Math.random() * Math.PI * 2
					},
					{
						name: 'Gork',
						radiusRatio: (0.18 / 0.9) * 2,
						distance: 1.5,
						speed: 0.02,
						rotation: 0.004,
						semiAxises: [1.2, 1],
						orbitTranslationY: 0.25,
						orbitInclination: 20.0,
						material: gorkMoonM,
						geometry: genericSphere,
						initialRotation: Math.random() * Math.PI * 2
					}
				]
			},
			{
				name: 'Kadia',
				radiusRatio: (0.6 / 4) * 2,
				distance: 22.5,
				speed: 0.007,
				rotation: 0.0025,
				semiAxises: [1.05, 1],
				material: kadiaPlanetM,
				geometry: genericSphere,
				initialRotation: Math.random() * Math.PI * 2,
				satellites: []
			}
		]
	}
];

// export const satellites = [
// 	{
// 		name: 'ArmageddonStar',
// 		radiusRatio: 2,
// 		distance: 0,
// 		speed: 0.005,
// 		material: armageddonStarM,
// 		geometry: genericSphere,
// 		satellites: [
// 			{
// 				name: 'Armageddon',
// 				radiusRatio: 0.75 / 2,
// 				distance: 15,
// 				speed: 0.01,
// 				rotation: 0.002,
// 				semiAxises: [1, 0.95],
// 				material: armageddonPlanetM,
// 				geometry: genericSphere,
// 				satellites: [
// 					{
// 						name: 'Mannheim',
// 						radiusRatio: 0.15 / 0.75,
// 						distance: 2.1,
// 						speed: 0.04,
// 						rotation: 0.005,
// 						semiAxises: [1.2, 1],
// 						orbitTranslationY: -0.2,
// 						orbitInclination: 15.0,
// 						material: mannheimMoonM,
// 						geometry: genericSphere
// 					},
// 					{
// 						name: 'Acheron',
// 						radiusRatio: 0.12 / 0.75,
// 						distance: 2.7,
// 						speed: 0.02,
// 						rotation: 0.005,
// 						semiAxises: [1.1, 0.9],
// 						orbitTranslationY: 0.3,
// 						orbitInclination: 25.0,
// 						material: acheronMoonM,
// 						geometry: genericSphere
// 					}
// 				]
// 			},
// 			{
// 				name: 'Gorkamorka',
// 				radiusRatio: 0.9 / 2,
// 				distance: 27,
// 				speed: 0.008,
// 				rotation: 0.0015,
// 				semiAxises: [1.1, 0.95],
// 				material: gorkamorkaPlanetM,
// 				geometry: genericSphere,
// 				satellites: [
// 					{
// 						name: 'Mork',
// 						radiusRatio: 0.15 / 0.9,
// 						distance: 2.4,
// 						speed: 0.025,
// 						rotation: 0.006,
// 						semiAxises: [1, 0.98],
// 						orbitTranslationY: -0.1,
// 						orbitInclination: 10.0,
// 						material: morkMoonM,
// 						geometry: genericSphere
// 					},
// 					{
// 						name: 'Gork',
// 						radiusRatio: 0.18 / 0.9,
// 						distance: 3,
// 						speed: 0.02,
// 						rotation: 0.004,
// 						semiAxises: [1.2, 1],
// 						orbitTranslationY: 0.25,
// 						orbitInclination: 20.0,
// 						material: gorkMoonM,
// 						geometry: genericSphere
// 					}
// 				]
// 			},
// 			{
// 				name: 'Kadia',
// 				radiusRatio: 0.6 / 2,
// 				distance: 45,
// 				speed: 0.007,
// 				rotation: 0.0025,
// 				semiAxises: [1.05, 1],
// 				material: kadiaPlanetM,
// 				geometry: genericSphere,
// 				satellites: []
// 			}
// 		]
// 	}
// ];

// export const satellites = [
// 	{
// 		name: 'ArmageddonStar',
// 		radius: 4,
// 		distance: 0,
// 		speed: 0.005,
// 		material: armageddonStarM,
// 		geometry: genericSphere,
// 		satellites: [
// 			{
// 				name: 'Armageddon',
// 				radius: 0.75,
// 				distance: 7.5,
// 				speed: 0.01,
// 				rotation: 0.002,
// 				semiAxises: [1, 0.95],
// 				material: armageddonPlanetM,
// 				geometry: genericSphere,
// 				satellites: [
// 					{
// 						name: 'Mannheim',
// 						radius: 0.15,
// 						distance: 1.05,
// 						speed: 0.04,
// 						rotation: 0.005,
// 						semiAxises: [1.2, 1],
// 						orbitTranslationY: -0.2,
// 						orbitInclination: 15.0,
// 						material: mannheimMoonM,
// 						geometry: genericSphere
// 					},
// 					{
// 						name: 'Acheron',
// 						radius: 0.12,
// 						distance: 1.35,
// 						speed: 0.02,
// 						rotation: 0.005,
// 						semiAxises: [1.1, 0.9],
// 						orbitTranslationY: 0.3,
// 						orbitInclination: 25.0,
// 						material: acheronMoonM,
// 						geometry: genericSphere
// 					}
// 				]
// 			},
// 			{
// 				name: 'Gorkamorka',
// 				radius: 0.9,
// 				distance: 13.5,
// 				speed: 0.008,
// 				rotation: 0.0015,
// 				semiAxises: [1.1, 0.95],
// 				material: gorkamorkaPlanetM,
// 				geometry: genericSphere,
// 				satellites: [
// 					{
// 						name: 'Mork',
// 						radius: 0.15,
// 						distance: 1.2,
// 						speed: 0.025,
// 						rotation: 0.006,
// 						semiAxises: [1, 0.98],
// 						orbitTranslationY: -0.1,
// 						orbitInclination: 10.0,
// 						material: morkMoonM,
// 						geometry: genericSphere
// 					},
// 					{
// 						name: 'Gork',
// 						radius: 0.18,
// 						distance: 1.5,
// 						speed: 0.02,
// 						rotation: 0.004,
// 						semiAxises: [1.2, 1],
// 						orbitTranslationY: 0.25,
// 						orbitInclination: 20.0,
// 						material: gorkMoonM,
// 						geometry: genericSphere
// 					}
// 				]
// 			},
// 			{
// 				name: 'Kadia',
// 				radius: 0.6,
// 				distance: 22.5,
// 				speed: 0.007,
// 				rotation: 0.0025,
// 				semiAxises: [1.05, 1],
// 				material: kadiaPlanetM,
// 				geometry: genericSphere,
// 				satellites: []
// 			}
// 		]
// 	}
// ];
