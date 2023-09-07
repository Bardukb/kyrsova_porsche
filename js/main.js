// ідентифікатори та документ

const collapseButton1 = document.getElementById("box-button");
const collapseButton2 = document.getElementById("box-button2");
const boxToCollapse1 = document.getElementById("box1");
const boxToCollapse2 = document.getElementById("box2");

let count = 0;
let count2 = 0;
// слухачі події
collapseButton1.addEventListener('click', () => {
    console.log(count);
    if (count === 0){
        boxToCollapse1.innerHTML = `
            <div class="card-box">
            <p>A flexible finance plan designed to allow you to drive a new or used Porsche sooner than you may think.</p>                 
            </div>
        `;
        count++;
        count2 = 0;
        console.log("count 1 - ", count)
        console.log("count 2 - ", count2);
        collapseButton1.classList.add('active');
        collapseButton2.classList.remove('active');
    }
    else if(count === 1){
        boxToCollapse1.innerHTML = '';
        count--;
        console.log("count 1 - ", count);
        collapseButton1.classList.remove('active');
    }
});
collapseButton2.addEventListener('click', () => {
    console.log(count2);
    if (count2 === 0){
        boxToCollapse1.innerHTML = `
            <div class="card-box">
            <p>A rental agreement that allows you to drive a Porsche without needing to own it, ideal for business customers.</p>                 
            </div>      
        `;
        count2++;
        count = 0;
        console.log('count 2 - ',count);
        console.log("count 1 - ", count)
        collapseButton2.classList.add('active');
        collapseButton1.classList.remove('active');

    }
    else if(count2 === 1){
        boxToCollapse1.innerHTML = '';
        count2--;
        console.log('count 2 - ',count);
        collapseButton2.classList.remove('active');
    }
})


// планер картка
new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    draggable: true,
    dots: '#dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
})

new Glider(document.querySelector('.glider-res'), {
    slidesToShow: 1,
    draggable: true,
    dots: '#dots-res',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
})

// планер картка
new Glider(document.querySelector('.glider2'), {
    slidesToShow: 2,
    draggable: true,
    dots: '#dots2',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
})

// планер картка
new Glider(document.querySelector('.glider2-res'), {
    slidesToShow: 1,
    draggable: true,
    dots: '#dots2-res',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
})


new Glider(document.querySelector('.glider3'), {
    slidesToShow: 2,
    dots: '#dots3',
    arrows: {
      prev: '.prev',
      next: '.next'
    }
  });


new Glider(document.querySelector('.glider-main'), {
    slidesToShow: 2,
    draggable: true,
    dots: '#dots4',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});