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
const basePath = 'blog';
let blogPaths = glob.sync(basePath + '/*/*.md');
let blogPosts = generateSidebar(blogPaths, true, 5);
module.exports = {
    title: 'Taha Blog',
    dest: 'public',
    base: '/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' }
        ],
        sidebar: blogPosts
    }
}