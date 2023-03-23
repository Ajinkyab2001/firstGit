


// Deliverable :
// Make the 2nd item have green background color
// Make the 3rd item invisible

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';


var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = "none";



// Deliverable

// Using QuerySelectorALL change the font color to green for 2nd item in the item list
// Choose all the odd elements and make their background green using QuerySelectorALL


var secondItem = document.querySelectorAll('.list-group-item');
secondItem[1].style.color = 'red';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i =0; i < odd.length ; i++){
    odd[i].style.backgroundColor = 'green';
}






