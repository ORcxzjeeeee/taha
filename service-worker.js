/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3a6f3fdde4ce576258e30cfe85ea717a"
  },
  {
    "url": "assets/css/0.styles.4089f79f.css",
    "revision": "af61fdadb28d288ae625112fb9629551"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dfc27b33.js",
    "revision": "fa6c2841a548509940f6e9ea648e459f"
  },
  {
    "url": "assets/js/11.1f43188d.js",
    "revision": "b5c21713eae8e64ffe29ce59f7d06553"
  },
  {
    "url": "assets/js/12.743a60a8.js",
    "revision": "c625b448a3044df167053d549bc98b2a"
  },
  {
    "url": "assets/js/13.68df4fbb.js",
    "revision": "45e6acbcbe7b669be7a37b3d6d84c5fe"
  },
  {
    "url": "assets/js/14.090a0e63.js",
    "revision": "cbdf64b834b9bd0b29af822c7be00bf5"
  },
  {
    "url": "assets/js/15.99c328ac.js",
    "revision": "b68cdf88c40b6de61f3895472ac07bc5"
  },
  {
    "url": "assets/js/16.b02f298b.js",
    "revision": "39609ffbd8011454f1049e2d5da2f44d"
  },
  {
    "url": "assets/js/17.d4da7049.js",
    "revision": "d09f4777cfcffc45fadde5e0302003ef"
  },
  {
    "url": "assets/js/18.20c8e9f3.js",
    "revision": "895a4f343d6202e824a2c684f24f171f"
  },
  {
    "url": "assets/js/3.b367c007.js",
    "revision": "e164a1015cb19cd2957633e6fc38acc2"
  },
  {
    "url": "assets/js/4.ed2b17ef.js",
    "revision": "a297801a5ea760778e9e3e69019afefd"
  },
  {
    "url": "assets/js/5.bf1a03bf.js",
    "revision": "70985f29fdf32dae7fe461b92a1b4d79"
  },
  {
    "url": "assets/js/6.394ce8af.js",
    "revision": "6329db26ad4661826f499d6117ab4b18"
  },
  {
    "url": "assets/js/7.837a5739.js",
    "revision": "eb18d9ab35c9889376837303a72e8775"
  },
  {
    "url": "assets/js/8.436e5471.js",
    "revision": "72ff6d32fd9d0547bf6cf6b461dcff60"
  },
  {
    "url": "assets/js/9.c05b6cb4.js",
    "revision": "905e5abdebd634adf033cf9d7e5f536a"
  },
  {
    "url": "assets/js/app.ae0d1a08.js",
    "revision": "c719b4b52fb3d0f921fd666d4acc18e7"
  },
  {
    "url": "assets/js/vuejs-paginate.d125c3de.js",
    "revision": "436af68e4479567d9603ff526287140b"
  },
  {
    "url": "blog/en/first-post/index.html",
    "revision": "d1f1fc0af4af1f01c8b88809ac3f9c76"
  },
  {
    "url": "blog/en/index.html",
    "revision": "593705b09f2ac19f0d4b9800272d24cd"
  },
  {
    "url": "blog/fa/index.html",
    "revision": "8af9f6d7a055a528c4f3c08099ad8ad1"
  },
  {
    "url": "blog/index.html",
    "revision": "0172f4df3ef4e605637da04c61b58926"
  },
  {
    "url": "index.html",
    "revision": "6a8ad87a7d0a9ec1728748af16b440e9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
