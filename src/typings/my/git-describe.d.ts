declare module 'git-describe' {
	interface GitDescribeOpts {
		dirtyMark?: string;
		dirtySemver?: boolean;
		longSemver?: boolean;
		requireAnnotated?: boolean;
		match?: string;
		customArguments?: string[];
	}

	interface GitDescribeObj {
		dirty: boolean;
		hash: string;
		distance: number;
		tag: string;
		/**
		 * SemVer instance
		 * @see https://github.com/npm/node-semver
		 */
		semver: object;
		suffix: string;
		raw: string;
		semverString: string;
	}

	export function gitDescribeSync(
		directory: string,
		options?: GitDescribeOpts,
		cb?: () => GitDescribeObj
	): GitDescribeObj;
	export function gitDescribeSync(
		directory: string,
		options?: GitDescribeOpts
	): GitDescribeObj;
}
