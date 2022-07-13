const searchForm = document.querySelector('.form-search');
const controlInput = document.querySelector('.page-header__container');

controlInput.addEventListener('change', (evt)=>{
  if (evt.target.nodeName === 'INPUT'){
    searchForm.requestSubmit();
  }
})
