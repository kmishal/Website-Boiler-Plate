var gulp = require ('gulp');
// require gulp-sass plugin
var sass = require ('gulp-sass');
// require browser-sync
var browserSync = require('browser-sync').create();

// Gulp watch syntax
gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Other watchers
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload); 
})

gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


// Enable browser Sync
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})