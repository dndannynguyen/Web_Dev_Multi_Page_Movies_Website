$(document).ready(function () {
    var movies;
    var page_number = 1;
    if (page_number === 1) {
        document.getElementById("previous").disabled = true;
        document.getElementById("previous").style.color = "gray";
        document.getElementById("previous").style.backgroundColor = "black";
        document.getElementById("previous").style.borderColor = "gray";
        document.getElementById("1").style.color = "black";
        document.getElementById("1").style.backgroundColor = "red";
    }
    else if (page_number === 10) {
        document.getElementById("next").disabled = true;
    }
    var page_size = 2;
    $.ajax({
        
        url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
        type: "GET",
        success: function (res) {
            var first = (page_number - 1) * 2
            var second = first + 2
            movies = res.data.movies.slice(first, second).forEach(function (movie) {
                    // console.log(movie.title);
                    $("main").append(
                        `<div class="movie">
                        <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}">
                        </div>`
                        );
                    });

            list_movies(page_number);

        }
    })
    $("button").click(function () {
        // make sure it's an integer
        if ($(this).attr("id") == "next") {
            //should be controlled by another if statement to control less than 1 or more than 10
            if (page_number === 10) {
                document.getElementById("next").disabled = true;
                $("#next").prop("disabled", true);
                $("#previous").prop("disabled", false);
            
            }
            else {
                $("#next").prop("disabled", false);
                page_number++;
                reset_css()
                document.getElementById(page_number).style.color = "black";
                document.getElementById(page_number).style.backgroundColor = "red";
                if (page_number === 10) {
                    document.getElementById("next").style.color = "gray";
                    document.getElementById("next").style.backgroundColor = "black";
                    document.getElementById("next").style.borderColor = "gray";
                    document.getElementById("next").disabled = true;
                    $("#next").prop("disabled", true);
                    $("#previous").prop("disabled", false);
                }
            }
            console.log(page_number);
            
        }
        else if ($(this).attr("id") == "previous") {
            
            //should be controlled by another if statement to control less than 1 or more than 10
            if (page_number === 1) {
                $("#previous").prop("disabled", true);
                $("#next").prop("disabled", false);
            } else {
                $("#previous").prop("disabled", false);
                page_number--;
                reset_css()
                document.getElementById(page_number).style.color = "black";
                document.getElementById(page_number).style.backgroundColor = "red";
                if (page_number === 1){
                    document.getElementById("previous").style.color = "gray";
                    document.getElementById("previous").style.backgroundColor = "black";
                    document.getElementById("previous").style.borderColor = "gray";
                    $("#next").prop("disabled", true);
                    $("#previous").prop("disabled", false);
                }
            }
            console.log(page_number)
        }
        
        else {
            page_number = $(this).attr("id");
            if (page_number === 1) {
                $("#previous").prop("disabled", true);
                $("#next").prop("disabled", false);
                console.log(page_number)
                reset_css()
                document.getElementById(`${this.id}`).style.color = "black";
                document.getElementById(`${this.id}`).style.backgroundColor = "red";
                }
            
            else if (page_number === 10) {
                $("#next").prop("disabled", true);
                $("#previous").prop("disabled", false);
                console.log(page_number)
                reset_css()
                document.getElementById("10").style.color = "black";
                document.getElementById("10").style.backgroundColor = "red";
            }
            else {
                $("#next").prop("disabled", false);
                $("#previous").prop("disabled", false);
                console.log(page_number);
                reset_css()
                document.getElementById(`${this.id}`).style.color = "black";
                document.getElementById(`${this.id}`).style.backgroundColor = "red";
                }
                }
            console.log(page_number)
        if ($(this).attr("id") == "1") {
                $("#previous").prop("disabled", true);
                $("#next").prop("disabled", false);
                reset_css()
                document.getElementById("previous").style.color = "gray";
                document.getElementById("previous").style.backgroundColor = "black";
                document.getElementById("previous").style.borderColor = "gray";
                document.getElementById("1").style.color = "black";
                document.getElementById("1").style.backgroundColor = "red";
            } else {
                $("#previous").prop("disabled", false);
            }
            console.log(page_number)
            
        if ($(this).attr("id") == "10") {
                $("#next").prop("disabled", true);
                $("#previous").prop("disabled", false);
                reset_css()
                document.getElementById("next").style.color = "gray";
                document.getElementById("next").style.backgroundColor = "black";
                document.getElementById("next").style.borderColor = "gray";
                document.getElementById("10").style.color = "black";
                document.getElementById("10").style.backgroundColor = "red";
            
            } else {
                $("#next").prop("disabled", false);
            }
            console.log(page_number);
        
            
    $.ajax({
        
        url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating",
        type: "GET",
        success: function (res) {
            movies = res.data.movies.slice(0, 20).forEach(function (movie) {
                    // console.log(movie.title);
                    $('.movie').remove();

                    })
            var first = (page_number - 1) * 2
            var second = first + 2
            movies = res.data.movies.slice(first, second).forEach(function (movie) {
                    // console.log(movie.title);
                    
                    $("main").append(
                        `<div class="movie">
                        <a href="movie_${movie.id}.html"><img src="${movie.medium_cover_image}" alt="${movie.title}">
                        </div>`
                        );
                    });

            list_movies(page_number);

        }
    })
    }
    )
    function reset_css () {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.backgroundColor = 'black';
        button.style.color = 'red';
        button.style.borderColor = 'red';
    });
}
    function removeDivs() {
    var div1 = document.getElementByClassName("movie");
    while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
    }
    const list_movies = function (page_number) {
        
        //access movies and display on the page
        page_number.data.movies.slice(first, second).forEach(function () {
            var first = (page_number - 1) * 2
            var second = first + 2
        });
            }
        })