var movieHandle = function movieFun(movieName, picture, director) {
    document.getElementById("movieTitle").innerHTML = movieName;
    document.getElementById("moviePoster").src = "images/" + picture;
    document.getElementById("movieDirector").innerHTML = director;
}

document.getElementById("calcPrice").addEventListener("click", calcPriceFun);
document.getElementById("ex").addEventListener("mouseenter", movieHandle.bind(MouseEvent,
    'Ex Machina', 'exMachina.jpg', 'Alex Garland'));
document.getElementById("gone").addEventListener("mouseenter", movieHandle.bind(MouseEvent,
    'Gone Girl', 'goneGirl.jpg', 'David Fincher'));
document.getElementById("inc").addEventListener("mouseenter", movieHandle.bind(MouseEvent,
    'Inception', 'inception.jpg', 'Christopher Nolan'));

document.getElementById("madmax").addEventListener("mouseenter", movieHandle.bind(MouseEvent,
    'Mad Max', 'madMax.jpg', 'George Miller'));

//MouseEvent describes the event, the remaining strings are the parameters



function calcPriceFun() {
    try {
        var tickets = parseFloat(document.getElementById("numTickets").value);

        if (Number.isNaN(tickets)) //verifies tickets is a valid number
        {
            throw ("Please enter numbers");
        }
        if (tickets < 1) {
            throw ("Please enter a number larger than 0");
        }


        var perTicket = 10.0;
        var taxRate = .07;

        var cost = tickets * perTicket;
        cost *= 1 + taxRate;

        document.getElementById("ticketCost").innerHTML = "$" + cost.toFixed(2);

    } //end try
    catch (message) {
        document.getElementById("ticketCost").innerHTML = message;
        document.getElementById("numTickets").value = "0";
    }

}