## Airline Application

# ---------------------------------------------------------------------

# Step to run application:

1. Extract zip file
2. Install npm:- npm install
3. Install json srerver:- npm install -g json-server
3. Run npm:- npm start
4. Run json server:- json-server --watch db.json --port 4500
5. Run lint:- eslint --fix src
6. Unit test case :- npm test

# ---------------------------------------------------------------------

# User credentials:

    Google Login:
    Use google login to login as ADMIN

    Facebook Login:
    Use facebook login to login as STAFF

# ---------------------------------------------------------------------

# Login as Admin:

1. See Flight list
2. See flight details on click of flight details link
3. Click on show passenger list
4. Add new passenger
5. Edit existing passenger
6. Manage services
7. Choose meal preference
8. Filter passenger
9. Logout Admin

# ---------------------------------------------------------------------

# Login as staff

# In-flight

        1. Click on in-flight services
        2. Select flight
        3. See flight details and seat map allocation based on food preference
        4. Click on show passenger list
        5. See passenger list
        6. Manage Ancillary services
        7. Change meal preference
        8. Based on change meal preference seat map allocation colors changes
        9. Logout staff.

# ---------------------------------------------------------------------

# Check-In

        1. Click on check-in services
        2. Select flight
        3. See flight details
        4. See flight details and seat map allocation based on passenger status : check-in, checkout, extra service: infant, wheelchair, and vacant seats and respected color code
        5. See passenger list
        6. Filter passengers
        7. Change status of passenger
        8. We can see current seat of selected passenger with orange border color code
        9. We can check-in passenger by click on check-in button respective color code gets change.
        10. We can change seat of passenger -> click on seat change button select the seat u want to change again click on seat change button  seat get change
        11. Once the passenger is check-in, we can do UNDO-CHECK-In by click on undo check-in button.
        12. We can check-out passenger if it’s in check-status. To check-out click on Checkout button.
        13. Once passenger check out we can’t change its status and seat.
        14. Logout user.
