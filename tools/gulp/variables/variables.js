const DIST = './dist';
const SRC = './src';
const TOOLS_BASEPATH = './tools/gulp/tasks/';
// Расширеня вынесены как константы, чтобы их можно было легко заменить
const STYLE_SOURCE = 'scss';
const HTML_SOURCE = 'pug';

const dir = {
    dist: {
		dir_name: DIST,
		fonts: `${DIST}/assets/fonts/`,
		styles: `${DIST}/styles/`,
		js: `${DIST}/js/`,
    },
    src: {
		dir_name: SRC,
		fonts: `${SRC}/assets/fonts/**/*.*`,
		images: `${SRC}/**/*.{jpg,jpeg,png,ico,gif}`,
		styles: `${SRC}/styles/*.${STYLE_SOURCE}`,
		js: `${SRC}/js/**/*.js`,
		notJsOfTemplates: `!${SRC}/js/templates/*.*`,
		pages: `${SRC}/**/*.${HTML_SOURCE}`,
		notPageLayout: `!${SRC}/pages/layout/*.*`,
		notPageTemplates: `!${SRC}/pages/templates/*.*`,
    },
    watch: {
		fonts: `${SRC}/assets/fonts/**/*.*`,
		images: `${SRC}/**/*.{jpg,jpeg,png,ico,gif}`,
		styles: `${SRC}/styles/**/*.${STYLE_SOURCE}`,
		js: `${SRC}/js/**/*.js`,
		pages: `${SRC}/**/*.${HTML_SOURCE}`,
    },
    clean: DIST
};

const serverConfig = {
    server: {
        baseDir: DIST
	},
	//tunnel: true,
    port: 4200,
    open: true,
	notify: false,
	reloadOnRestart: true,
	startPath: '/index.html'
};

const taskPaths = [
	`${TOOLS_BASEPATH}clean`,
	`${TOOLS_BASEPATH}fonts`,
	`${TOOLS_BASEPATH}styles`,
	`${TOOLS_BASEPATH}images`,
	`${TOOLS_BASEPATH}scripts`,
	`${TOOLS_BASEPATH}html`,
	`${TOOLS_BASEPATH}watcher`,
	`${TOOLS_BASEPATH}webserver`
];

module.exports.dir = dir;
module.exports.serverConfig = serverConfig;
module.exports.taskPaths = taskPaths;