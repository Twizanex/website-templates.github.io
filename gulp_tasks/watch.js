// File watcher that uses super-fast chokidar and emits vinyl objects
var gulp = require('gulp'),
	paths = require('./config/paths'),
	runSequence = require('run-sequence');


// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch(
		paths.dev.coffee + '/*.coffee',
		function() {
			runSequence(
				'coffee:main:changed',
				'rollup:main',
				'browserSync:reload'
			);
		}
	);

	gulp.watch(
		[
			paths.dev.js + '/*.js',
			paths.dev.js + '/lib/*.js'
		],
		function() {
			runSequence(
			'rollup:main',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.sass + '/**/*.{sass,scss}',
		function() {
			runSequence(
			'sass:main',
			'postcss:dev',
			'cmq:main',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.stylus + '/**/*.styl',
		function() {
			runSequence(
			'stylus:main',
			'postcss:dev',
			'cmq:main',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.data + '/*.*',
		function() {
			runSequence(
			'pug:main',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		[
			paths.dev.pug + '/pages/*.pug',
			paths.dev.jade + '/pages/*.jade'
		],
		function() {
			runSequence(
			'pug:main:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.images + '/**/*.*',
		function() {
			runSequence(
			'sync:images:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.fonts + '/**/*.{eot,svg,ttf,otf,woff,woff2}',
		function() {
			runSequence(
			'sync:fonts:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		[
			paths.dev.helpers + '/**/*.*',
			paths.dev.helpers + '/.htaccess'
		],
		function() {
			runSequence(
				'sync:helpers:changed',
				'browserSync:reload'
			);
		}
	);
});
