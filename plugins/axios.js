export default ({
  $axios,
  store,
  redirect
}) => {
  $axios.onError(error => {
    if (error.response && error.response.status === 500) {
      redirect('/login')
    }
  })
  $axios.interceptors.request.use(
    config => {
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
        console.log('intercepter intercepter', store, response)
      }
      return response
    }, error => {
      return Promise.reject(error);
    }
  )
}
