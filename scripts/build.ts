import { bundleFileDefs } from './bundleFileDefs.ts'
import { bundleAutoCompletions } from './bundleAutoCompletions.ts'
import { bundleExperiments } from './bundleExperiments.ts'

export async function build() {
	try {
		await Deno.mkdir('./dist')
	} catch {}

	await bundleFileDefs()
	await bundleAutoCompletions()
	await bundleExperiments()
}

if (import.meta.main) {
	await build()
}
