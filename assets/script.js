const navButton = document.querySelector('.nav-btn');
const navMobile = document.querySelector('.nav-mobile');

const profileModal = document.querySelector('#modal-profile');
const openProfileModal = document.querySelector('.btn-profile-box');
const closeProfileModal = document.querySelector('.btn-close-profile');

// ---------------------------------------------------------------

let coll = document.getElementById('snapshot-collection-1');
let collectionPage = document.getElementById('collection-page');
let totalImg = 25;
// Article iteration
for (let index = 2; index < totalImg; index++) {
   const articleLoop = coll.cloneNode(true);

   collectionPage.appendChild(articleLoop);
   document.getElementById('img-src').src = 'assets/images/pic-' + index + '.jpeg';
}
// Dialog iteration
for (let modalNumber = 2; modalNumber < totalImg; modalNumber++) {

   const dialogImg = document.getElementById('img-modal-1');
   const dialogImgSrc = dialogImg.cloneNode(true);

   document.getElementById('collection-page').appendChild(dialogImgSrc);
   document.getElementById('img-dialog-src-1').id = 'img-dialog-src-' + modalNumber;
   document.getElementById('img-dialog-src-1').src = 'assets/images/pic-' + modalNumber + '.jpeg';

   document.getElementById('img-modal-1').id = 'img-modal-' + modalNumber;
   document.getElementById('snapshot-collection-1').id = 'snapshot-collection-' + modalNumber;
   document.getElementById('btn-close-img-1').id = 'btn-close-img-' + modalNumber;

   var closeImageModal = document.getElementById('btn-close-img-' + (modalNumber - 1));
   var snapModal = document.getElementById('snapshot-collection-' + modalNumber);

   let imageModal = document.querySelector('#img-modal-' + (modalNumber - 1));
   snapModal.addEventListener('click', function () {
      imageModal.showModal();
   });

   closeImageModal.addEventListener('click', function () {
      imageModal.classList.add('hide-collection-modal');
      imageModal.addEventListener('webkitAnimationEnd', function () {
         imageModal.classList.remove('hide-collection-modal');
         imageModal.close();
         imageModal.removeEventListener('webkitAnimationEnd', arguments.callee, false);
      }, false);
   });
}

navButton.addEventListener('click', function () {
   navButton.classList.toggle('active');
   navMobile.classList.toggle('active');
});

openProfileModal.addEventListener('click', function () {
   profileModal.showModal();
});

closeProfileModal.addEventListener('click', function () {
   profileModal.classList.add('hide-profile-modal');
   profileModal.addEventListener('webkitAnimationEnd', function () {
      profileModal.classList.remove('hide-profile-modal');
      profileModal.close();
      profileModal.removeEventListener('webkitAnimationEnd', arguments.callee, false);
   }, false);
});

// Context menu restriction
document.onkeydown = function (e) {
   if (event.keyCode == 123) {
      return false;
   }
   if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
   }
   if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
   }
   if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
   }
   if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
   }
}
