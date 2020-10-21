export default ({$axios, $config, store, redirect}) => {
  $axios.onError(error => {
    if (error.response && error.response.status === 500) {
      redirect('/login')
    }
  })

  $axios.interceptors.request.use(
    config => {
    if ($config.auth_token !== undefined && config.headers['X-AUTH-TOKEN'] === undefined) {
      // config.headers['X-AUTH-TOKEN'] = $config.auth_token;
    }
    console.log('request', config)
    // Do something before request is sent
    return config;
  }, error => {
    // Do something with request error
    return Promise.reject(error);
  });

  $axios.interceptors.response.use(
    response => {
      if (response.status === 200) {
      }
      return response
    }, error => {
      return Promise.reject(error);
    }
  )
}
