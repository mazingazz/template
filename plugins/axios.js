export default ({$axios, $config, store, redirect}) => {
  $axios.interceptors.request.use(
    config => {
    // Do something before request is sent
    return config;
  }, error => {
    // Do something with request error
    console.log('axios request error', error)
    return Promise.reject(error);
  });

  $axios.interceptors.response.use(
    response => {
      
      if (response.status === 200) {
      }
      return response
    }, error => {
      console.log('axios response error', error.response)
      return Promise.reject(error);
    }
  )
}
