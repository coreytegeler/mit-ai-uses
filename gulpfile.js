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
var browsersync = require('browser-sync').create();

function compilePug()  {
	return gulp.src('index.pug')
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest('./'))
	.on('end', function() {
		log('HTML done');
		if (argv.prod) log('HTML minified');
	});
}

function compileSass()  {
	var sassOptions = {
		compress: argv.prod ? true : false
	};
	var apOptions = {
		browsers: ['> 0.5%', 'last 5 versions', 'Firefox ESR', 'not dead']
	};
	return gulp.src('style.scss')
		.pipe(plumber())
		.pipe(sass(sassOptions))
		.pipe(autoprefixer(apOptions))
		.pipe(gulp.dest('./'))
	.on('end', function() {
		log('Sass done');
		if (argv.prod) log('CSS minified');
	});
}

function compileCoffee()  {
	return gulp.src('*.coffee')
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest('./'))
	.on('end', function() {
		log('Coffee done');
		if (argv.prod) log('JS minified');
	});
}

function browserSync(done) {
	browsersync.init({
		notify: false,
		server: {
			baseDir: './'
		}
	});
}

function browserSyncReload(done) {
	browsersync.reload();
}

function watchFiles() {
	gulp.watch('./*.pug', compilePug);
	gulp.watch('./*.scss', compileSass);
	gulp.watch('./*.coffee', compileCoffee);
	gulp.watch('*').on('change', browserSyncReload);
}

gulp.task('default', gulp.parallel(compilePug, compileSass, compileCoffee, watchFiles, browserSync));

function log(message) {
	gutil.log(gutil.colors.bold.green(message));
}