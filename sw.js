// Main Service Worker.

// Use a const because it changes with versioning.
const staticCacheName = 'ILM-v2-static' // Static shell-assets cache.
const dynamicCacheName = 'ILM-v2-dynamic' // Dynamic (non-shell) assets cache.

// Easy to maintain assets like this and just pass the array into the function. 
// Important: Root path should be given as "/". Other paths without "/".
const assets = [
    // Pages
    '/',
    '/index.html',
    // Images
    'assets/arrow-up-right-from-square.png',
    'assets/connected.png',
    'assets/disconnected.png',
    'assets/favicon.ico',
    'assets/faviconDC.ico',
    'assets/no-phone.png',
    'assets/refresh.png',
    // CSS
    'css/button.css',
    'css/clip-path-polygon.css',
    'css/colors.css',
    'css/main.css',
    'css/util.css',
    // JS
    'js/csvConverter.js',
    'js/csvDownloader.js',
    'js/currentConnManager.js',
    'js/detectDeviceType.js',
    'js/formatTime.js',
    'js/main.js',
    'js/sw-support.js',
    'js/updateUI.js',
    'js/viewSwitcher.js',
    // Fonts
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap'
]

// Validate Service Worker installed and caching shell assets.
self.addEventListener('install', evt => { 
    console.log('Service Worker Installed.')
    // install/caching are async events. So wait until completed.
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('Caching assets...')
            cache.addAll(assets) // Assets array passed.
            console.log('Assets cached.')
        })
    )
})

// Validate Service Worker activated,
// Delete old caches.
self.addEventListener('activate', evt => { 
    console.log('Service Worker Activated.')
    // async method. Must wait until all promises (promise per cache) is resolved.
    evt.waitUntil(
        // caches gets the keys and passes it to an => function.
        caches.keys().then(keys => {
            // Promise all is an async functon that returns all promises when resolved.
            return Promise.all(keys
                .filter(key => key !== staticCacheName) // Filtering and creating a promises array without the current cache name.
                .map(key => caches.delete(key)) // Deleting all othet keys(cahses) except current cache.
            )
        })
    )
})

// Intercepting featch events and matching caches. Caching new assets to dynamic cache.
self.addEventListener('fetch', evt => { 
    // console.log('Intercepting fetch events and matching caches...')
    // Using the fetch events respondWith method to match the request with caches.
    evt.respondWith(
        // async function. If not in cache return the original event request.
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request)
        })
    )
    // console.log('Fetch event processed.')
})
