Manual MongoDB Changes for Admin and Faculty Access
After deploying the application, there are some manual changes required in your MongoDB Atlas database to grant access to the admin and faculty pages:

1. Admin Page Access:
By default, the isAdmin field for all users is set to false. To grant access to the admin page, you must manually update the isAdmin field to true for the respective users in MongoDB Atlas.

Steps:
Log into your MongoDB Atlas account.
Navigate to the database where your application's user data is stored.
Go to the users collection.
Locate the user document for the person who should have admin access.
Manually update the isAdmin field from false to true.
2. Faculty Page Access:
Similarly, the isHead field for all users is also set to false by default. To allow a user to access the faculty page, you need to update the  isHead field to true in MongoDB Atlas.

Steps:
In MongoDB Atlas, navigate to the users collection.
Find the user document for the individual who should have faculty access.
Manually update the isDoctor field from false to true.
These steps are necessary because access to the admin and faculty pages is controlled by the isAdmin and isDoctor boolean fields, respectively.

