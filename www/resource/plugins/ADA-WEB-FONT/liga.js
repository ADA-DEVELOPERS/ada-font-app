/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'ada-ambulance': '&#xeb66;',
            'ada-baby-face': '&#xeb67;',
            'ada-bandage-cross': '&#xeb68;',
            'ada-biohazard': '&#xeb69;',
            'ada-biology-shape': '&#xeb6a;',
            'ada-blood-analysis': '&#xeb6b;',
            'ada-blood-cell': '&#xeb6c;',
            'ada-blood-drop': '&#xeb6d;',
            'ada-blood-pressure-control-tool': '&#xeb6e;',
            'ada-blood-sample': '&#xeb6f;',
            'ada-blood-transfusion': '&#xeb70;',
            'ada-brain-in-bald-male-head': '&#xeb71;',
            'ada-broken-bone': '&#xeb72;',
            'ada-broken-feet-with-bandage': '&#xeb73;',
            'ada-brush-with-tooth-paste': '&#xeb74;',
            'ada-caduceus-medical-symbol-of-two-ascending-serpents-on-a-cane-with-wings': '&#xeb75;',
            'ada-cells-in-a-circle': '&#xeb76;',
            'ada-chemistry-flask-with-liquid': '&#xeb77;',
            'ada-crutch': '&#xeb78;',
            'ada-crutches-couple': '&#xeb79;',
            'ada-dentist-tool': '&#xeb7a;',
            'ada-dosage-medical-tool': '&#xeb7b;',
            'ada-drug-pills': '&#xeb7c;',
            'ada-drugs-capsules-and-pills': '&#xeb7d;',
            'ada-emergency-light': '&#xeb7e;',
            'ada-eye-scanner-medical-symbol': '&#xeb7f;',
            'ada-family-of-heterosexual-couple': '&#xeb80;',
            'ada-female-sign': '&#xeb81;',
            'ada-first-aid-kit': '&#xeb82;',
            'ada-handicap': '&#xeb83;',
            'ada-heart-beats-lifeline-in-a-heart': '&#xeb84;',
            'ada-heart-black-shape': '&#xeb85;',
            'ada-heart-rate-monitor': '&#xeb86;',
            'ada-hospital-bed-silhouette-side-view': '&#xeb87;',
            'ada-hospital-building-front': '&#xeb88;',
            'ada-hospital-letter-sign-in-rounded-square': '&#xeb89;',
            'ada-hospital-medical-signal-of-a-cross-in-a-circle': '&#xeb8a;',
            'ada-hospital-placeholder': '&#xeb8b;',
            'ada-human-ear-shape': '&#xeb8c;',
            'ada-human-eye-shape': '&#xeb8d;',
            'ada-human-feet-shape': '&#xeb8e;',
            'ada-hurted-finger-with-bandage': '&#xeb8f;',
            'ada-illness-on-bed': '&#xeb90;',
            'ada-lifeline-of-heartbeats-on-a-paper-on-a-clipboard': '&#xeb91;',
            'ada-lungs-silhouette': '&#xeb92;',
            'ada-male-gender-sign': '&#xeb93;',
            'ada-medical-chain-symbol-of-dna': '&#xeb94;',
            'ada-medical-chopper-transport': '&#xeb95;',
            'ada-medical-circular-glasses': '&#xeb96;',
            'ada-medical-doctor-specialist': '&#xeb97;',
            'ada-medical-hammer-tool': '&#xeb98;',
            'ada-medical-heart-scan': '&#xeb99;',
            'ada-medical-notes': '&#xeb9a;',
            'ada-medical-pill': '&#xeb9b;',
            'ada-medical-results-folders': '&#xeb9c;',
            'ada-medical-test': '&#xeb9d;',
            'ada-medical-talk': '&#xeb9e;',
            'ada-medical-temperature-control-tool': '&#xeb9f;',
            'ada-medicine-capsules': '&#xeba0;',
            'ada-medicines-bowl': '&#xeba1;',
            'ada-medicine-small-bottle': '&#xeba2;',
            'ada-men-silhouette': '&#xeba3;',
            'ada-microscope-tool': '&#xeba4;',
            'ada-mother-with-baby': '&#xeba5;',
            'ada-mouth-bald': '&#xeba6;',
            'ada-negative-sign': '&#xeba7;',
            'ada-woman-nurse': '&#xeba8;',
            'ada-nurse-u': '&#xeba9;',
            'ada-scissors': '&#xebaa;',
            'ada-oxygen': '&#xebab;',
            'ada-person-broken': '&#xebac;',
            'ada-pharmacy-shopping-cart': '&#xebad;',
            'ada-pharmacy': '&#xebae;',
            'ada-pharmacy-tool': '&#xebaf;',
            'ada-poison-bottle': '&#xebb0;',
            'ada-positive-verified': '&#xebb1;',
            'ada-pregnancy': '&#xebb2;',
            'ada-pulse-line': '&#xebb3;',
            'ada-rolled-paper': '&#xebb4;',
            'ada-scale-balanced': '&#xebb5;',
            'ada-scale-tool-control': '&#xebb6;',
            'ada-scalpel': '&#xebb7;',
            'ada-screw': '&#xebb8;',
            'ada-sperm': '&#xebb9;',
            'ada-stethoscope': '&#xebba;',
            'ada-stomach-shape': '&#xebbb;',
            'ada-cancer-ribbon': '&#xebbc;',
            'ada-syringe': '&#xebbd;',
            'ada-syrup-medicine': '&#xebbe;',
            'ada-tag-cross': '&#xebbf;',
            'ada-teeth': '&#xebc0;',
            'ada-thermometer': '&#xebc1;',
            'ada-hexagons': '&#xebc2;',
            'ada-toxic': '&#xebc3;',
            'ada-unhealthy': '&#xebc4;',
            'ada-heterosexual': '&#xebc5;',
            'ada-glass': '&#xebc6;',
            'ada-silhouette': '&#xebc7;',
            'ada-women': '&#xebc8;',
            'ada-x-ray': '&#xebc9;',
            'ada-baby-carriage': '&#xebca;',
            'ada-baby-on-stroller': '&#xebcb;',
            'ada-baby-playing': '&#xebcc;',
            'ada-bboy': '&#xebcd;',
            'ada-boy-in-bath': '&#xebce;',
            'ada-boy-rised': '&#xebcf;',
            'ada-child-balloon': '&#xebd0;',
            'ada-couple': '&#xebd1;',
            'ada-couple-in-love': '&#xebd2;',
            'ada-couple-brothers': '&#xebd3;',
            'ada-couple-man': '&#xebd4;',
            'ada-couple-sisters': '&#xebd5;',
            'ada-couple-two-women-house': '&#xebd6;',
            'ada-with': '&#xebd7;',
            'ada-couple-daughter-heart': '&#xebd8;',
            'ada-crawling-baby': '&#xebd9;',
            'ada-familiar-group': '&#xebdb;',
            'ada-group-couple': '&#xebde;',
            'familiar-group-three': '&#xebe0;',
            'ada-familiar-group-three': '&#xebe1;',
            'ada-familiar-two-child': '&#xebe5;',
            'ada-familiar-two-childs': '&#xebe8;',
            'ada-familiar-love': '&#xebe9;',
            'ada-familiar-meeting': '&#xebea;',
            'ada-family-group-of-a-couple-with-three-children': '&#xebeb;',
            'ada-family-group-dog': '&#xebec;',
            'ada-family-in-home': '&#xebef;',
            'ada-family-of-three': '&#xebf1;',
            'ada-father-shopping': '&#xebf5;',
            'ada-father-playing': '&#xebf6;',
            'ada-father-playingwith-dog': '&#xebf7;',
            'ada-father-turning': '&#xebf8;',
            'ada-father-with-baby-stroller': '&#xebf9;',
            'ada-father-with-daughter': '&#xebfa;',
            'ada-father-daughter': '&#xebfb;',
            'ada-father-son': '&#xebfc;',
            'ada-female-familiar': '&#xebfd;',
            'ada-grandfather': '&#xebfe;',
            'ada-grandmother': '&#xebff;',
            'ada-lesbian-couple': '&#xec00;',
            'ada-male-familiar': '&#xec03;',
            'ada-male-family-group': '&#xec04;',
            'ada-male-family': '&#xec05;',
            'ada-males-couple': '&#xec06;',
            'ada-marriage-girlfriend': '&#xec09;',
            'ada-man-rising': '&#xec0a;',
            'ada-man-silhouette': '&#xec0b;',
            'ada-man-shopping': '&#xec0c;',
            'ada-man-and-baby': '&#xec0d;',
            'ada-men-couple-love': '&#xec0e;',
            'ada-men-couple-daughter': '&#xec0f;',
            'ada-men-couple': '&#xec10;',
            'ada-men-couple-childs': '&#xec11;',
            'ada-mother-and-father': '&#xec12;',
            'ada-mother-and-son': '&#xec13;',
            'ada-mother-carrying': '&#xec14;',
            'ada-mother-changing': '&#xec15;',
            'ada-family-group': '&#xec16;',
            'ada-mother-food': '&#xec17;',
            'ada-mother-loving': '&#xec18;',
            'ada-mother-walking-baby': '&#xec19;',
            'ada-mother-walking': '&#xec1a;',
            'ada-mother-son-stroller': '&#xec1b;',
            'ada-mother-three-babies': '&#xec1c;',
            'ada-mother-arms': '&#xec1d;',
            'ada-mother-car': '&#xec1e;',
            'ada-mother-baby': '&#xec1f;',
            'ada-mother-daughter': '&#xec20;',
            'ada-mother-son': '&#xec21;',
            'ada-pregnant-woman': '&#xec22;',
            'ada-pregnant': '&#xec23;',
            'ada-waiting-lunch': '&#xec24;',
            'ada-three-women': '&#xec25;',
            'ada-men-couple-house': '&#xec26;',
            'ada-kid-familiar': '&#xec27;',
            'ada-woman-standing': '&#xec28;',
            'ada-woman-baby': '&#xec29;',
            'ada-women-couple': '&#xec2a;',
            'ada-women-couple-son': '&#xec2c;',
            'ada-young-woman': '&#xec2d;',
            'ada-boy': '&#xec2e;',
            'ada-casual-male': '&#xec2f;',
            'ada-chef': '&#xec30;',
            'ada-engineer': '&#xec31;',
            'ada-farmer': '&#xec32;',
            'ada-female-chef': '&#xec33;',
            'ada-female-cooker': '&#xec34;',
            'ada-female-engineer': '&#xec35;',
            'ada-female-geek': '&#xec36;',
            'ada-female-graduate': '&#xec37;',
            'ada-gardener': '&#xec38;',
            'ada-geek-person': '&#xec39;',
            'ada-gentleman': '&#xec3a;',
            'ada-girl': '&#xec3b;',
            'ada-graduate': '&#xec3c;',
            'ada-male': '&#xec3d;',
            'ada-man-with-shirt': '&#xec3e;',
            'ada-medical-doctor': '&#xec3f;',
            'ada-medieval-woman': '&#xec40;',
            'ada-person-shirt': '&#xec41;',
            'ada-pilot': '&#xec42;',
            'ada-policeman': '&#xec43;',
            'ada-professor': '&#xec44;',
            'ada-stewardess': '&#xec45;',
            'ada-waiter': '&#xec46;',
            'ada-waitress': '&#xec47;',
            'ada-woman': '&#xec48;',
            'ada-woman-casual': '&#xec49;',
            'ada-woman-dress': '&#xec4a;',
            'ada-on51-squared': '&#xe900;',
            'ada-on56-squared': '&#xe901;',
            'ada-500px-squared': '&#xe902;',
            'ada-px-squared': '&#xe903;',
            'ada-adsworld-squared': '&#xe904;',
            'ada-adsscuttlepad-squared': '&#xe905;',
            'ada-arte10-squared': '&#xe906;',
            'ada-ashleymadison-squared': '&#xe907;',
            'ada-asmallworld-squared': '&#xe908;',
            'ada-badoo-squared': '&#xe909;',
            'ada-baidu-squared': '&#xe90a;',
            'ada-bananity-squared': '&#xe90b;',
            'ada-bandcamp-squared': '&#xe90c;',
            'ada-bebo-squared': '&#xe90d;',
            'ada-behance-squared': '&#xe90e;',
            'ada-bettercodes-squared': '&#xe90f;',
            'ada-bisquits-squared': '&#xe910;',
            'ada-bitacoras-squared': '&#xe911;',
            'ada-bitacorasna-squared': '&#xe912;',
            'ada-blackplanet-squared': '&#xe913;',
            'ada-blogbus-squared': '&#xe914;',
            'ada-blogger-squared': '&#xe915;',
            'ada-bloson-squared': '&#xe916;',
            'ada-bola-a-squared': '&#xe917;',
            'ada-buzznet-squared': '&#xe918;',
            'ada-cafemom-squared': '&#xe919;',
            'ada-care2-squared': '&#xe91a;',
            'ada-caringbridge-squared': '&#xe91b;',
            'ada-cellufun-squared': '&#xe91c;',
            'ada-citeulike-squared': '&#xe91d;',
            'ada-classmates-squared': '&#xe91e;',
            'ada-clubdante-squared': '&#xe91f;',
            'ada-coderwall-squared': '&#xe920;',
            'ada-colourlovers-squared': '&#xe921;',
            'ada-coroflot-squared': '&#xe922;',
            'ada-couchsurfing-squared': '&#xe923;',
            'ada-creattica-squared': '&#xe924;',
            'ada-tv-squared': '&#xe925;',
            'ada-dailymotion-squared': '&#xe926;',
            'ada-deezer-squared': '&#xe927;',
            'ada-delicious-squared': '&#xe928;',
            'ada-desarrollo-squared': '&#xe929;',
            'ada-designrelated-squared': '&#xe92a;',
            'ada-deviantart-squared': '&#xe92b;',
            'ada-digg-f-squared': '&#xe92c;',
            'ada-digg-squared': '&#xe92d;',
            'ada-divoblogger-squared': '&#xe92e;',
            'ada-doodle-ly-squared': '&#xe92f;',
            'ada-douban-squared': '&#xe930;',
            'ada-dribbble-squared': '&#xe931;',
            'ada-ebay-squared': '&#xe932;',
            'ada-etsy-squared': '&#xe933;',
            'ada-everloop-squared': '&#xe934;',
            'ada-ex-fm-squared': '&#xe935;',
            'ada-eyeem-squared': '&#xe936;',
            'ada-facebook-squared': '&#xe937;',
            'ada-fanlala-squared': '&#xe938;',
            'ada-flickr-squared': '&#xe939;',
            'ada-flipkart-squared': '&#xe93a;',
            'ada-flixster-squared': '&#xe93b;',
            'ada-fod-squared': '&#xe93c;',
            'ada-fontli-squared': '&#xe93d;',
            'ada-fotki-squared': '&#xe93e;',
            'ada-fotolog-squared': '&#xe93f;',
            'ada-foursquare-squared': '&#xe940;',
            'ada-friendster-squared': '&#xe941;',
            'ada-funny-or-die-squared': '&#xe942;',
            'ada-gaiaonline-squared': '&#xe943;',
            'ada-gather-squared': '&#xe944;',
            'ada-geni-squared': '&#xe945;',
            'ada-geonick-squared': '&#xe946;',
            'ada-glipho-squared': '&#xe947;',
            'ada-glogster-squared': '&#xe948;',
            'ada-g-plus-squared': '&#xe949;',
            'ada-grooveshark-squared': '&#xe94a;',
            'ada-grou-ps-squared': '&#xe94b;',
            'ada-habbo-squared': '&#xe94c;',
            'ada-habbo-h-squared': '&#xe94d;',
            'ada-heello-squared': '&#xe94e;',
            'ada-hexun-squared': '&#xe94f;',
            'ada-hi5-squared': '&#xe950;',
            'ada-hipstamatic-squared': '&#xe951;',
            'ada-hubbub-squared': '&#xe952;',
            'ada-inside-the-hotel-squared': '&#xe953;',
            'ada-instagram-squared': '&#xe954;',
            'ada-intellectconnect-squared': '&#xe955;',
            'ada-iqyi-squared': '&#xe956;',
            'ada-itsmy-squared': '&#xe957;',
            'ada-itsmy-name-squared': '&#xe958;',
            'ada-jiepang-squared': '&#xe959;',
            'ada-jux-squared': '&#xe95a;',
            'ada-kaixin101-squared': '&#xe95b;',
            'ada-kiwibox-squared': '&#xe95c;',
            'ada-ku6-squared': '&#xe95d;',
            'ada-last-fm-squared': '&#xe95e;',
            'ada-linkedin-squared': '&#xe95f;',
            'ada-literatura-nova-squared': '&#xe960;',
            'ada-meetic-squared': '&#xe961;',
            'ada-meetme-squared': '&#xe962;',
            'ada-meetup-squared': '&#xe963;',
            'ada-meetyourfriends-squared': '&#xe964;',
            'ada-meneame-squared': '&#xe965;',
            'ada-metacafe-squared': '&#xe966;',
            'ada-mixi-squared': '&#xe967;',
            'ada-mocospace-squared': '&#xe968;',
            'ada-myfolio-squared': '&#xe969;',
            'ada-my-heritage-squared': '&#xe96a;',
            'ada-my-life-squared': '&#xe96b;',
            'ada-my-life-name-squared': '&#xe96c;',
            'ada-my-space-squared': '&#xe96d;',
            'ada-myspace-squared': '&#xe96e;',
            'ada-ning-squared': '&#xe96f;',
            'ada-nk-squared': '&#xe970;',
            'ada-notasweb-squared': '&#xe971;',
            'ada-odnoklassniki-squared': '&#xe972;',
            'ada-orkut-squared': '&#xe973;',
            'ada-p1-squared': '&#xe974;',
            'ada-panamo-squared': '&#xe975;',
            'ada-path-squared': '&#xe976;',
            'ada-pengyu-squared': '&#xe977;',
            'ada-pheed-squared': '&#xe978;',
            'ada-pictify-squared': '&#xe979;',
            'ada-pinspire-squared': '&#xe97a;',
            'ada-pinstagram-squared': '&#xe97b;',
            'ada-pinterest-squared': '&#xe97c;',
            'ada-podio-squared': '&#xe97d;',
            'ada-qq-squared': '&#xe97e;',
            'ada-questionity-squared': '&#xe97f;',
            'ada-qzone-squared': '&#xe980;',
            'ada-ravelry-r-squared': '&#xe981;',
            'ada-ravelry-squared': '&#xe982;',
            'ada-redalyc-squared': '&#xe983;',
            'ada-reddit-squared': '&#xe984;',
            'ada-reddit-name-squared': '&#xe985;',
            'ada-rendezvous-squared': '&#xe986;',
            'ada-renren-squared': '&#xe987;',
            'ada-researchgate-squared': '&#xe988;',
            'ada-reverbnation-squared': '&#xe989;',
            'ada-ryze-name-squared': '&#xe98a;',
            'ada-ryze-squared': '&#xe98b;',
            'ada-scoopit-squared': '&#xe98c;',
            'ada-scoopit-name-squared': '&#xe98d;',
            'ada-scribd-squared': '&#xe98e;',
            'ada-sina-squared': '&#xe98f;',
            'ada-sinaeye-squared': '&#xe990;',
            'ada-skyrock-squared': '&#xe991;',
            'ada-slideshare-squared': '&#xe992;',
            'ada-socialcam-squared': '&#xe993;',
            'ada-sonico-squared': '&#xe994;',
            'ada-sonico-smile-squared': '&#xe995;',
            'ada-soundcloud-squared': '&#xe996;',
            'ada-spotbros-squared': '&#xe997;',
            'ada-spotify-squared': '&#xe998;',
            'ada-studivz-squared': '&#xe999;',
            'ada-stumbleupon-squared': '&#xe99a;',
            'ada-symbaloo-squared': '&#xe99b;',
            'ada-tadaa-squared': '&#xe99c;',
            'ada-tagged-squared': '&#xe99d;',
            'ada-tagworld-squared': '&#xe99e;',
            'ada-taringa-squared': '&#xe99f;',
            'ada-telly-squared': '&#xe9a0;',
            'ada-tencent-squared': '&#xe9a1;',
            'ada-threadless-squared': '&#xe9a2;',
            'ada-tianji-squared': '&#xe9a3;',
            'ada-travbuddy-squared': '&#xe9a4;',
            'ada-tribe-squared': '&#xe9a5;',
            'ada-tripadvisor-squared': '&#xe9a6;',
            'ada-tudou-squared': '&#xe9a7;',
            'ada-tuenti-squared': '&#xe9a8;',
            'ada-tumblr-squared': '&#xe9a9;',
            'ada-tu-tv-squared': '&#xe9aa;',
            'ada-tv-tag-squared': '&#xe9ab;',
            'ada-twitpic-squared': '&#xe9ac;',
            'ada-twitter-t-squared': '&#xe9ad;',
            'ada-twitter-squared': '&#xe9ae;',
            'ada-twoo-squared': '&#xe9af;',
            'ada-typophile-squared': '&#xe9b0;',
            'ada-ushi-squared': '&#xe9b1;',
            'ada-vampirefreaks-squared': '&#xe9b2;',
            'ada-viadeo-squared': '&#xe9b3;',
            'ada-viddy-squared': '&#xe9b4;',
            'ada-vimeo-squared': '&#xe9b5;',
            'ada-squared': '&#xe9b6;',
            'ada-vine-v-squared': '&#xe9b7;',
            'ada-vk-squared': '&#xe9b8;',
            'ada-wayn-squared': '&#xe9b9;',
            'ada-weeworld-squared': '&#xe9ba;',
            'ada-weheartit-squared': '&#xe9bb;',
            'ada-weibo-squared': '&#xe9bc;',
            'ada-widbook-squared': '&#xe9bd;',
            'ada-wikiloc-squared': '&#xe9be;',
            'ada-wikipedia-w-squared': '&#xe9bf;',
            'ada-wikipedia-squared': '&#xe9c0;',
            'ada-wordpress-squared': '&#xe9c1;',
            'ada-xanga-squared': '&#xe9c2;',
            'ada-xanga-pusle-squared': '&#xe9c3;',
            'ada-xiami-squared': '&#xe9c4;',
            'ada-xing-squared': '&#xe9c5;',
            'ada-yelp-squared': '&#xe9c6;',
            'ada-youku-squared': '&#xe9c7;',
            'ada-yoursphere-squared': '&#xe9c8;',
            'ada-youtube-squared': '&#xe9c9;',
            'ada-youtube-icon-squared': '&#xe9ca;',
            'ada-yupoo-squared': '&#xe9cb;',
            'ada-zorpia-squared': '&#xe9cc;',
            'ada-on-51-rounded': '&#xe9cd;',
            'ada-56-rounded': '&#xe9ce;',
            'ada-px-rounded': '&#xe9cf;',
            'ada-500px-rounded': '&#xe9d0;',
            'ada-adsofworld-rounded': '&#xe9d1;',
            'ada-ads-rounded': '&#xe9d2;',
            'ada-arte10-rounded': '&#xe9d3;',
            'ada-ashley-madison-rounded': '&#xe9d4;',
            'ada-asmallworld-rounded': '&#xe9d5;',
            'ada-badoo-rounded': '&#xe9d6;',
            'ada-baidu-rounded': '&#xe9d7;',
            'ada-bananity-rounded': '&#xe9d8;',
            'ada-bandcamp-rounded': '&#xe9d9;',
            'ada-bebo-rounded': '&#xe9da;',
            'ada-behance-rounded': '&#xe9db;',
            'ada-bettercodes-rounded': '&#xe9dc;',
            'ada-bisquits-rounded': '&#xe9dd;',
            'ada-bitacoras-b-rounded': '&#xe9de;',
            'ada-bitacoras-rounded': '&#xe9df;',
            'ada-blackplanet-rounded': '&#xe9e0;',
            'ada-blogbus-rounded': '&#xe9e1;',
            'ada-blogger-rounded': '&#xe9e2;',
            'ada-bloson-rounded': '&#xe9e3;',
            'ada-bola-a-rounded': '&#xe9e4;',
            'ada-buzznet-rounded': '&#xe9e5;',
            'ada-cafemom-rounded': '&#xe9e6;',
            'ada-care2-rounded': '&#xe9e7;',
            'ada-caringbridge-rounded': '&#xe9e8;',
            'ada-cellufun-rounded': '&#xe9e9;',
            'ada-citeulike-rounded': '&#xe9ea;',
            'ada-classmates-rounded': '&#xe9eb;',
            'ada-club-dante-rounded': '&#xe9ec;',
            'ada-coderwall-rounded': '&#xe9ed;',
            'ada-colourlovers-rounded': '&#xe9ee;',
            'ada-coroflot-rounded': '&#xe9ef;',
            'ada-couchsurfing-rounded': '&#xe9f0;',
            'ada-creattica-rounded': '&#xe9f1;',
            'ada-cross-tv-rounded': '&#xe9f2;',
            'ada-dailymotion-rounded': '&#xe9f3;',
            'ada-deezer-rounded': '&#xe9f4;',
            'ada-delicious-rounded': '&#xe9f5;',
            'ada-desarrollo-rounded': '&#xe9f6;',
            'ada-designrelated-rounded': '&#xe9f7;',
            'ada-deviantart-rounded': '&#xe9f8;',
            'ada-digg-d-rounded': '&#xe9f9;',
            'ada-digg-rounded': '&#xe9fa;',
            'ada-divoblogger-rounded': '&#xe9fb;',
            'ada-doodle-ly-rounded': '&#xe9fc;',
            'ada-douban-rounded': '&#xe9fd;',
            'ada-dribbble-rounded': '&#xe9fe;',
            'ada-etsy-rounded': '&#xe9ff;',
            'ada-everloop-rounded': '&#xea00;',
            'ada-ex-fm-rounded': '&#xea01;',
            'ada-eyeem-rounded': '&#xea02;',
            'ada-facebook-rounded': '&#xea03;',
            'ada-fanlala-rounded': '&#xea04;',
            'ada-flickr-rounded': '&#xea05;',
            'ada-flipkar-rounded': '&#xea06;',
            'ada-flixster-rounded': '&#xea07;',
            'ada-fod-rounded': '&#xea08;',
            'ada-fontli-rounded': '&#xea09;',
            'ada-fotki-rounded': '&#xea0a;',
            'ada-fotolog-rounded': '&#xea0b;',
            'ada-foursquare-rounded': '&#xea0c;',
            'ada-friendster-rounded': '&#xea0d;',
            'ada-funny-or-die-rounded': '&#xea0e;',
            'ada-gaiaonline-rounded': '&#xea0f;',
            'ada-gather-rounded': '&#xea10;',
            'ada-geni-social-rounded': '&#xea11;',
            'ada-geonick-rounded': '&#xea12;',
            'ada-glipho-rounded': '&#xea13;',
            'ada-glogster-rounded': '&#xea14;',
            'ada-g-plus-rounded': '&#xea15;',
            'ada-grooveshark-rounded': '&#xea16;',
            'ada-grou-ps-rounded': '&#xea17;',
            'ada-habbo-h-rounded': '&#xea18;',
            'ada-habbo-rounded': '&#xea19;',
            'ada-heello-rounded': '&#xea1a;',
            'ada-hexun-rounded': '&#xea1b;',
            'ada-hi5-rounded': '&#xea1c;',
            'ada-hipstamatic-roundedv': '&#xea1d;',
            'ada-hubbub-rounded': '&#xea1e;',
            'ada-inside-the-hotel-rounded': '&#xea1f;',
            'ada-instagra-rounded': '&#xea20;',
            'ada-intellectconnect-rounded': '&#xea21;',
            'ada-iqyi-rounded': '&#xea22;',
            'ada-itsmy-name-rounded': '&#xea23;',
            'ada-itsmy-rounded': '&#xea24;',
            'ada-jiepang-rounded': '&#xea25;',
            'ada-jux-rounded': '&#xea26;',
            'ada-kaixin101-rounded': '&#xea27;',
            'ada-kiwibox-rounded': '&#xea28;',
            'ada-ku6-rounded': '&#xea29;',
            'ada-last-fm-rounded': '&#xea2a;',
            'ada-linkedin-rounded': '&#xea2b;',
            'ada-literatura-nova-rounded': '&#xea2c;',
            'ada-meetic-rounded': '&#xea2d;',
            'ada-meetme-rounded': '&#xea2e;',
            'ada-meetup-rounded': '&#xea2f;',
            'ada-meetyourfriends-rounded': '&#xea30;',
            'ada-meneame-rounded': '&#xea31;',
            'ada-metacafe-rounded': '&#xea32;',
            'ada-mixi-rounded': '&#xea33;',
            'ada-mocospace-rounded': '&#xea34;',
            'ada-myfolio-rounded': '&#xea35;',
            'ada-my-heritage-rounded': '&#xea36;',
            'ada-my-life-rounded': '&#xea37;',
            'ada-my-life-social-logo1': '&#xea38;',
            'ada-my-space-rounded': '&#xea39;',
            'ada-myspace-rounded': '&#xea3a;',
            'ada-ning-rounded': '&#xea3b;',
            'ada-nk-rounded': '&#xea3c;',
            'ada-notasweb-rounded': '&#xea3d;',
            'ada-odnoklassniki-rounded': '&#xea3e;',
            'ada-orkut-rounded': '&#xea3f;',
            'ada-p1-rounded': '&#xea40;',
            'ada-panamo-rounded': '&#xea41;',
            'ada-path-rounded': '&#xea42;',
            'ada-pengyu-rounded': '&#xea43;',
            'ada-pheed-rounded': '&#xea44;',
            'ada-pictify-rounded': '&#xea45;',
            'ada-pinspire-rounded': '&#xea46;',
            'ada-pinstagram-rounded': '&#xea47;',
            'ada-pinterest-rounded': '&#xea48;',
            'ada-podio-rounded': '&#xea49;',
            'ada-qq-rounded': '&#xea4a;',
            'ada-questionity-rounded': '&#xea4b;',
            'ada-qzone-rounded': '&#xea4c;',
            'ada-ravelry-rounded': '&#xea4d;',
            'ada-ravelry-r-rounded': '&#xea4e;',
            'ada-redalyc-rounded': '&#xea4f;',
            'ada-reddit-rounded': '&#xea50;',
            'ada-reddit-r-rounded': '&#xea51;',
            'ada-rendezvous-rounded': '&#xea52;',
            'ada-renren-rounded': '&#xea53;',
            'ada-researchgate-rounded': '&#xea54;',
            'ada-reverbnation-rounded': '&#xea55;',
            'ada-ryze-rounded': '&#xea56;',
            'ada-ryze-social-logo1': '&#xea57;',
            'ada-scoop-rounded': '&#xea58;',
            'ada-scoop-it-rounded': '&#xea59;',
            'ada-scribd-rounded': '&#xea5a;',
            'ada-sina-rounded': '&#xea5b;',
            'ada-sina-s-rounded': '&#xea5c;',
            'ada-skyrock-rounded': '&#xea5d;',
            'ada-slideshare-rounded': '&#xea5e;',
            'ada-socialcam-rounded': '&#xea5f;',
            'ada-sonico-rounded': '&#xea60;',
            'ada-sonico-smile-rounded': '&#xea61;',
            'ada-soundcloud-rounded': '&#xea62;',
            'ada-spotbros-rounded': '&#xea63;',
            'ada-spotify-rounded': '&#xea64;',
            'ada-studivz-rounded': '&#xea65;',
            'ada-stumbleupon-rounded': '&#xea66;',
            'ada-symbaloo-rounded': '&#xea67;',
            'ada-tadaa-rounded': '&#xea68;',
            'ada-tagged-rounded': '&#xea69;',
            'ada-tagworld-rounded': '&#xea6a;',
            'ada-taringa-rounded': '&#xea6b;',
            'ada-telly-rounded': '&#xea6c;',
            'ada-tencent-rounded': '&#xea6d;',
            'ada-threadless-rounded': '&#xea6e;',
            'ada-tianji-rounded': '&#xea6f;',
            'ada-travbuddy-rounded': '&#xea70;',
            'ada-tribe-rounded': '&#xea71;',
            'ada-tripadvisor-rounded': '&#xea72;',
            'ada-tudou-rounded': '&#xea73;',
            'ada-tuenti-rounded': '&#xea74;',
            'ada-tumblr-rounded': '&#xea75;',
            'ada-tu-tv-rounded': '&#xea76;',
            'ada-tv-tag-rounded': '&#xea77;',
            'ada-twitpic-rounded': '&#xea78;',
            'ada-twitter-t-rounded': '&#xea79;',
            'ada-twitter-rounded': '&#xea7a;',
            'ada-twoo-rounded': '&#xea7b;',
            'ada-typophile-rounded': '&#xea7c;',
            'ada-ushi-rounded': '&#xea7d;',
            'ada-vampirefreaks-rounded': '&#xea7e;',
            'ada-viadeo-rounded': '&#xea7f;',
            'ada-viddy-rounded': '&#xea80;',
            'ada-vimeo-rounded': '&#xea81;',
            'ada-vine-rounded': '&#xea82;',
            'ada-vine-v-rounded': '&#xea83;',
            'ada-vk-rounded': '&#xea84;',
            'ada-wayn-rounded': '&#xea85;',
            'ada-weeworld-rounded': '&#xea86;',
            'ada-weheartit-rounded': '&#xea87;',
            'ada-weibo-rounded': '&#xea88;',
            'ada-widbook-rounded': '&#xea89;',
            'ada-wikiloc-rounded': '&#xea8a;',
            'ada-wikipedia-w-rounded': '&#xea8b;',
            'ada-wikipedia-rounded': '&#xea8c;',
            'ada-wordpress-rounded': '&#xea8d;',
            'ada-xanga-x-rounded': '&#xea8e;',
            'ada-xanga-rounded': '&#xea8f;',
            'ada-xiami-rounded': '&#xea90;',
            'ada-xing-rounded': '&#xea91;',
            'ada-yelp-rounded': '&#xea92;',
            'ada-youku-rounded': '&#xea93;',
            'ada-yoursphere-rounded': '&#xea94;',
            'ada-youtube-name-rounded': '&#xea95;',
            'ada-youtube-rounded': '&#xea96;',
            'ada-yupoo-rounded': '&#xea97;',
            'ada-zorpia-rounded': '&#xea98;',
            'ada-51on': '&#xea99;',
            'ada-56': '&#xea9a;',
            'ada-px': '&#xea9b;',
            'ada-500px': '&#xea9c;',
            'ada-ads-of-the-world': '&#xea9d;',
            'ada-ads': '&#xea9e;',
            'ada-arte10': '&#xea9f;',
            'ada-ashley-madison': '&#xeaa0;',
            'ada-asmallworld': '&#xeaa1;',
            'ada-badoo': '&#xeaa2;',
            'ada-baidu': '&#xeaa3;',
            'ada-bananity': '&#xeaa4;',
            'ada-bandcamp': '&#xeaa5;',
            'ada-bebo': '&#xeaa6;',
            'ada-behance': '&#xeaa7;',
            'ada-bettercodes': '&#xeaa8;',
            'ada-bisquits': '&#xeaa9;',
            'ada-bitacoras': '&#xeaaa;',
            'ada-bitacoras-b': '&#xeaab;',
            'ada-blackplanet': '&#xeaac;',
            'ada-blogbus': '&#xeaad;',
            'ada-blogger': '&#xeaae;',
            'ada-bloson': '&#xeaaf;',
            'ada-bola-a': '&#xeab0;',
            'ada-buzznet': '&#xeab1;',
            'ada-cafemom': '&#xeab2;',
            'ada-care2': '&#xeab3;',
            'ada-caringbridge': '&#xeab4;',
            'ada-cellufun': '&#xeab5;',
            'ada-citeulike': '&#xeab6;',
            'ada-classmates': '&#xeab7;',
            'ada-club-dante': '&#xeab8;',
            'ada-coderwall': '&#xeab9;',
            'ada-colourlovers': '&#xeaba;',
            'ada-coroflot': '&#xeabb;',
            'ada-couchsurfing': '&#xeabc;',
            'ada-creattica': '&#xeabd;',
            'ada-cross-tv': '&#xeabe;',
            'ada-dailymotion': '&#xeabf;',
            'ada-deezer': '&#xeac0;',
            'ada-delicious': '&#xeac1;',
            'ada-desarrollo': '&#xeac2;',
            'ada-designrelated': '&#xeac3;',
            'ada-deviantart': '&#xeac4;',
            'ada-digg': '&#xeac5;',
            'ada-digg-name': '&#xeac6;',
            'ada-divoblogger': '&#xeac7;',
            'ada-doodle-ly': '&#xeac8;',
            'ada-douban': '&#xeac9;',
            'ada-dribbble': '&#xeaca;',
            'ada-ebay': '&#xeacb;',
            'ada-etsy': '&#xeacc;',
            'ada-everloop': '&#xeacd;',
            'ada-ex-fm': '&#xeace;',
            'ada-eyeem': '&#xeacf;',
            'ada-facebook': '&#xead0;',
            'ada-fanlala': '&#xead1;',
            'ada-flickr': '&#xead2;',
            'ada-flipkart': '&#xead3;',
            'ada-flixster': '&#xead4;',
            'ada-fod-social': '&#xead5;',
            'ada-fontli': '&#xead6;',
            'ada-fotki': '&#xead7;',
            'ada-fotolog': '&#xead8;',
            'ada-foursquare': '&#xead9;',
            'ada-friendster': '&#xeada;',
            'ada-funny-or-die': '&#xeadb;',
            'ada-gaiaonline': '&#xeadc;',
            'ada-gather': '&#xeadd;',
            'ada-geni-social': '&#xeade;',
            'ada-geonick': '&#xeadf;',
            'ada-glipho': '&#xeae0;',
            'ada-glogster': '&#xeae1;',
            'ada-g-plus': '&#xeae2;',
            'ada-grooveshark': '&#xeae3;',
            'ada-grou-ps': '&#xeae4;',
            'ada-habbo': '&#xeae5;',
            'ada-habbo-h': '&#xeae6;',
            'ada-heello': '&#xeae7;',
            'ada-hexun': '&#xeae8;',
            'ada-hi5': '&#xeae9;',
            'ada-hipstamatic': '&#xeaea;',
            'ada-hubbub': '&#xeaeb;',
            'ada-inside-the-hotel': '&#xeaec;',
            'ada-instagram': '&#xeaed;',
            'ada-intellectconnect': '&#xeaee;',
            'ada-iqyi': '&#xeaef;',
            'ada-itsmy': '&#xeaf0;',
            'ada-itsmy-name': '&#xeaf1;',
            'ada-jiepang': '&#xeaf2;',
            'ada-jux': '&#xeaf3;',
            'ada-kaixin101': '&#xeaf4;',
            'ada-kiwibox': '&#xeaf5;',
            'ada-ku6': '&#xeaf6;',
            'ada-last-fm': '&#xeaf7;',
            'ada-linkedin': '&#xeaf8;',
            'ada-literatura-nova': '&#xeaf9;',
            'ada-meetic': '&#xeafa;',
            'ada-meetme': '&#xeafb;',
            'ada-meetup': '&#xeafc;',
            'ada-meetyourfriends': '&#xeafd;',
            'ada-meneame': '&#xeafe;',
            'ada-metacafe': '&#xeaff;',
            'ada-mixi': '&#xeb00;',
            'ada-mocospace': '&#xeb01;',
            'ada-myfolio': '&#xeb02;',
            'ada-my-heritage': '&#xeb03;',
            'ada-my-life': '&#xeb04;',
            'ada-my-life-m': '&#xeb05;',
            'ada-my-space': '&#xeb06;',
            'ada-myspace-name': '&#xeb07;',
            'ada-ning': '&#xeb08;',
            'ada-nk': '&#xeb09;',
            'ada-notasweb': '&#xeb0a;',
            'ada-odnoklassniki': '&#xeb0b;',
            'ada-orkut': '&#xeb0c;',
            'ada-p1': '&#xeb0d;',
            'ada-panamo': '&#xeb0e;',
            'ada-path': '&#xeb0f;',
            'ada-pengyu': '&#xeb10;',
            'ada-pheed': '&#xeb11;',
            'ada-pictify': '&#xeb12;',
            'ada-pinspire': '&#xeb13;',
            'ada-pinstagram': '&#xeb14;',
            'ada-pinterest': '&#xeb15;',
            'ada-podio': '&#xeb16;',
            'ada-qq': '&#xeb17;',
            'ada-questionity': '&#xeb18;',
            'ada-qzone': '&#xeb19;',
            'ada-ravelry': '&#xeb1a;',
            'ada-ravelry-r': '&#xeb1b;',
            'ada-redalyc': '&#xeb1c;',
            'ada-reddit-r': '&#xeb1d;',
            'ada-reddit': '&#xeb1e;',
            'ada-rendezvous': '&#xeb1f;',
            'ada-renrenrenren': '&#xeb20;',
            'ada-researchgate': '&#xeb21;',
            'ada-reverbnation': '&#xeb22;',
            'ada-ryze': '&#xeb23;',
            'ada-ryze-r': '&#xeb24;',
            'ada-scoop-it-s': '&#xeb25;',
            'ada-scoop-it': '&#xeb26;',
            'ada-scribd': '&#xeb27;',
            'ada-sina-name': '&#xeb28;',
            'ada-sina': '&#xeb29;',
            'ada-skyrock': '&#xeb2a;',
            'ada-slideshare': '&#xeb2b;',
            'ada-socialcam': '&#xeb2c;',
            'ada-sonico': '&#xeb2d;',
            'ada-sonico-smail': '&#xeb2e;',
            'ada-soundcloud': '&#xeb2f;',
            'ada-spotbros': '&#xeb30;',
            'ada-spotify': '&#xeb31;',
            'ada-studivz': '&#xeb32;',
            'ada-stumbleupon': '&#xeb33;',
            'ada-symbaloo': '&#xeb34;',
            'ada-tadaa': '&#xeb35;',
            'ada-tagged': '&#xeb36;',
            'ada-tagworld': '&#xeb37;',
            'ada-taringa': '&#xeb38;',
            'ada-telly': '&#xeb39;',
            'ada-tencent': '&#xeb3a;',
            'ada-threadless': '&#xeb3b;',
            'ada-tianji': '&#xeb3c;',
            'ada-travbuddy': '&#xeb3d;',
            'ada-tribe': '&#xeb3e;',
            'ada-tripadvisor': '&#xeb3f;',
            'ada-tudou': '&#xeb40;',
            'ada-tuenti': '&#xeb41;',
            'ada-tumblr': '&#xeb42;',
            'ada-tu-tv': '&#xeb43;',
            'ada-tv-tag': '&#xeb44;',
            'ada-twitpic': '&#xeb45;',
            'ada-twitter-t': '&#xeb46;',
            'ada-twitter': '&#xeb47;',
            'ada-twoo': '&#xeb48;',
            'ada-typophile': '&#xeb49;',
            'ada-ushi': '&#xeb4a;',
            'ada-vampirefreaks': '&#xeb4b;',
            'ada-viadeo': '&#xeb4c;',
            'ada-viddy': '&#xeb4d;',
            'ada-vimeo': '&#xeb4e;',
            'ada-vine': '&#xeb4f;',
            'vine-v': '&#xeb50;',
            'vk': '&#xeb51;',
            'ada-wayn': '&#xeb52;',
            'ada-weeworld': '&#xeb53;',
            'ada-weheartit': '&#xeb54;',
            'ada-weibo': '&#xeb55;',
            'ada-widbook': '&#xeb56;',
            'ada-wikiloc': '&#xeb57;',
            'ada-wikipedia-w': '&#xeb58;',
            'ada-wikipediawikipedia': '&#xeb59;',
            'ada-wordpress': '&#xeb5a;',
            'ada-xanga-name': '&#xeb5b;',
            'ada-xanga': '&#xeb5c;',
            'ada-xiami': '&#xeb5d;',
            'ada-xing': '&#xeb5e;',
            'ada-yelp': '&#xeb5f;',
            'ada-youku': '&#xeb60;',
            'ada-yoursphere': '&#xeb61;',
            'ada-youtube-name': '&#xeb62;',
            'ada-youtube': '&#xeb63;',
            'ada-yupoo': '&#xeb64;',
            'ada-zorpia': '&#xeb65;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icomoon-liga/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
