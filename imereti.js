//const { hide } = require("@popperjs/core");

const imeretiPage = document.getElementById("imereti-page")
var meniu = document.getElementById("imereti-meniu")

//page-reload//


function reloadPage() {
    var reloadPg = document.getElementsByClassName("reload")
    for (var i = 0; i < reloadPg.length; i++) {
        reloadPg[i].addEventListener("click", () => {
            location.reload();
            console.log("gio")
        })
    }
}

reloadPage()
    /*
    function hideShow() {
        var elems = document.getElementsByClassName("collapse")
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display == ""

            elems[i].onClick = function() {
                console.log("fa")
                elems[i].classList.add("showing")
            }
        }
    } */

//იმერეთის სამეფო//
var imerSamefoMainInfo = document.getElementById("imer-samefo-main-info")
var imerSamefMainShow = document.getElementById("imer-samefo-main-click")

//imerSamefMainShow.addEventListener("click", imerSamefoMain)

function imerSamefoMain() {
    imerSamefoMainInfo.style.display = "block"
}

//ანიმაცია//
//imeretiPage.style.animation = "imeretiAnime 2s forwards"
//უკან გამოსვლა//

// this overrides `contains` to make it case insenstive
//გვერდების ღილაკები//
var imerSofPageAllBtns = document.getElementById("imerSofPageBtns")
var imerSofPage1Btn = document.getElementById("sofPage1")
var imerSofpage2Btn = document.getElementById("sofPage2")
var imerSofpage3Btn = document.getElementById("sofPage3")
    //გვერდები//
var sofCardPage1 = document.getElementById("sofCardPage1")
var sofCardPage2 = document.getElementById("sofCardPage2")
var sofCardPage3 = document.getElementById("sofCardPage3")


//sofCardPage2.classList.add("hide")

//საძიებო სისტემა მგონი იდეალურია //
jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};
var sera = document.getElementById("search")
sera.addEventListener("click", searching)

function searching() {
    $('#search').keyup(function() {
        $('.card').removeClass('d-none');
        //ეს დავამატე სხვანაირად მეორე გვერძე არ ეძებს//
        $('.card-deck').removeClass('d-none');
        //ეს იმიტომ რო როცა მეორე გვერძე გადადიხარ hides უკეთებს imersofPage-ფუნქციის გამო და თითეულს hide უნდა მოეხსნას//
        //1//
        sofCardPage1.classList.add("showing")
        sofCardPage1.classList.remove("hide")
            //2//
        sofCardPage2.classList.add("showing")
        sofCardPage2.classList.remove("hide")
            //3//
        sofCardPage3.classList.remove("hide")
        sofCardPage3.classList.add("showing")

        imerSofPageAllBtns.style.display = "none"
        var filter = $(this).val(); // get the value of the input, which we filter on
        $('.card-deck').find('.card .card-body h4:not(:contains("' + filter + '"))').parent().parent().addClass('d-none');
    })


    /*
    $('#btnSort').click(function() {
        $('.card-deck .card').sort(function(a, b) {
            return $(a).find(".card-title").text() > $(b).find(".card-title").text() ? 1 : -1;
        }).appendTo(".card-deck");
    }) */
}

//როცა სუფთაა//

const isEmpty = str => !str.trim().length;

document.getElementById("search").addEventListener("input", function() {
    if (isEmpty(this.value)) {
        sera.value = ""

        sofCardPage1.classList.remove("showing")
        sofCardPage1.classList.add("hide")
            //2//
        sofCardPage2.classList.remove("showing")
        sofCardPage2.classList.add("hide")
            //3//
        sofCardPage3.classList.add("hide")
        sofCardPage3.classList.remove("showing")
        imerSofPageAllBtns.style.display = "none"

        //ამას თუ ვუშვებთ მეორე ძებნაზე აღარ ეძებს sofCardPage2.classList.add("hide")
    } else {
        console.log(`NAME value is: ${this.value}`);
    }
});

/*
sera.addEventListener('keydown', function(event) {
    if (event.keyCode == 8) {
        console.log('BACKSPACE was pressed');
        sera.value = ""
        $('.card-deck').addClass('d-none');
        $('.card').addClass('d-none');
        sofCardPage1.classList.remove("showing")
        sofCardPage1.classList.add("hide")
            //2//
        sofCardPage2.classList.remove("showing")
        sofCardPage2.classList.add("hide")
            //3//
        sofCardPage3.classList.add("hide")
        sofCardPage3.classList.remove("showing")
        imerSofPageAllBtns.style.display = "none"

    }
    if (event.keyCode == 46) {
        console.log('DELETE was pressed');

        // Call event.preventDefault() to stop the character after the cursor
        // from being deleted. Remove this line if you don't want to do that.
        event.preventDefault();
    }
});

*/


