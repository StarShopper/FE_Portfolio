$(function () {

    //initialising a slick slider

    const worksSlider = $('[data-slider="slick"]');

    /* Filter */
    //function that filter a content in the .works block

    let filter = $('[data-filter]')

    filter.on('click', function (event) {
        event.preventDefault()

        let cat = $(this).data('filter')

        if (cat == 'all') {
            $('[data-cat]').removeClass('hide')
        } else {

            $('[data-cat]').each(function () {

                let workCat = $(this).data('cat')

                if (workCat != cat) {
                    $(this).addClass('hide')
                } else {
                    $(this).removeClass('hide')
                }
            })
        }
    })

    /* Modal*/

    //function that open and close the modal window

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]")

    //function that open the modal window

    modalCall.on("click", function (event) {

        event.preventDefault()
        let $this = $(this)

        let modalId = $this.data('modal')

        $(modalId).addClass('show')
        $('body').addClass('no-scroll')


        setTimeout(function(){
            $(modalId).find('.modal__dialog').css({
                transform: "rotateX(0)"
            })
        }, 200);

        worksSlider.slick('setPosition');
    });

    //function that closes the modal window

    modalClose.on("click", function (event) {
        event.preventDefault()

        let $this = $(this)
        let modalParent = $this.parents('.modal')

        modalParent.find('.modal__dialog').css({
            transform: "rotateX(90deg)"
        })

        setTimeout(function(){
            modalParent.removeClass('show')
            $('body').removeClass('no-scroll')
        }, 200);
    });


    $('.modal').on("click", function (event) {
        let $this = $(this);

        $this.find('.modal__dialog').css({
            transform: "rotateY(90deg)"
        })

        setTimeout(function(){
            $this.removeClass('show')
            $('body').removeClass('no-scroll')
        }, 200);

    });


    $('.modal__dialog').on("click", function (event) {
        event.stopPropagation()
    });


    /* Slider https://kenwheller.github.io/slick/ */

    worksSlider.slick({
        infinte: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true

    })

    $('.slickPrev').on('click', function(event){
        event.preventDefault()

        let currentSlider =$(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick('slickPrev')
    })

    $('.slickNext').on('click', function(event){
        event.preventDefault()

        let currentSlider =$(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick('slickNext')
    })


    /* Mobile nav */

    const navToggle = $('#navToggle');
    const nav = $('#nav');

    navToggle.on('click', function(event){
        event.preventDefault()

        nav.toggleClass('show');


    })


    // const preventArt = $('.articles__photo')

    //function that prevents redirecting page focus to header

    $('.articles__col').on('click', function(event){
        event.preventDefault()
    })
});