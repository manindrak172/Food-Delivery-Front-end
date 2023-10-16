document.querySelector('.signIn').addEventListener('click', function() {
            alert('Sign In button clicked');
        });
        document.querySelector('.signUp').addEventListener('click', function() {
            alert('Sign Up button clicked');  
        });
        document.querySelector('button').addEventListener('click', function() {
            alert('Explore Food button clicked'); 
        }); 
        const plusIcons = document.querySelectorAll('.plus-icon');
        plusIcons.forEach(function(plusIcon) {
            plusIcon.addEventListener('click', function() {
                const card = plusIcon.closest('.card');
                const foodTitle = card.querySelector('.food-tittle h1').textContent;
                alert('Added ' + foodTitle + ' to the cart'); 
            });
        });
        
