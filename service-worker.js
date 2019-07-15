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
    "revision": "4831d312f2349229ff19ffe1f9085f08"
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
    "url": "assets/js/13.6bb9df9d.js",
    "revision": "93e4d947976d1f2e4deb51bd4d2b7569"
  },
  {
    "url": "assets/js/14.090a0e63.js",
    "revision": "cbdf64b834b9bd0b29af822c7be00bf5"
  },
  {
    "url": "assets/js/15.39400677.js",
    "revision": "e4d4a3091355a2df8a787ef337149749"
  },
  {
    "url": "assets/js/16.73ef2ca6.js",
    "revision": "78deaf96e7699561e58d604169574e60"
  },
  {
    "url": "assets/js/17.b66db2cb.js",
    "revision": "876099c4eb52bb03047cd17ad5a0eda5"
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
    "url": "assets/js/app.93351475.js",
    "revision": "7f8d131532ffbd8d2f3ba450ae3fb9f2"
  },
  {
    "url": "assets/js/vuejs-paginate.d125c3de.js",
    "revision": "436af68e4479567d9603ff526287140b"
  },
  {
    "url": "blog/en/first-post/index.html",
    "revision": "e044c8541fe4c9dbd29755db26296fb6"
  },
  {
    "url": "blog/en/index.html",
    "revision": "aa377bd6c826d43a7993dcc432d1cafb"
  },
  {
    "url": "blog/fa/index.html",
    "revision": "fcbc31569a5abad41ecbf02477f50fd6"
  },
  {
    "url": "blog/index.html",
    "revision": "0367dbe0ca32f390f7398644bbe932f9"
  },
  {
    "url": "index.html",
    "revision": "527ad9ce92545596c15060552562e0d3"
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
