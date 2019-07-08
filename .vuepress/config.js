const fs = require('fs');
const moment = require('moment');
const yamlFront = require('yaml-front-matter');

const sortDelimiter = ';';

function generateSidebar(markdownPaths, sort = true, limit = 0) {
    let renderedPosts = new Array();
  
    if (sort) {
      markdownPaths.forEach(filePath => {
        fileContents = fs.readFileSync(filePath, 'utf8').toString();
        fileMeta = yamlFront.loadFront(fileContents);
        if (fileMeta.blog_index == true) return;
        fileTimestamp = moment(fileMeta.date);
        renderedPosts.push(fileTimestamp + sortDelimiter + filePath);
      });
      renderedPosts = renderedPosts.sort().reverse();
      if (limit > 0) {
        renderedPosts = renderedPosts.slice(0, limit);
      }
      renderedPosts.forEach((sortedPath, index, array) => {
        array[index] = sortedPath.substring(sortedPath.indexOf(sortDelimiter) + sortDelimiter.length + basePath.length, sortedPath.lastIndexOf('/')) + '/';
      });
    } else {
      renderedPosts = markdownPaths.map(filePath => filePath.substring(basePath.length, filePath.lastIndexOf('/')) + '/');
    }
  
    return renderedPosts;
}

const glob = require('glob');
const basePath = 'main';
let blogPaths = glob.sync(basePath + '/*/*.md');
let blogPosts = generateSidebar(blogPaths, true, 5);
module.exports = {
    title: 'taha-',
    dest: 'public',
    base: '/',
    plugins: [
      '@vuepress/blog',
      '@vuepress/pwa'
    ],
    theme: '@vuepress/blog',
    themeConfig: {
        nav: [
            { text: 'EN', link: '/blog/en/' },
            { text: 'FA', link: '/blog/fa/' }
        ],
        footer: {
          contact: [
            {
              type: 'github',
              link: 'https://github.com/ORcxzjeeeee'
            },
            {
              type: 'twitter',
              link: 'https://twitter.com/paramoNNNN'
            }
          ],
          copyright: [
            {
              text: 'MIT Licensed | Copyright © 2018-present Vue.js',
              link: ''
            }
          ]
        },
        modifyBlogPluginOptions(blogPlugnOptions) {
          const PostsEnDirectoryClassifier = {
            id: 'post-en',
            dirname: '/blog/en/',
            path: '/blog/en/',
            layout: 'IndexPost',
            itemLayout: 'Post',
            itemPermalink: '/blog/en/:year/:month/:day/:slug',
            pagination: {
              perPagePosts: 5,
            },
          }

          const PostsFaDirectoryClassifier = {
            id: 'post-fa',
            dirname: '/blog/fa/',
            path: '/blog/fa/',
            layout: 'IndexPost',
            itemLayout: 'Post',
            itemPermalink: '/blog/fa/:year/:month/:day/:slug',
            pagination: {
              perPagePosts: 5,
            },
          }
          
          blogPlugnOptions.directories.push(PostsEnDirectoryClassifier)
          blogPlugnOptions.directories.push(PostsFaDirectoryClassifier)
          return blogPlugnOptions
        },
        pwa: true
    }
}