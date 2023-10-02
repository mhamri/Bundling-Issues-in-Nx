// import replace from '@rollup/plugin-replace';

module.exports =  (config, options)=>{
  return {

    ...config,
    plugins:[
      ...config.plugins,
      {
        name: '@rollup/plugin-replace',
        transform: (x)=>{
          console.log(x);
          return x.replace(/ __BuildDate__/, new Date()); 
        }
      }
    ]
  }

};