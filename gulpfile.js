var gulp = require('gulp'); 

var concat = require('gulp-concat');

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var minifyHTML = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');

gulp.task('default', ['mytask1', 'mytask2'], function() {
	 // place code for your default task here 
	 console.log('Hi, Gulp !'); 
});

gulp.task('mytask1', function(callback) {
	 // place code for your default task here 
	 console.log('Hi, task1 !');
	 
	  callback(); 
});

gulp.task('mytask2', function(cb) {
	 // place code for your default task here 
	 console.log('Hi, task2 !'); 
	 //cb();
	//  del('*.js', function(){
	// 	 cb();
	//  });
});

gulp.task('output1', function() {
	 // place code for your default task here 
	 gulp.src('assets/vender/bootstrap/**/*.js')
	 	.pipe(gulp.dest('output1'));
});


gulp.task('output2', ['clean1'], function() {
	 // place code for your default task here 
	 gulp.src('assets/vender/bootstrap/**/*.js',
		{
			base: 'assets/vender/'
		})
	 .pipe(gulp.dest('output2'));
});

gulp.task('output3', ['clean2'], function() {
	 // place code for your default task here 
	 gulp.src([
		 		'assets/vender/**/*.js',
	 			'assets/vender/**/*.css'
	 	])
	 .pipe(gulp.dest('output3'));
});

var del = require('del');
gulp.task('clean1', function(){
	
	del(['output2/bootstrap/**', '!output2/bootstrap']).then(function (paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
	});

});

gulp.task('clean2', function(cb){
	
	del(['output3/', '!output3']).then(function (paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
	});
	
	cb();

});

gulp.task('watch', function() {
	 // place code for your default task here 
	 gulp.watch('app/**/*.js', ['output-app']);
});

gulp.task('output-app', ['clean-app'], function() {
	 // place code for your default task here 
	 gulp.src('app/**/*.js')
	 	.pipe(gulp.dest('output-app'));
});

gulp.task('clean-app', function(cb){
	
	del(['output-app/', '!output-app']).then(function (paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
	});
	
	cb();

});

gulp.task('app', function() {
	 gulp.src([
		 'app/**/*.module.js',
		 'app/**/*.js'
	 ])
	.pipe(gulp.dest('assets/src'))
    .pipe(concat('app.js'))
	.pipe(gulp.dest('assets'))
	.pipe(uglify({
		mangle: false
	}))
	.pipe(rename({
		extname: '.min.js'
	}))
    .pipe(gulp.dest('assets'));
});


 
gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
 
  gulp.src('index.html')
    .pipe(minifyHTML(opts))
	.pipe(rename({
		extname: '.min.html'
	}))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('minify-css', function() {
  gulp.src('assets/styles.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(rename({
		extname: '.min.css'
	}))
    .pipe(gulp.dest('dist'));
});
