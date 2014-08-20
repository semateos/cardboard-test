// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    development: {
        js: [
	        'bower_components/jquery/dist/jquery.min.js',
	        'bower_components/threejs/build/three.min.js',
	        'js/third-party/threejs/StereoEffect.js',
	        'js/third-party/threejs/DeviceOrientationControls.js',
	        'js/third-party/threejs/OrbitControls.js',
	        'js/test-two.js'
        ],
        css: ['css/test-one.css', 'css/test-two.css']
    },
    production: {
        js: ['js/scripts.js'],
        css: ['css/styles.css']
    }
}