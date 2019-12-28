export default class Apicall {

  get params(){
    return {url: this.url, limit: this.limit, offset: this.offset};
  }
  
  set params(array){
    this.url = array[0];
    this.limit = array[1];
    this.offset = array[2];
  }

  async getData() {
    await axios.get(this.url, {
      params: {
        limit: this.limit,
        offset: this.offset,
      }
    },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
      .then(function (response) {
        // handle success
        console.log(response.data);
        return;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

}


