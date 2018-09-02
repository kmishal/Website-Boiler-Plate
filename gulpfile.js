var gulp = require ('gulp');
// require gulp-sass plugin
var sass = require ('gulp-sass');

// ! kaustubh tweaked this file which resulted into failure of browser sync plugin
// ? So below  plugin is commented
//var browserSync = require('browser-sync').create();

// Require jade
var jade = require('gulp-jade');

// Gulp watch syntax
gulp.task('watch', ['sass', 'jade', 'js'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Other watchers
    gulp.watch('app/*.jade', ['jade']);
    gulp.watch('app/js/*.js', ['js'] ); 
})

gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('./build/css'))
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
});

// compile jade
gulp.task('jade', function () {
    return gulp.src('./app/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('build/')) // tell gulp our output folder
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
});

// Compile js
gulp.task('js', function () {
    return gulp.src('./app/js/*.js')
        .pipe(gulp.dest('build/js')) // tell gulp our output folder
        // .pipe(browserSync.reload({
        //     stream: true
        // }))
});


// !Disable - Comment browser Sync
// gulp.task('browserSync', function () {
//     browserSync.init({
//         server: {
//             baseDir: 'build'
//         },
//     })
// })