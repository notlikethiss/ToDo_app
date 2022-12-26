import gulp from 'gulp';
import eslint from 'gulp-eslint';
import eslintConfig from './lib';
import formatter from 'eslint-friendly-formatter';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import del from 'del';

const isWatch = process.argv.indexOf('watch') !== -1;
const src = [
  './lib/**/*.js',
  'gulpfile.babel.js'
];
const dest = './dist';

gulp.task('clean', () => del(dest));

gulp.task('lint', () => {
  const lintConfig = eslintConfig({
    isDev: isWatch,
    lintEnv: 'build',
    generate: true
  });

  return gulp.src(src)
    .pipe(eslint(lintConfig))
    .pipe(eslint.format(formatter));
});

gulp.task('copy', ['clean'], () => {
  return gulp.src('./lib/*.json')
    .pipe(gulp.dest(dest));
});

gulp.task('bundle', ['clean'], () => {
  return gulp.src('./lib/**/*.js')
    .pipe(babel())
    .pipe(rename((fp) => fp.dirname = ''))
    .pipe(gulp.dest('./dist'));
});

gulp.task('release', ['lint', 'copy', 'bundle']);
gulp.task('default', ['release']);
gulp.task('watch', ['lint', 'bundle'], () => {
  gulp.watch(src, ['lint']);
});
