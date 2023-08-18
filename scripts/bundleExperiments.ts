import JSON5 from 'https://cdn.skypack.dev/json5@2.0.0'

export async function bundleExperiments() {
	await Promise.all([
		Deno.writeTextFile(
			'./dist/experiments.js',
			`(() => JSON.parse("${JSON.stringify(
				JSON5.parse(
					await Deno.readTextFile(
						'./packages/data/experiments.json'
					)
				)
			).replace(/\"/g, '\\"')}"))()`
		),
		Deno.copyFile(
			'./packages/data/experiments.json',
			'./dist/experiments.json'
		),
	])
}
