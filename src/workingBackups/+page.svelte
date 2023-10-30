<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import '../global.scss';
	import scene from '$lib/scene.js';
	// import { dimensions } from '$lib/stores.js';

	let canvas;

	onMount(() => {
		let width = window.innerWidth;
		let height = window.innerHeight;

		const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 400);

		window.addEventListener('resize', () => {
			width = window.innerWidth;
			height = window.innerHeight;

			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
			// renderer.render(scene, camera);
			console.log('%c Resized', 'color: yellow;');
		});
		const pixelRatio = Math.min(window.devicePixelRatio, 2);

		/**
		 * Renderer
		 * * Needs to acess Canvas, so we use onMount
		 */
		const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

		renderer.setSize(width, height);
		renderer.setPixelRatio(pixelRatio);
		renderer.render(scene, camera);
		/**
		 * Animate function to be called on each frame, but parameters change on window resize
		 */
		const animate = () => {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
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
