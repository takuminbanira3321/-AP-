const form = document.querySelector('#login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // �f�t�H���g�̃t�H�[�����M��h�~����

  // �t�H�[���̒l���擾����
  const username = form.elements.username.value;
  const password = form.elements.password.value;

  // �t�H�[���̃o���f�[�V�������s��
  if (!username || !password) {
    alert('���[�U�[���ƃp�X���[�h����͂��Ă�������');
    return;
  }

  // ���O�C���̏������s��
  // �����ł̓T���v���Ƃ��āA���[�U�[����admin�A�p�X���[�h��password�̏ꍇ�Ƀ��O�C�������Ƃ���
  if (username === 'admin' && password === 'password') {
    alert('���O�C���������܂���');
  } else {
    alert('���[�U�[���܂��̓p�X���[�h���Ԉ���Ă��܂�');
  }
});



