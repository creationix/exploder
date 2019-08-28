importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');


workbox.precaching.precacheAndRoute([
  '/',
  '/app.js',
  '/pixi.min.js',
  '/sprites.json',
  '/sprites.png',
  '/style.css',
]);

workbox.routing.registerRoute(
  /.*/,
  new workbox.strategies.StaleWhileRevalidate()
);

