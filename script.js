activ_tab = 1;

//Функция для переключения по табам
function tab_click(tab) {
    //Окрашиваю табы текст в никакой дефолтный цвет + выключаю все слайды
    for (let i = 1; i <= 3; i++) {
        document.getElementById("choose-slider-tab" + i).style.display = 'none';
        document.getElementById("tab" + i).style.borderBottom = "2px solid rgba(188, 165, 106, 0)";
        document.getElementById("tab" + i).style.color = "#3D3C3C";
    }
    //Окрашиваю в цвет активный таб + включаю его слайдер
    document.getElementById("choose-slider-tab" + tab).style.display = 'block';
    document.getElementById("tab" + tab).style.borderBottom = "2px solid rgba(188, 165, 106, 1)";
    document.getElementById("tab" + tab).style.color = "#BCA56A";
    activ_tab = tab
}

/* Функция чтобы листать слайдер */
function slide(side) {
    let start = Date.now();

    //Переменные чтобы определять сколько у нас всего слайдов
    let min_slide_number = 0;
    let max_slide_number = 0;
    //Ищу последний слайд
    while (true) {
        try {
            document.getElementById("tab" + activ_tab +"img" + (max_slide_number + 1)).style;
        }
        catch {
            break
        }
        max_slide_number++;
    }
    //Еси у меня есть последний слайд значит есть и первый
    if (max_slide_number >= 1) min_slide_number = 1;

    //Анимация слайдера
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        if (timePassed >= 500) {         
            clearInterval(timer);
            return;
        }
        //Определение ориентации слайдера
        if (side == 'right') {
            //Проверка не является ли мой слайд последним чтобы не прокручивать в пустоту
            if (parseInt(getComputedStyle(document.getElementById("tab" + activ_tab +"img" + max_slide_number)).marginLeft.replace('px', '')) > 0) {
                for (let i = 1; i <= max_slide_number; i++) {
                    document.getElementById("tab" + activ_tab +"img" + i).style.marginLeft = String(parseInt(getComputedStyle(document.getElementById("tab" + activ_tab +"img" + i)).marginLeft.replace('px', '')) - 20) + "px";
                }
            }
            else
            {
                return;
            }
        }
        else {
            //Проверка не является ли мой слайд последним чтобы не прокручивать в пустоту
            if (parseInt(getComputedStyle(document.getElementById("tab" + activ_tab +"img" + min_slide_number)).marginLeft.replace('px', '')) < 0) {
                for (let i = 1; i <= max_slide_number; i++) {
                    document.getElementById("tab" + activ_tab +"img" + i).style.marginLeft = String(parseInt(getComputedStyle(document.getElementById("tab" + activ_tab +"img" + i)).marginLeft.replace('px', '')) + 20) + "px";
                }
            }
            else
            {
                return;
            }
        }
    }
    , 24);
}

let slide_widths = ['560px', '260px','276px']
let slide_heights = ['536px', '304px','504px']
let slide_img_width = ['560px', '260px','260px']
let slide_img_height = ['432px', '176px', '360px']
let marginTop = ['192px','480px','88px']
let marginLeft = ['116px','716px','1016px']

