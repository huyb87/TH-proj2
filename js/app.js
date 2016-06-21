// create global variables
var studentLis = document.querySelectorAll("li.student-item");
var studentsArr = [];
var paginationDiv = document.querySelector(".pagination");
var studentsPerPage = 10;
var numOfPages = Math.ceil(studentLis.length / studentsPerPage);
var buttons;

function showResults(a,b) {
  for (var i = a; i < b; i++) {
    studentsArr[i].style.display = "block";
  }
}

function hideResults() {
  for (var i = 0; i < studentsArr.length; i++) {
    studentsArr[i].style.display = "none";
  }
}

// iife to init the first 10 results and hide the rest on page load
(function init() {
  // convert studentLis nodelist to array for access to indexOf & forEach
  for (var i = 0; i < studentLis.length; i++) {
    studentsArr.push(studentLis[i]);
  }

  studentsArr.forEach(function(li) {
    // if (studentsArr.indexOf(li) < studentsPerPage) {
    //   li.style.display = "block";
    // } else {
      li.style.display = "none";
    //}
  });
  // function to create buttons depending on number of students allowed per page
  function makeButtons(div) {
      var html = "<ul>";
      for (var i = 1; i < numOfPages + 1; i++) {
          html += "<li><a href='#'";
          if( i === 1 ) {
            html += " class='active'>" + i + "</a></li>";
          } else {
            html+= ">" + i + "</a></li>";
          }
      }
      html += "</ul>";
      div.innerHTML = html;
  }
  makeButtons(paginationDiv);
  buttons = document.querySelectorAll("a");
  showResults(0,10);
}());

// add listeners to pagination buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    if (Number(this.textContent) === 1) {
        hideResults();
        showResults(0,10);
    } else if (Number(this.textContent) === 2) {
        hideResults();
        showResults(10,20);
    } else if (Number(this.textContent) === 3) {
        hideResults();
        showResults(20,30);
    } else if (Number(this.textContent) === 4) {
        hideResults();
        showResults(30,40);
    } else if (Number(this.textContent) === 5) {
        hideResults();
        showResults(40,50);
    } else if (Number(this.textContent) === 6) {
        hideResults();
        showResults(50,55);
    }
    for (var i = 0; i < buttons.length; i ++) {
      buttons[i].classList.remove("active");
    }
    this.classList.add("active");
  });
}