imerSofPage1Btn.addEventListener("click", imerSofPage1)
imerSofpage2Btn.addEventListener("click", imerSofPage2)
imerSofpage3Btn.addEventListener("click", imerSofPage3)

function imerSofPage1() {
    sofCardPage1.classList.add("showing")
    sofCardPage1.classList.remove("hide")

    sofCardPage2.classList.add("hide")
    sofCardPage2.classList.remove("showing")

    sofCardPage3.classList.remove("showing")
    sofCardPage3.classList.add("hide")

}

function imerSofPage2() {
    sofCardPage1.classList.add("hide")
    sofCardPage1.classList.remove("showing")

    sofCardPage2.classList.add("showing")
    sofCardPage2.classList.remove("hide")

    sofCardPage3.classList.remove("showing")
    sofCardPage3.classList.add("hide")

}

function imerSofPage3() {
    sofCardPage1.classList.remove("showing")
    sofCardPage2.classList.remove("showing")

    sofCardPage1.classList.add("hide")
    sofCardPage2.classList.add("hide")


    sofCardPage3.classList.add("showing")

}


var backBtn = document.getElementById("backbtn")
    //ეს ყველგან უკან დაბრუნებისას//

function ukan() {
    backBtn.style.display = "none"
}

function meniuAll() {
    //meniu.style.display = "none"
    backBtn.style.display = "block"
}

//ქალაქები//
var qalaqebi = document.getElementById("qalaqi")
var showqalaqi = document.getElementById("showqalaqebi")
qalaqebi.addEventListener("click", qalaqebiMeniu)





function qalaqebiMeniu() {
    meniuAll()
    showqalaqi.style.display = "block"

    showMdinareebi.style.display = "none"
    municipaliteti.style.display = "none"
    showKurorti.style.display = "none"
    showSights.style.display = "none"
    backBtn.addEventListener("click", () => {
        ukan()
        showqalaqi.style.display = "none"
    })
}

//მდინარეები//
var mdinareebi = document.getElementById("mdinareebi")
var showMdinareebi = document.getElementById("showmdinareebi")
mdinareebi.addEventListener("click", mdinareebiMeniu)

function mdinareebiMeniu() {
    meniuAll()
    showMdinareebi.style.display = "block"

    showqalaqi.style.display = "none"
    municipaliteti.style.display = "none"
    showKurorti.style.display = "none"
    showSights.style.display = "none"
    backBtn.addEventListener("click", () => {
        ukan()
        showMdinareebi.style.display = "none"
    })
}

//სოფლები//
var soflebi = document.getElementById("soflebi")
var municipaliteti = document.getElementById("municipaliteti")

soflebi.addEventListener("click", soflebiMeniu)

function soflebiMeniu() {
    meniuAll()
    municipaliteti.style.display = "block"

    showMdinareebi.style.display = "none"
    showqalaqi.style.display = "none"
    showKurorti.style.display = "none"
    showSights.style.display = "none"
    backBtn.addEventListener("click", () => {
        ukan()
        municipaliteti.style.display = "none"
    })
}


//კურორტები//
var kurortebi = document.getElementById("kurorti")
var showKurorti = document.getElementById("showkurorti")

kurortebi.addEventListener("click", kurortiMeniu)

function kurortiMeniu() {
    meniuAll()
    showKurorti.style.display = "block"
        //
    showMdinareebi.style.display = "none"
    showqalaqi.style.display = "none"
    municipaliteti.style.display = "none"
    showSights.style.display = "none"
    backBtn.addEventListener("click", () => {
        ukan()
        showKurorti.style.display = "none"
    })
}

//ღირსშესანიშნაობები//
var sightsBtn = document.getElementById("sights")
var showSights = document.getElementById("showSights")

sightsBtn.addEventListener("click", sightsMeniu)

function sightsMeniu() {
    meniuAll()
    showSights.style.display = "block"
        //
    municipaliteti.style.display = "none"
    showqalaqi.style.display = "none"
    showMdinareebi.style.display = "none"
    showKurorti.style.display = "none"
    backBtn.addEventListener("click", () => {
        ukan()
        showSights.style.display = "none"
    })

}

/*
window.addEventListener("click", () => {
    $(".collapse").collapse("toggle")
    console.log("gio")
})
*/


