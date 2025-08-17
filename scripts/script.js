function signin () {
    const signinModal = document.getElementById('signin-modal');
    signinModal.style.display = 'flex';

    signinModal.addEventListener('click', (e) => {
        if (e.target.id == 'close-signin' || e.target.id == 'signin-modal') {
            signinModal.style.display = 'none';
        };
    });
};