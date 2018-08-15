/**
  * ada beberapa macam type Error dijavascript
  * yaitu :
  * 
    1. EvalError
    2. InternalError
    3. RangeError
    4. ReferenceError
    5. SyntaxError
    6. TypeError
    7. URIError

    semua jenis error diatas kita bisa handle dengan try..catch
  */

  /**
   * Jika kita mau, kita bisa tambahain type Error sesuai keiinginan
   * 
   * misal kita ingin ada tipe error khsus untuk http request yang gagal
   * misal kita namai HttpError
   * 
   * maka tinggal kita inherit aja dari built-in class Error
   */

  // ES6

class HttpError extends Error {
  constructor(response) {
    super();
    this.status = response.status;
    this.name = 'HttpError';
    this.message = `${this.status} ${this.errorText()}`;
  }
  errorText() {
    switch(this.status) {
      case 404:
        return 'Not found'
        break;
      case 400:
        return 'Bad request';
        break;
      default:
        return 'Internal Server Error';
        break;
    }
  }
}

// testing the class

if (true) { // simulate status !== 200
  throw new HttpError({status: 400}); // HttpError: 400 Bad request...
}

// kita bisa juga buat Extension untuk tipe-tipe yang lainnya
class myError extends URIError {
  // sama kayak di HttpError
}

class myError extends TypeError {
  // sama kayak di HttpError
}