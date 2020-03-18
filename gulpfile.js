'use strict';

global.$ = {
	gulp: require('gulp'),
	browserSync: require('browser-sync').create(),
    loadPlugins: require('gulp-load-plugins')(),
    gulpVariables: require('./tools/gulp/variables/variables.js'),
};

console.log($.gulpVariables);
$.gulpVariables.taskPaths.forEach(function(taskPath) {
	require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('styles', 'pug', 'images', 'icons', 'favicon'),
	$.gulp.parallel(
		'watch',
		'serve'
	)
));
