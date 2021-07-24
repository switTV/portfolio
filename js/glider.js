window.addEventListener('load',function(){
  new Glider(document.querySelector('.carousel__lista'),{
    slidesToShow: 3,
    slidesToScroll: 2,
    draggable: true,
    dots: '.dots',
  });
});