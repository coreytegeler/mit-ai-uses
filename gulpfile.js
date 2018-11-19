var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var autoprefixer = require('gulp-autoprefixer');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();

gulp.task('compile-pug', function() {
	return gulp.src('index.pug')
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest('./'))
	.on('end', function() {
		log('HTML done');
		if (argv.prod) log('HTML minified');
	});
});

gulp.task('compile-sass', function() {
	var sassOptions = {
		compress: argv.prod ? true : false
	};
	var apOptions = {
		browsers: ['> 0.5%', 'last 5 versions', 'Firefox ESR', 'not dead']
	};
	gulp.src('style.scss')
		.pipe(plumber())
		.pipe(sass(sassOptions))
		.pipe(autoprefixer(apOptions))
		.pipe(gulp.dest('./'))
	.on('end', function() {
		log('Sass done');
		if (argv.prod) log('CSS minified');
	});
});

gulp.task('compile-coffee', function() {
	gulp.src('script.coffee')
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest('./'))
	.on('end', function() {
		log('Coffee done');
		if (argv.prod) log('JS minified');
	});
});

gulp.task('browser-sync', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', function() {
	gulp.watch('./*.pug', ['compile-pug']);
	gulp.watch('./*.scss', ['compile-sass']);
	gulp.watch('./*.coffee', ['compile-coffee']);
	gulp.watch('*').on('change', browserSync.reload);
});

gulp.task('default', [
	'compile-sass',
	'compile-coffee',
	'compile-pug',
	'browser-sync',
	'watch'
]);

gulp.task('prod', [
	'compile-sass',
	'compile-coffee',
	'compile-pug',
]);


function log(message) {
	gutil.log(gutil.colors.bold.green(message));
}