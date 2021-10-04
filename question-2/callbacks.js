const resolvedPromise = () => {
    const resolvePractice = new Promise(function (resolve, reject) {
      setTimeout(() => {
        let success={'message': "dclearelayed success!"};
        resolve(success);
      }, 500)
  })
    return resolvePractice;
  }


  const rejectedPromise = () => {
    const  rejectPractice = new Promise(function (resolve, reject) {
      setTimeout(() => {
        try{
          let fail={'error':'delayed exception!'};
          reject(fail);
        }catch(e){
          console.error(e);
        }
      }, 500)
  })
    return rejectPractice;
  }

resolvedPromise().then(result=>console.log(result))

rejectedPromise().then(result=>console.log(result))
                .catch((error) => console.log(error));