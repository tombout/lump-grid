let gulp = require('gulp');
let sass = require('gulp-sass');

let files = {
    sources: '*.scss',
    destination: '.'
};

function lintCss() {
    let gulpStylelint = require('gulp-stylelint');
    return gulp.src('*.css')
        .pipe(gulpStylelint({
            failAfterError: true,
            reporters: [
                {formatter: 'string', console: true}
            ]
        }));
}

function compileSources() {
    return gulp.src(files.sources)
        .pipe(sass()).on('error', sass.logError)
        .pipe(gulp.dest(files.destination))
}

function watch() {
    compileSources();
    gulp.watch(files.sources, compileSources)
}

exports.compile = compileSources;
exports.lintcss = lintCss;
exports.watch = watch;