var imerSofZs = [{
        //პირველი გვერდი//
        sofName: "ამსაისი",
        monacemebi: [
            "მდებარეობს მდინარე ძირულის მარჯვენა მხარეს ზესტაფონიდან 13 კმ",
            "430მ",
            "64კაცი (2014)."
        ]
    },

    {
        sofName: "არგვეთა",
        monacemebi: [
            "მდებარეობს მდინარე ძირულის მარჯვენა მხარეს ზესტაფონიდან 7 კმ",
            "120მ",
            "1329კაცი (2014)"
        ]
    },
    {
        sofName: "აჭარა",
        monacemebi: [
            "მდებარეობს მდინარე ძირულის მარჯვენა მხარეს,ზესტაფონიდან 14 კილომეტრი.",
            "400მ",
            "80 კაცი(2014)"
        ]
    },
    {
        sofName: "ახალი სვირი",
        monacemebi: [
            "მდებარეობს კოლხეთის დაბლობზე მდინარე ყვირილის მარცხენა მხარეს ზესტაფონიდან 14 კმ",
            "122მ",
            "367 კაცი(2014)"
        ]
    },
    {
        sofName: "აჯამეთი",
        monacemebi: [
            "მდეობარეობს კოლხეთის დაბლობზე.მდინარე ყვირილის მარცხენა მხარეს ზესტაფონიდან 26კმ",
            "103მ",
            "296 კაცი(2014)"
        ]
    },
    {
        sofName: "ბეღლევი",
        monacemebi: [
            "მდებარეობს იმერეთის მაღლობის დასავლეთ ნაწილში.მდინარე ყვირილის მარჯვენა ნაპირას,ზესტაფონიდან 15კმ",
            "400მ",
            "235 კაცი(2014)"
        ]
    },
    {
        sofName: "გამოღმა ბოსლევი",
        monacemebi: [
            "მდებარეობს მდინარე ყვირილის მარჯვენა ნაპირას ზესტაფონი-ჭიათურის შიდასახელმწიფოებრივი მნიშვნელობის საავტომობილო გზაზე,ზესტაფონიდან 13 კილომეტრი",
            "540მ",
            "397 კაცი(2014)"
        ]
    },
    {
        sofName: "გაღმა ბოსლევი",
        monacemebi: [
            "მდებარეობს ჭიათურის პლატოზე,მდინარე ყვირილის მარცხენა ნაპირას ,ზესტაფონიდან 18 კილომეტრი",
            "500მ",
            "271 კაცი (2014)"
        ]
    },
    {
        sofName: "დიდ წიფელა",
        monacemebi: [
            "მდებარეობს ზემო იმერეთის პლატოზე,მდინარე ყვირილის ხეობაში ზესტაფონიდან 21 კმ",
            "560მ",
            "63 კაცი (2014)"
        ]
    },
]


var imerSofZs2 = [{
        //პირველი გვერდი//
        sofName: "დილიკაური",
        monacemebi: [
            "დილიკაური მდებარეობს ზემო იმერეთის მაღლობზე,ზესტაფონიდან 10კმ",
            "440მ",
            "1813 კაცი (2014)."
        ]
    },

    {
        sofName: "ვაშპარიანი",
        monacemebi: [
            "მდებარეობს მდინარე ჩხერიმელის ხეობაში.ზესტაფონიდან 16კმ",
            "400მ",
            "65 კაცი (2014)"
        ]
    },
    {
        sofName: "დიდი განთიადი",
        monacemebi: [
            "მდებარეობს მდინარე ძირულის მარცხენა მხარეს,ზესტაფონიდან 18კმ",
            "400მ",
            "244 კაცი(2014)"
        ]
    },
    {
        sofName: "ზედა ილემი",
        monacemebi: [
            "მდებარეობს მდინარე ძირულის ხეობაში, ზესტაფონიდან 13კმ",
            "320მ",
            "307 კაცი(2014)"
        ]
    },
    {
        sofName: "ზედა კვალითი",
        monacemebi: [
            "მდებარეობის მდინარე აჯამურის ნაპირზე.ზესტაფონიდან 7კმ",
            "400მ",
            "244 კაცი(2014)"
        ]
    },
    {
        sofName: "ზედა კლდეეთი",
        monacemebi: [
            "მდებარეობის მდინარე აჯამურის ნაპირზე.ზესტაფონიდან 7კმ",
            "350მ",
            "499 კაცი(2014)"
        ]
    },
    {
        sofName: "ზედა საქარა",
        monacemebi: [
            "მდებარეობს მდინარე ყვირილის ხეობაში ზესტაფონიდან 4 კმ",
            "300მ",
            "2099 კაცი(2014)"
        ]
    },
    {
        sofName: "ზედა წევა",
        monacemebi: [
            "მდებარეობს მდინარე ძირულის ხეობაში, ზესტაფონიდან 16კმ",
            "580მ",
            "44 კაცი (2014)"
        ]
    },
    {
        sofName: "ზედა წიფლვაკე",
        monacemebi: [
            "მდებარეობს მდინარე ძირულის მარჯვენა მხარეს ზესტაფონიდან 12 კმ",
            "480მ",
            "155 კაცი (2014)"
        ]
    },
]


