Frontend for a simple CRM system implemented with the use of MVC pattern.

index.html
Form for adding a bid to CRM. After filling it out, the data from the form creates a new application and is included in the list of all applications.
The new bid has the "New" status and be displayed in the list of applications.

02-crm-all-bids.html
A page with all bids.
All bids are displayed in the table here. Each displays its data (ID, date of creation, product, name, email, phone, and status). Bids can be filtered by status. Show All or only New / In progress / Completed / Archive (deleted).

03-crm-edit-bid.html
Bid editing page.
On this page, the selected bid is being edited.
One can change its data, except for the ID and the date of creation.

The app uses test_data.js module so it's easier to test the app (don't have to fill in the form every time).
