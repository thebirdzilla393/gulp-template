const DIST = './dist';
const SRC = './src';
const TOOLS_BASEPATH = './tools/gulp/tasks/';

const dir = {
    dist: {
		dir_name: `${DIST}`,
		favicon: `${DIST}/`,
		fonts: `${DIST}/assets/fonts/`,
        icons: `${DIST}/assets/icons/`,
		images: `${DIST}/assets/images/`,
		styles: `${DIST}/styles/`,
		js: `${DIST}/js/`,
		libsJs: `${DIST}/js/libs/`,
		pages: `${DIST}/pages/`,
		mainPage: `${DIST}/`,
    },
    src: {
		dir_name: `${SRC}`,
		favicon: `${SRC}/favicon.ico`,
		fonts: `${SRC}/assets/fonts/**/*.*`,
		icons: `${SRC}/assets/icons/**/*.*`,
		images: `${SRC}/assets/images/**/*.*`,
		styles: `${SRC}/styles/*.scss`,
		js: `${SRC}/js/*.js`,
		libsJs: `${SRC}/js/libs/*.js`,
		pages: `${SRC}/pages/*.pug`,
		mainPage: `${SRC}/*.pug`,
    },
    watch: {
		favicon: `${SRC}/favicon.ico`,
		fonts: `${SRC}/assets/fonts/**/*.*`,
		icons: `${SRC}/assets/icons/**/*.*`,
		images: `${SRC}/assets/images/**/*.*`,
		commonStyles: `${SRC}/styles/*.scss`,
		pageStyles: `${SRC}/styles/**/*.scss`,
		js: `${SRC}/js/*.js`,
		libsJs: `${SRC}/js/libs/*.js`,
		pages: `${SRC}/pages/*.pug`,
		templates: `${SRC}/pages/**/*.pug`,
		mainPage: `${SRC}/*.pug`,
    },
    clean: DIST
};

const serverConfig = {
    server: {
        baseDir: `${DIST}`
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
	`${TOOLS_BASEPATH}styles`,
	`${TOOLS_BASEPATH}pug`,
	`${TOOLS_BASEPATH}images`,
	`${TOOLS_BASEPATH}fonts`,
	`${TOOLS_BASEPATH}scripts`,
	`${TOOLS_BASEPATH}watch`,
	`${TOOLS_BASEPATH}webserver`,
];

module.exports.dir = dir;
module.exports.serverConfig = serverConfig;
module.exports.taskPaths = taskPaths;