const gulp = require('gulp');
const path = require('path');

const config = require('./semantic.json');
const semanticBuildTask = require(path.resolve(__dirname, config.base, 'tasks/build'));

gulp.task('patch-semantic', () => {
  return gulp.src([ 'patch/**' ])
    .pipe(gulp.dest(path.dirname(config.paths.source.config)));
});

gulp.task('semantic', [ 'patch-semantic' ], (cb) => {
  return semanticBuildTask(cb);
});

gulp.task('build', [ 'semantic' ], () => {
  return gulp.src([ 'semantic/dist/**' ])
    .pipe(gulp.dest('dist'));
});
