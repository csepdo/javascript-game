let score = 0;

function collapsibleButtons() {
    let coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}


function showCheckWord(status, side) {
    if (status === 'correct') {
        if (side === 'left') {
            changePicture('.owl', 'static/img/happy_owl.png');
            setTimeout(function () {
                changePicture('.owl', 'static/img/wise_owl.png');
            }, 1500)
        }
        else if (side === 'right') {
            changePicture('.parrot', 'static/img/happy_parrot.png');
            setTimeout(function () {
                changePicture('.parrot', 'static/img/greeting_parrot.png');
            }, 1500)
        }
        score++;
    }
    else if (status === 'incorrect') {
        if (side === 'left') {
            changePicture('.owl', 'static/img/sad_owl.png');
            setTimeout(function () {
                changePicture('.owl', 'static/img/wise_owl.png');
            }, 1500);

        }
        else if (side === 'right') {
            changePicture('.parrot', 'static/img/sad_parrot.png');
            setTimeout(function () {
                changePicture('.parrot', 'static/img/greeting_parrot.png');
            }, 1500)
        }
    }
}


function changePicture(element, url) {
    $ (element).attr('src', url);
}


function checkWord(xhttp, word, side) {
    let word_list = xhttp.responseText;
    if (word_list.search(word.textContent) >= 0) {
        if (side === 'left') {
            console.log('correct');
            showCheckWord('correct', 'left');
        }
        else if (side === 'right') {
            showCheckWord('correct', 'right');
        }
    } else {
        console.log('incorrect');
        word.classList.add('missed');
        if (side === 'left') {
            showCheckWord('incorrect', 'left');
        }
        else if (side === 'right') {
            showCheckWord('incorrect', 'right');
        }
    }

}


function loadDoc(filename, word, side) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            checkWord(this, word, side)
        }
    };
    xhttp.open("GET", filename, true);
    xhttp.send();
}


function dragAndDrop() {
    function $(id) {
        return document.getElementById(id);
    }
    dragula([$('drag-elements'), $('drop-target-left'), $('drop-target-right')], {
        revertOnSpill: true
    }).on('drop', function (el) {
        let word = el;
        let side;
        if (el.parentElement === $('drop-target-left')) {
            side = 'left';
            loadDoc('/static/data/LY.txt', word, side)
        }
        else if (el.parentElement === $('drop-target-right')) {
            side = 'right';
            loadDoc('/static/data/J.txt', word, side)
        }
    });
}


function showScore () {

}

collapsibleButtons();
dragAndDrop();