//იმერეთის სოფლების მუნიციპალიტეტების cards//
//ზესტაფონის მუნიციპალიტეტი//
//card1//
var sofNameC1 = document.getElementById("sofNameCard1")
var sofTextC1 = document.getElementById("sofTextCard1")
var sofHeightC1 = document.getElementById("sofHeightCard1")
var sofMosaxleobaC1 = document.getElementById("sofMosaxCard1")

//card2//
var sofNameC2 = document.getElementById("sofNameCard2")
var sofTextC2 = document.getElementById("sofTextCard2")
var sofHeightC2 = document.getElementById("sofHeightCard2")
var sofMosaxleobaC2 = document.getElementById("sofMosaxCard2")

//card3//
var sofNameC3 = document.getElementById("sofNameCard3")
var sofTextC3 = document.getElementById("sofTextCard3")
var sofHeightC3 = document.getElementById("sofHeightCard3")
var sofMosaxleobaC3 = document.getElementById("sofMosaxCard3")

//card4//
var sofNameC4 = document.getElementById("sofNameCard4")
var sofTextC4 = document.getElementById("sofTextCard4")
var sofHeightC4 = document.getElementById("sofHeightCard4")
var sofMosaxleobaC4 = document.getElementById("sofMosaxCard4")

//card5//
var sofNameC5 = document.getElementById("sofNameCard5")
var sofTextC5 = document.getElementById("sofTextCard5")
var sofHeightC5 = document.getElementById("sofHeightCard5")
var sofMosaxleobaC5 = document.getElementById("sofMosaxCard5")

//card6//
var sofNameC6 = document.getElementById("sofNameCard6")
var sofTextC6 = document.getElementById("sofTextCard6")
var sofHeightC6 = document.getElementById("sofHeightCard6")
var sofMosaxleobaC6 = document.getElementById("sofMosaxCard6")

//card7//
var sofNameC7 = document.getElementById("sofNameCard7")
var sofTextC7 = document.getElementById("sofTextCard7")
var sofHeightC7 = document.getElementById("sofHeightCard7")
var sofMosaxleobaC7 = document.getElementById("sofMosaxCard7")
    //card8//
var sofNameC8 = document.getElementById("sofNameCard8")
var sofTextC8 = document.getElementById("sofTextCard8")
var sofHeightC8 = document.getElementById("sofHeightCard8")
var sofMosaxleobaC8 = document.getElementById("sofMosaxCard8")
    //card9//
var sofNameC9 = document.getElementById("sofNameCard9")
var sofTextC9 = document.getElementById("sofTextCard9")
var sofHeightC9 = document.getElementById("sofHeightCard9")
var sofMosaxleobaC9 = document.getElementById("sofMosaxCard9")

var anima = document.getElementById("anime")

