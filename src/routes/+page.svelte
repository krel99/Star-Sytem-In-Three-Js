<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import '../global.scss';
	import scene from '$lib/scene/scene.js';
	import createCamera from '$lib/camera.js';
	import createOrbitControls from '$lib/orbitControls.js';
	import addMaterialTexture from '$lib/scene/materialTexture.js';
	import navigateOrbits from '$lib/movementLogic.js';
	import { displayWidth, displayHeight } from '$lib/stores.js';
	import { createRenderer, updateRenderer } from '$lib/renderer.js';
	// import { Pane } from 'tweakpane';

	/**
	 * TODO Add background
	 * TODO Add an option to flatten the planets
	 */

	let canvas;

	/**
	 * * Some parts of the code will need to acess Canvas, so we use onMount which only triggers them when that is available
	 */
	onMount(() => {
		console.log('%cOnMount Activated', 'color:lime');

		// //Testing block

		// // const pane = new Pane();

		// // const pointLight = new THREE.PointLight('blue', 10, 10000, 0);
		// // pointLight.castShadow = true;
		// // console.log(pointLight);
		// // pane.addInput(pointLight, 'intensity', { min: 0, max: 100 });
		// // scene.add(pointLight);

		// // const cubeMaterial = new THREE.MeshBasicMaterial({ color: 'red' });
		// // const cubeMesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 10), cubeMaterial);
		// // scene.add(cubeMesh);

		// // pane.addInput(cubeMesh.scale, 'x', {
		// // 	min: 0,
		// // 	max: 20,
		// // 	step: 0.25
		// // });

		//End testing block

		scene.children
			.find((child) => child.name === 'ArmageddonStar')
			?.traverse((object) => addMaterialTexture(object));

		$displayWidth = window.innerWidth;
		$displayHeight = window.innerHeight;

		const camera = createCamera($displayWidth, $displayHeight, 0, 5, 100);

		window.addEventListener('resize', () => {
			$displayWidth = window.innerWidth;
			$displayHeight = window.innerHeight;

			camera.aspect = $displayWidth / $displayHeight;
			camera.updateProjectionMatrix();
			updateRenderer($displayWidth, $displayHeight, renderer);
			console.log('Window %cResized', 'color: yellow;');
		});

		const renderer = createRenderer(canvas, $displayWidth, $displayHeight, window.devicePixelRatio);
		renderer.render(scene, camera);

		// add controls
		const controls = createOrbitControls(camera, canvas);

		/**
		 * TODO Abstract process inside as a function
		 */
		const animate = () => {
			// renderer.render(scene, camera);

			scene.children
				.find((child) => child.name === 'ArmageddonStar')
				.children.forEach((child) => {
					child.traverse(navigateOrbits);
				});
			controls.update();
			renderer.render(scene, camera);
			window.requestAnimationFrame(animate);
		};
		animate();
	});
</script>

<canvas bind:this={canvas} />

<style>
	canvas {
		background-color: blanchedalmond;
	}
</style>
