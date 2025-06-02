            // Create a time data function
            window.onload = function () {
            function currentTime() {
                // Declare variables
                var d = new Date(); // Get current date
                var localhr = d.getHours(); // Get current hours
                var min = d.getMinutes(); // Get current minutes
                var sec = d.getSeconds(); // Get current seconds
                var hr;
                // Add 0 to single digits for seconds and minutes
                if (min < 10) min = "0" + min;
                if (sec < 10) sec = "0" + sec;
                
                // Determine AM or PM string
                if (localhr == 0) {
                    hr = 12;
                    ampm = "AM";
                } else if (localhr == 12) {
                    hr = 12;
                    ampm = "PM";    
                } else if (localhr > 12) {
                    hr = localhr - 12;
                    ampm = "PM";
                } else {
                    hr = localhr;
                    ampm = "AM";
                }
                var offset = d.getTimezoneOffset();
                var tzHours = -offset / 60;

                let timeZone;
                switch (tzHours) {
                    case -8:
                        timeZone = "PT";
                        break;
                    case -7:
                        timeZone = "MT";
                        break;
                    case -6:
                        timeZone = "CT";
                        break;
                    case -5:
                        timeZone = "ET";
                        break;
                    default:
                        timeZone = "";
                }
                // Assemble time format to display
                var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

                // Display current local time and time zone on HTML elements
                document.getElementById("clock").innerText = time; // adding time

                // Run time data function every 1 second
            }

            // Initial run of time data function
            currentTime();
            setInterval(currentTime, 1000); // setting timer
        };