const form = document.querySelector('#login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // デフォルトのフォーム送信を防止する

  // フォームの値を取得する
  const username = form.elements.username.value;
  const password = form.elements.password.value;

  // フォームのバリデーションを行う
  if (!username || !password) {
    alert('ユーザー名とパスワードを入力してください');
    return;
  }

  // ログインの処理を行う
  // ここではサンプルとして、ユーザー名がadmin、パスワードがpasswordの場合にログイン成功とする
  if (username === 'admin' && password === 'password') {
    alert('ログイン成功しました');
  } else {
    alert('ユーザー名またはパスワードが間違っています');
  }
});



