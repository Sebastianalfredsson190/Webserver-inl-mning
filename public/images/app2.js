const imgDiv = document.querySelector('.profil-pic-div')
const img = document.querySelector('.profilpic')
const file = document.querySelector('.file')
const uploadBtn = document.querySelector('.uploadBtn')

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});

file.addEventListener('change', function(){
    const choosedFile = this.files[0];
    if(choosedFile){
        const reader = new FileReader();

        reader.addEventListener('load',function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});