/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
	branches: ["feature/publish-test"],
	plugins: [
		[
			"@semantic-release/commit-analyzer",
			{
				preset: "angular",
				releaseRules: [{ type: "refactor", release: "patch" }],
			},
		],
		[
			"@semantic-release/release-notes-generator",
			{
				preset: "angular",
				presetConfig: {
					types: [
						{
							type: "feat",
							section: "Features",
						},
						{
							type: "fix",
							section: "Bug Fixes",
						},
						{
							type: "chore",
							section: "Chore",
						},
						{
							type: "refactor",
							section: "Refactor",
						},
					],
				},
			},
		],
		"@semantic-release/changelog",
		"@semantic-release/npm",
		"@semantic-release/github",
		[
			"@semantic-release/git",
			{
				assets: ["CHANGELOG.md", "package.json", "pnpm-lock.yaml"],
				message: "chore(release): ${nextRelease.version} [ci skip]",
			},
		],
	],
	tagFormat: "v${version}",
};
