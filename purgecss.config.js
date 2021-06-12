module.exports = {
    content: ['./dist/*.{html,js}'],
  
    defaultExtractor: (content) => {
     /*
      * this is taken from tailwind's sourcecode to prevent used tailwind classes with specail characters like 
      * @ - \ / to prevent in post-build purge script
      * */        

      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

      return broadMatches.concat(innerMatches);
    },
  
    css: ['./dist/*.css'],
    options: {
      safelist: [], // add if any special exceptions
    },
    output: './dist/',
  };