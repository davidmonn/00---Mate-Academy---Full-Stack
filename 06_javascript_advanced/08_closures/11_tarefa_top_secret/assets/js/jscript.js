function makeSecret(secret, password) {
  let sec = secret;
  let verifPassword = password;
  const msg = 'Absolutely not a secret thing';
  const error = 'Wrong password!';
  let count = 0;

  function storage() {
    return msg;
  }

  storage.getSecret = (pass) => {
    if (count >= 3) {
      return null;
    }

    if (pass !== verifPassword) {
      count++;

      return error;
    }

    count = 0;

    return sec;
  };

  storage.setSecret = (newSecret, newPassword) => {
    sec = newSecret;
    verifPassword = newPassword;
    count = 0;
  };

  return storage;
}

const storage = makeSecret('Santa exists!', 'qwerty')
console.log(storage()) //=== 'Absolutely not a secret thing'