//Функция для слайдера 
function slider_allinclusive(str) {
    if (screen.width < 768) {
        if (str == 'left') {
            for (let i = 1; i <= 3; i++){
                document.getElementById("allinclusive-slide-" + i).style.marginTop = String(parseInt(getComputedStyle(document.getElementById("allinclusive-slide-" + i)).marginTop.replace('px', '')) - 376) + "px";
                if (parseInt(getComputedStyle(document.getElementById("allinclusive-slide-" + i)).marginTop.replace('px', '')) < 0) document.getElementById("allinclusive-slide-" + i).style.marginTop = '776px'
            }
        } else {
            for (let i = 1; i <= 3; i++){
                document.getElementById("allinclusive-slide-" + i).style.marginTop = String(parseInt(getComputedStyle(document.getElementById("allinclusive-slide-" + i)).marginTop.replace('px', '')) + 376) + "px";
                if (parseInt(getComputedStyle(document.getElementById("allinclusive-slide-" + i)).marginTop.replace('px', '')) > 1000) document.getElementById("allinclusive-slide-" + i).style.marginTop = '0px'
            }
        }
        return;
    }
    //Ищу активный слайдер элемент
    let imax = 1

    for (; imax <= 3; imax++){
        if ((getComputedStyle(document.getElementById("allinclusive-slide-" + imax)).marginTop) == '192px') break
    }

    if (str == 'right') {
        for (let i = 0; i <= 2; i++){
            imax += 1;
            if (imax > 3) imax -= 3;

            document.getElementById("allinclusive-slide-" + imax).style.width = slide_widths[i]
            document.getElementById("allinclusive-slide-" + imax).style.height = slide_widths[i]
            document.getElementById("allinclusive-slide-" + imax).style.marginTop = marginTop[i];
            document.getElementById("allinclusive-slide-" + imax).style.marginLeft = marginLeft[i];
            document.getElementById("allinclusive-slide-" + imax + "-imadge").style.width = slide_img_width[i];
            document.getElementById("allinclusive-slide-" + imax + "-imadge").style.height = slide_img_height[i];
            document.getElementById("allinclusive-slide-" + imax + "-imadge").style.backgroundSize = slide_img_width[i] + ' ' + slide_img_height[i];
        }
    }
    if (str == 'left') {
        imax += 1;
        for (let i = 0; i <= 2; i++){
            imax += 1;
            if (imax > 3) imax -= 3;

            document.getElementById("allinclusive-slide-" + imax).style.width = slide_widths[i]
            document.getElementById("allinclusive-slide-" + imax).style.height = slide_widths[i]
            document.getElementById("allinclusive-slide-" + imax).style.marginTop = marginTop[i];
            document.getElementById("allinclusive-slide-" + imax).style.marginLeft = marginLeft[i];
            document.getElementById("allinclusive-slide-" + imax + "-imadge").style.width = slide_img_width[i];
            document.getElementById("allinclusive-slide-" + imax + "-imadge").style.height = slide_img_height[i];
            document.getElementById("allinclusive-slide-" + imax + "-imadge").style.backgroundSize = slide_img_width[i] + ' ' + slide_img_height[i];
        }
    }
}

// Функция для отображения подменю
function submenu(num) {
    for (let i = 0; i < 10; i++){
        document.getElementById("submenu-" + i).style.display = 'none';
    }
    document.getElementById("submenu-" + num).style.display = 'flex';
}

// Функция слайдера в меню
function pad_slide(num){
    for (let i = 1; i < 4; i++) {
        document.getElementById("side-pad-slide-" + i).style.display = 'none';
        document.getElementById("side-pad-slide-border-" + i).style.background = 'none';
        document.getElementById("side-pad-slide-button-" + i).style.background = '#FFFFFF';
    }
    document.getElementById("side-pad-slide-" + num).style.display = 'flex';
    document.getElementById("side-pad-slide-border-" + num).style.background = 'url(img/time.svg)';
    document.getElementById("side-pad-slide-button-" + num).style.background = '#D9C287';
}

// Функция открытия меню
function side_show() {
    document.getElementById("side").style.display = 'flex';
}   

// Функция закрытия меню
function side_close() {
    document.getElementById("side").style.display = 'none';
}

function mobile_submenu(str) {
    if (document.getElementById("side-mobile-submenu-" + str).style.display == 'flex' ) {
        document.getElementById("side-mobile-submenu-" + str).style.display = 'none';
        document.getElementById("side-mobile-menu-" + str).style.background = 'rgba(217, 194, 135, 0)';
        document.getElementById("side-mobile-menu-" + str).style.borderRadius = '0px';
    } else {
        document.getElementById("side-mobile-submenu-" + str).style.display = 'flex';
        document.getElementById("side-mobile-menu-" + str).style.background = 'rgba(217, 194, 135, 0.16)';
        document.getElementById("side-mobile-menu-" + str).style.borderRadius = '8px';
    }
}

function side_show_mobile() {
    document.getElementById("mobile").style.display = 'none';
    document.getElementById("side-mobile").style.display = 'block';
    document.getElementById("side-mobile").style.minHeight = (screen.height + "px");
}

function side_close_mobile() {
    document.getElementById("mobile").style.display = 'block';
    document.getElementById("side-mobile").style.display = 'none';
}