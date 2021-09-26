TAX-E WEB-APP

Back-end server: https://github.com/josephmani/Tax-E-Backend

Project Statement
1. Lack of verified drivers: NITC has students that are not native to Calicut, it's difficult for them to find verified drivers.
2. Overpriced rides: Students are often overcharged for a particular ride.
3. Lack of ride sharing: Students often travel to the same destination, but they travel seperately, this could be avoided if there was a way to share rides 

Description
Round the clock mobile TAXI service for NITC students. Customers can put a request for a trip, drivers can then accept it. On accepting customers will be notified that their request has been accepted and the Driver Phone Number will be given for them to contact the driver.

Additional Features
1. Dynamic pricing: Make the app more alluring for drivers by allowing the pricing to charge based on time of day and traffic
2. Google Maps: Set up google maps to allow travel between any two locations in Calicut
3. Ratings and Complains: At the end of every ride, customers can rate their ride, the can also make a complain if there are any
4. In-app messaging: Customer and driver can communicate with each other via the app

Commands to run front-end:      
First navigate to the Tax-E directory
1. npm -i 
2. npm start

Commands To run back-end:       
First navigate to the Tax-E-Backend directory
1. pip install -r requirements.txt
2. export FLASK_APP=taxibackend
3. export FLASK_ENV=development
4. flask run
