export function theme() {
    // const circle = document.querySelector('.circle');


    // circle.addEventListener('click', click_theme );

    // function click_theme() {
    //     // console.log(circle.offsetLeft);

    //     if (circle.offsetLeft === 0) {
    //         console.log('left');
    //         circle.setAttribute('style', 'left: 40px;');
            
    //     } else {
    //         console.log('right');
    //         circle.setAttribute('style', 'left: 0px;');
            
    //     }


    // }
    $(document).ready(function () {
        $('.circle').click(function () {
            $('.circle').animate({
                left: '40px'
            }, {
                duration: 100,
                easing: 'linear'
            }

            )
        });
    });
}