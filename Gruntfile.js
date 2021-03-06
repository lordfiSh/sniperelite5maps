module.exports = function (grunt) {

	grunt.initConfig({

		sitemap_xml: {
			files: {
				cwd: 'dist',
				src: '{,**/}*.html',
				dest: 'dist/sitemap.xml',
			}
		},

		clean: {
			scripts: [
				'dist/scripts/*.js',
				'!dist/scripts/vendor.bundle.js',
			],
			vendor: [
				'dist/scripts/vendor.bundle.js',
			],
			dist: [
				'dist/*',
				'!dist/maps',
			],
		},

		eslint: {
			scripts: ['assets/scripts/**.js'],
		},

		jsonlint: {
			locales: {
				src: ['assets/locales/{,**/}*.json'],
				options: {
					reporter: 'jshint',
				}
			}
		},

		// SYNC will only copy changed files!
		sync: {
			scripts: {
				expand: true,
				cwd: 'assets/scripts/',
				src: ['**', '!vendor/**'],
				dest: 'dist/scripts/',
			},
			markup: {
				expand: true,
				cwd: 'assets/',
				src: ['home.html', 'map.html'],
				dest: 'dist/',
			},
			locales: {
				expand: true,
				cwd: 'assets/locales/',
				src: ['**'],
				dest: 'dist/locales/',
			},
			images: {
				expand: true,
				cwd: 'assets/images/',
				src: ['**'],
				dest: 'dist/images/',
			},
			fonts: {
				expand: true,
				cwd: 'assets/fonts/',
				src: ['**'],
				dest: 'dist/fonts/',
			},
			manifest: {
				expand: true,
				cwd: 'assets/',
				src: ['browserconfig.xml', 'site.webmanifest'],
				dest: 'dist/',
			},
		},

		// COPY will copy EVERY file in the directory regardless of what changed
		copy: {
			font_awesome_css: {
				expand: true,
				cwd: 'node_modules/font-awesome/css/',
				src: 'font-awesome.min.css',
				dest: 'dist/css/',
				filter: 'isFile'
			},
			font_awesome_fonts: {
				expand: true,
				cwd: 'node_modules/font-awesome/fonts/',
				src: 'fontawesome-webfont.*',
				dest: 'dist/fonts/',
				filter: 'isFile'
			},
			leaflet_css: {
				expand: true,
				cwd: 'node_modules/leaflet/dist/',
				src: 'leaflet.css',
				dest: 'dist/css/',
				filter: 'isFile'
			}
		},

		uglify: {
			vendor: {
				src: [
					'node_modules/jquery/dist/jquery.js',
					'node_modules/jquery.nicescroll/jquery.nicescroll.js',
					'node_modules/ddslick/src/jquery.ddslick.js',
					
					'node_modules/i18next/i18next.js',
					'node_modules/i18next-http-backend/i18nextHttpBackend.js',
					'node_modules/jquery-i18next/jquery-i18next.js',
					
					'node_modules/leaflet/dist/leaflet-src.js',
					'node_modules/leaflet-fullscreen/dist/Leaflet.fullscreen.js',
					'node_modules/leaflet-search/dist/leaflet-search.src.js',
					
					'node_modules/fuse.js/dist/fuse.js',
					
					'assets/scripts/vendor/**.js',
				],
				dest: 'dist/scripts/vendor.bundle.js',
				options: {
					// TODO change this back
					mangle: false,
					compress: false,
					beautify: true
				}
			},
		},

		cssmin: {
			styles: {
				expand: true,
				cwd: 'assets/css/',
				src: ['*.css', '!*.min.css'],
				dest: 'dist/css/',
				ext: '.min.css'
			}
		},

		watch: {
			express: {
				files:  ['server.js'],
				tasks:  ['express:dev'],
				options: {
					spawn: false
				}
			},
			css: {
				files: 'assets/css/**.css',
				tasks: ['cssmin:styles'],
			},
			scripts: {
				files: 'assets/scripts/**/*.js',
				tasks: ['sync:scripts'],
			},
			vendor: {
				files: 'assets/scripts/vendor/**.js',
				tasks: ['uglify:vendor'],
			},
			markup: {
				files: 'assets/*.html',
				tasks: ['sync:markup'],
			},
			locales: {
				files: '<%= jsonlint.locales.src %>',
				tasks: ['jsonlint:locales', 'sync:locales']
			},
			other: {
				files: [
					'assets/images/**',
					'<%= sync.fonts.cwd %>',
				],
				tasks: ['sync:images', 'sync:fonts'],
			},
		},

		express: {
			options: {
				port: 8080,
			},
			dev: {
				options: {
					script: 'server.js'
				},
			},
		},

		babel: {
			options: {
				sourceMap: true,
				presets: ['@babel/preset-env']
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'assets/scripts',
						src: ['*.js'],
						dest: 'dist/scripts'
					}
				]
			}
		},
	});

	grunt.loadNpmTasks('gruntify-eslint');
	grunt.loadNpmTasks('grunt-jsonlint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-sync');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('server', ['express:dev', 'watch']);

	grunt.registerTask('build', [
		'clean:dist',
		'eslint',
		'uglify',
		'cssmin',
		'copy',
		'sync'
	]);
};