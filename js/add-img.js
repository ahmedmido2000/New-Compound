var uploudedImage = "";
let uploadedImagesContainer = document.querySelector(".uploaded-images-container");
console.log(uploadedImagesContainer);
function addImg() {
    let asdx = 0
    let imageContainer;
         // Read selected files
         var totalfiles = document.getElementById('upload-image-input').files
         console.log(Object.keys(totalfiles).length)
         Object.keys(totalfiles).forEach(function(index) {
           console.log(index)
           const reader = new FileReader();
           var data = new FormData()
           reader.readAsDataURL(totalfiles[index]);
           reader.addEventListener("load", () => {
             uploudedImage = reader.result;
             imageContainer = `<div class="col-lg-3 col-md-6 mb-3 position-relative">
                 <span class="text-white p-1" style="position:absolute;top:10px;right:20px;cursor:pointer"><i class="fa-solid fa-trash" style="font-size:25px;color:#150B3D ;" onclick="this.parentElement.parentElement.remove()"></i></span>
                 <img class="card-img-top" id="upload-image" src="${uploudedImage}" alt="Card image cap" style=" width: 100%;height:230px;">
                 </div>`;
             uploadedImagesContainer.innerHTML += imageContainer; 
           });
           asdx++
                   
         });


         
        };