const DIST = './dist';
const SRC = './src';
const TOOLS_BASEPATH = './tools/gulp/tasks/';

const dir = {
    dist: {
		dir_name: `${DIST}`,
        favicon: `${DIST}/pages/`,
		fonts: `${DIST}/assets/fonts/`,
        icons: `${DIST}/assets/icons/`,
		images: `${DIST}/assets/images/`,
		css: `${DIST}/css/`,
		js: `${DIST}/js/`,
		pages: `${DIST}/pages/`
    },
    src: {
		dir_name: `${SRC}`,
        favicon: `${SRC}/pages/favicon.ico`,
		fonts: `${SRC}/assets/fonts/**/*.*`,
		icons: `${SRC}/assets/icons/**/*.*`,
		images: `${SRC}/assets/images/**/*.*`,
		sass: `${SRC}/sass/styles.scss`,
		js: `${SRC}/js/**/*.js`,
		pages: `${SRC}/pages/*.pug`
    },
    watch: {
        favicon: `${SRC}/pages/favicon.ico`,
		fonts: `${SRC}/assets/fonts/**/*.*`,
		icons: `${SRC}/assets/icons/**/*.*`,
		images: `${SRC}/assets/images/**/*.*`,
		sass: `${SRC}/sass/**/*.scss`,
		js: `${SRC}/js/**/*.js`,
        pages: `${SRC}/pages/*.pug`
    },
    clean: DIST
};

const serverConfig = {
    server: {
        baseDir: DIST
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: 'front_dev'
};

const taskPaths = [
	`${TOOLS_BASEPATH}serve`,
	`${TOOLS_BASEPATH}watch`,
	`${TOOLS_BASEPATH}pug`,
	`${TOOLS_BASEPATH}styles`,
	`${TOOLS_BASEPATH}images`,
];

module.exports.dir = dir;
module.exports.serverConfig = serverConfig;
module.exports.taskPaths = taskPaths;