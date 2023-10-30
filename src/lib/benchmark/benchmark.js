export default function benchmarkAll(
	function1,
	function2,
	warmupTimeInMillis = 5000,
	iterationCount = 10000
) {
	// Benchmarking function
	function runBenchmark(testFunction, warmupTimeInMillis, iterationCount) {
		// Warming up
		console.log(`Warming up CPU cache for ${warmupTimeInMillis} milliseconds`);
		let warmupStartTime = performance.now();
		while (performance.now() - warmupStartTime < warmupTimeInMillis) {
			testFunction();
		}

		// Time for da big WAAAGH! (Actual benchmark)
		console.log('Starting benchmark...');
		let benchmarkStartTime = performance.now();
		for (let i = 0; i < iterationCount; i++) {
			testFunction();
		}

		let benchmarkEndTime = performance.now();
		let totalTimeTaken = benchmarkEndTime - benchmarkStartTime;

		return totalTimeTaken;
	}

	// Run the benchmarks directly
	const timeForSatelliteMeshes = runBenchmark(function1, warmupTimeInMillis, iterationCount);
	console.log(`Execution time for 'satelliteMeshes': ${timeForSatelliteMeshes} milliseconds`);

	const timeForSatelliteMeshes2 = runBenchmark(function2, warmupTimeInMillis, iterationCount);
	console.log(`Execution time for 'satelliteMeshes2': ${timeForSatelliteMeshes2} milliseconds`);
}

/**
 * ! Runs out of heap memory, need to do them one by one if large!
 * TODO SetImmediate() to give garbage a chance to reclaim memory
 */
// benchmarkAll(
// 	() => sM2(satellites),
// 	() => sM(satellites)
// );
