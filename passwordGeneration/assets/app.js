import './_scss/styles.scss';

const passGenerator = () => {
  let password = '';
  const length = 30;
  const charSet =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,@#!?$';

  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  console.log(`This is your randomly generated password: ${password}`);
};

passGenerator();