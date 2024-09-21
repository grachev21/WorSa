import { theme } from './theme.js';
import { test_jquery } from './test_jquery.js';
import { test_ajax_request } from './test_ajax_request.js';
// import { show_block } from './show_block.js';
// import { image_line } from "./image_line.js";
// import { hot_deal } from './hot_deal.js';
// import { photo_blog } from './photo_blog.js';
// import { instagram } from './instagram.js';
// import { on, off } from './adaptability.js';


window.onload = function main() {

    // window.addEventListener("resize", mobile);
    // document.addEventListener("DOMContentLoaded", mobile())
    // function mobile() {
    //     console.log("change_size");
    //     const change_mobile = document.documentElement.clientWidth;
    //     if (change_mobile <= 1200) {
    //         on()
    //     } else {
    //         off()
    //     }
    // }



    theme()
    test_jquery()
    test_ajax_request()
    
    // show_block()
    // mobile_menu()
    // image_line()
    // hot_deal()
    // photo_blog()
    // instagram()
}

