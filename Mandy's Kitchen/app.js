
// Current Date and Time. //
const todaysDate = new Date();
$('#currentDay').text(todaysDate.toLocaleString('default', { month: 'long' }) + " " + todaysDate.getDate() + ", " + todaysDate.getUTCFullYear());
$('#currentTime').text(todaysDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))