//სოფლების გვერდი 1//
function imerSofPage1Fun() {
    //იმერეთის სოფლების card-ს//
    //card1//
    sofNameC1.innerText = imerSofZs[0].sofName
    sofTextC1.innerText = imerSofZs[0].monacemebi[0]
    sofHeightC1.innerText = imerSofZs[0].monacemebi[1]
    sofMosaxleobaC1.innerText = imerSofZs[0].monacemebi[2]
        //anima.classList.add("animef")
        //card2//
    sofNameC2.innerText = imerSofZs[1].sofName
    sofTextC2.innerText = imerSofZs[1].monacemebi[0]
    sofHeightC2.innerText = imerSofZs[1].monacemebi[1]
    sofMosaxleobaC2.innerText = imerSofZs[1].monacemebi[2]
        //card3//
    sofNameC3.innerText = imerSofZs[2].sofName
    sofTextC3.innerText = imerSofZs[2].monacemebi[0]
    sofHeightC3.innerText = imerSofZs[2].monacemebi[1]
    sofMosaxleobaC3.innerText = imerSofZs[2].monacemebi[2]

    //card4//
    sofNameC4.innerText = imerSofZs[3].sofName
    sofTextC4.innerText = imerSofZs[3].monacemebi[0]
    sofHeightC4.innerText = imerSofZs[3].monacemebi[1]
    sofMosaxleobaC4.innerText = imerSofZs[3].monacemebi[2]
        //card5//
    sofNameC5.innerText = imerSofZs[4].sofName
    sofTextC5.innerText = imerSofZs[4].monacemebi[0]
    sofHeightC5.innerText = imerSofZs[4].monacemebi[1]
    sofMosaxleobaC5.innerText = imerSofZs[4].monacemebi[2]
        //card6//
    sofNameC6.innerText = imerSofZs[5].sofName
    sofTextC6.innerText = imerSofZs[5].monacemebi[0]
    sofHeightC6.innerText = imerSofZs[5].monacemebi[1]
    sofMosaxleobaC6.innerText = imerSofZs[5].monacemebi[2]
        //card7//
    sofNameC7.innerText = imerSofZs[6].sofName
    sofTextC7.innerText = imerSofZs[6].monacemebi[0]
    sofHeightC7.innerText = imerSofZs[6].monacemebi[1]
    sofMosaxleobaC7.innerText = imerSofZs[6].monacemebi[2]
        //card8//
    sofNameC8.innerText = imerSofZs[7].sofName
    sofTextC8.innerText = imerSofZs[7].monacemebi[0]
    sofHeightC8.innerText = imerSofZs[7].monacemebi[1]
    sofMosaxleobaC8.innerText = imerSofZs[7].monacemebi[2]
        //card9//
    sofNameC9.innerText = imerSofZs[8].sofName
    sofTextC9.innerText = imerSofZs[8].monacemebi[0]
    sofHeightC9.innerText = imerSofZs[8].monacemebi[1]
    sofMosaxleobaC9.innerText = imerSofZs[8].monacemebi[2]

}

//სოფლების გვერდი 2//
function imerSofPage2Fun() {
    //card1//
    sofNameC1.innerText = imerSofZs2[0].sofName
    sofTextC1.innerText = imerSofZs2[0].monacemebi[0]
    sofHeightC1.innerText = imerSofZs2[0].monacemebi[1]
    sofMosaxleobaC1.innerText = imerSofZs2[0].monacemebi[2]
        // anima.classList.add("animef")

    //card2//
    sofNameC2.innerText = imerSofZs2[1].sofName
    sofTextC2.innerText = imerSofZs2[1].monacemebi[0]
    sofHeightC2.innerText = imerSofZs2[1].monacemebi[1]
    sofMosaxleobaC2.innerText = imerSofZs2[1].monacemebi[2]
        //card3//
    sofNameC3.innerText = imerSofZs2[2].sofName
    sofTextC3.innerText = imerSofZs2[2].monacemebi[0]
    sofHeightC3.innerText = imerSofZs2[2].monacemebi[1]
    sofMosaxleobaC3.innerText = imerSofZs2[2].monacemebi[2]

    //card4//
    sofNameC4.innerText = imerSofZs2[3].sofName
    sofTextC4.innerText = imerSofZs2[3].monacemebi[0]
    sofHeightC4.innerText = imerSofZs2[3].monacemebi[1]
    sofMosaxleobaC4.innerText = imerSofZs2[3].monacemebi[2]
        //card5//
    sofNameC5.innerText = imerSofZs2[4].sofName
    sofTextC5.innerText = imerSofZs2[4].monacemebi[0]
    sofHeightC5.innerText = imerSofZs2[4].monacemebi[1]
    sofMosaxleobaC5.innerText = imerSofZs2[4].monacemebi[2]
        //card6//
    sofNameC6.innerText = imerSofZs2[5].sofName
    sofTextC6.innerText = imerSofZs2[5].monacemebi[0]
    sofHeightC6.innerText = imerSofZs2[5].monacemebi[1]
    sofMosaxleobaC6.innerText = imerSofZs2[5].monacemebi[2]
        //card7//
    sofNameC7.innerText = imerSofZs2[6].sofName
    sofTextC7.innerText = imerSofZs2[6].monacemebi[0]
    sofHeightC7.innerText = imerSofZs2[6].monacemebi[1]
    sofMosaxleobaC7.innerText = imerSofZs2[6].monacemebi[2]
        //card8//
    sofNameC8.innerText = imerSofZs2[7].sofName
    sofTextC8.innerText = imerSofZs2[7].monacemebi[0]
    sofHeightC8.innerText = imerSofZs2[7].monacemebi[1]
    sofMosaxleobaC8.innerText = imerSofZs2[7].monacemebi[2]
        //card9//
    sofNameC9.innerText = imerSofZs2[8].sofName
    sofTextC9.innerText = imerSofZs2[8].monacemebi[0]
    sofHeightC9.innerText = imerSofZs2[8].monacemebi[1]
    sofMosaxleobaC9.innerText = imerSofZs2[8].monacemebi[2]
}