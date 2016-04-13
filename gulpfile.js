var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var del = require('del');
var rsync = require('gulp-rsync');
var historyApiFallback = require('connect-history-api-fallback');

var projectConfig = require('./project.json');

var browserSyncSetting = {
  notify: false,
  port: projectConfig.port
}

if (projectConfig.proxy != '') {
  browserSyncSetting.proxy = projectConfig.proxy
} else {
  browserSyncSetting.server = {
    baseDir: '.',
    middleware : [ historyApiFallback() ],
    routes: {
      '/bower_components': 'bower_components'
    }
  }
}

gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(reload({stream: true}));;
});

gulp.task('html', ['clean'], function () {
    return gulp.src([
      './**/*.php',
      './**/*.html',
      './**/*.json',
      '!dist/**/*',
      '!bower_components/**/*',
      '!node_modules/**/*'
      ])
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'));
});

gulp.task('script', ['clean'], function () {
    return gulp.src('js/**/*.js')
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', ['clean'], () => {
  return gulp.src('images/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false,cleanupIDs: false}],
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', ['clean'], () => {
  return gulp.src('fonts/**/*.{eot,svg,ttf,woff,woff2}')
    // .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

// watch files for changes and reload
gulp.task('serve', ['sass'], function() {
  browserSync(browserSyncSetting);

  gulp.watch(
    [
    '**/*.html',
    '**/**.php',
    'js/**/*.js'
    ],
    {
      cwd: './'
    },reload
  );
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('clean', del.bind(null, ['dist']));

// gulp.task('clean', function() {
//   return gulp.src('dist/*').pipe(rm());
// });

gulp.task('build', ['html', 'images', 'fonts', 'script'], () => {
  return gulp.src('dist/**/*');
});

gulp.task('deploy', () => {
    return gulp.src('dist/**')
        .pipe(rsync({
            root: 'dist',
            hostname: projectConfig.deploy.hostname,
            username: projectConfig.deploy.username,
            destination: projectConfig.deploy.destination,
            progress: true
        }));
});
