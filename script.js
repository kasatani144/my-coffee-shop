let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .header-section .navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}


/*--------------google map--------*/

// function initMap() {
   

//     // The location of Geeksforgeeks office
//     const coffee_loc = {
//         lat: 48.1351,
//         lng: 11.5820
//     };

    
//     const map = new google.maps.Map(
//         document.getElementById("map"), {

        
//         zoom: 16,
//         center: coffee_loc,
//     });

//     var marker = new google.maps.Marker({
//         position: { lat: 48.1351, lng: 11.5820 },
//         map: map
//     });
// }