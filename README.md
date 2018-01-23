MuetApp raw files

Language: Javascript, Ionic, Angular

Mobile Hybrid Application

To configure the project in your machine, make sure install:
1) Nodejs (currently used V3.10.10)
2) Cordova (v7.0.1)
3) Ionic (v3.19.1)
4) Sdk manager (Android API 24)

Once you have installed the above service,

Create a new empty Ionic project by running:
To start a new Ionic project, type the command on powershell:

ionic start myapp --type ionic1
Delete everything inside of the www folder, and git clone this repo under www folder

Next, move the directory called SCSS-MOVEME up one directory, and rename it to scss. This directory should now sit side-by-side with the www directory.

Now, run the command npm install from directly inside the myapp folder. This will install gulp.js and a few handy tasks, such as gulp-sass and gulp-minify-css.

Open up in the ionic.config.json file, add the JavaScript property "gulpStartupTasks": ["sass", "watch"].
