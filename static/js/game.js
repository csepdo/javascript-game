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
        let owl_picture = document.getElementsByClassName('owl')
        owl_picture.setAttribute('src', 'static/img/sad_owl.png')
    }
    else if (status === 'incorrect') {

    }
}

function checkWord(xhttp, word) {
    let word_list = xhttp.responseText;
    if (word_list.search(word.textContent) >= 0) {
        console.log('correct');
        showCheckWord('correct');
    } else {
        console.log('incorrect');
        word.classes.add('.missed')
        showCheckWord('incorrect');
    }

}

function loadDoc(filename, word) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            checkWord(this, word)
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
        if (el.parentElement === $('drop-target-left')) {
            loadDoc('/static/data/LY.txt', word)
        }
        else if (el.parentElement === $('drop-target-right')) {
            loadDoc('/static/data/J.txt', word)
        }
    });
}


collapsibleButtons();
dragAndDrop();
