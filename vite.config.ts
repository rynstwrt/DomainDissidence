import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';


const IGNORED_WARNINGS = ["a11y_label_has_associated_control"];


export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
				warningFilter: (warning) => {
					return !IGNORED_WARNINGS.includes(warning.code);
				}
			},
			adapter: adapter()
		})
	]
});
