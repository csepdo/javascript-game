let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


function $(id) {
  return document.getElementById(id);
}

dragula([$('drag-elements'), $('drop-target-left'), $('drop-target-right')], {
  revertOnSpill: true
}).on('drop', function(el) {
  if ($('drop-target-left').children.length > 0 || $('drop-target-right').children.length > 0) {
    $('display-left').innerHTML = $('drop-target-left').innerHTML;
    $('display-right').innerHTML = $('drop-target-right').innerHTML;
  } else {
    $('display').innerHTML = "Display";
  }

});
