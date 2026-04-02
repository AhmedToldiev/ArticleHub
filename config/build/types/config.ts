export type BuildMode = 'development' | 'production';
export interface BuildPaths {
	entry: string;
	build: string;
	html: string;
	src: string;
	locales: string;
	buildLocales: string;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
	apiUrl: string;
}
export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
	apiUrl: string;
	project: 'storybook' | 'frontend' | 'jest';
}

// Определяет типы и структуры данных (режим, пути, порт), чтобы всё было понятно и безопасно (TypeScript не даст ошибиться).
