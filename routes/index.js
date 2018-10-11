const router = require('koa-router')()
const ip = require('ip');
const getDockerHost = require('get-docker-host');
const isInDocker = require('is-in-docker');

router.get('/', async (ctx, next) => {

  const address = await checkDocker();


  if(ctx.request.header['user-agen']!=='ELB-HealthChecker/2.0'){
    console.log(ctx.request.header);
  }
  

  
  await ctx.render('index', {
    title: JSON.stringify(ctx.request.header)
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})


checkDocker = () => {
  return new Promise((resolve, reject) => {
      if (isInDocker()) {
          getDockerHost((error, result) => {
              if (result) {
                  resolve(result);
              } else {
                  reject(error);
              }
          });
      } else {
          resolve(null);
      }
  });
};




module.exports = router
