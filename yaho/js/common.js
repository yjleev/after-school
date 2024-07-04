$(document)
    .on('mouseenter mouseleave', '.gnb', menu)
    .on('click', '.notice li:eq(0), .layer__close', layerToggle)
    .on('ready', slide)

function menu() {
    $('.gnb>div, .gnb ul ul').stop().slideToggle(300)
}

function slide() {
    let pos = 0
    setInterval(function () {
        pos = (pos + 1) % 3
        $('.slide ul')
            .animate({
                marginTop: -300 * pos + 'px'
            }, 500)
    }, 3000)
}

function layerToggle() {
    $('.layer').toggle()
}


