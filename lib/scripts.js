function convertCmToFt() {
            var cm = document.getElementById('cmInput').value;
            var inches = cm / 2.54;
            var feet = Math.floor(inches / 12);
            var remainingInches = inches % 12;
            var result = feet + " feet and " + remainingInches.toFixed(2) + " inches";
            document.getElementById('modalResult').innerText = result;
            document.getElementById('myModal').style.display = "block";
        }
        
        function closeModal() {
            document.getElementById('myModal').style.display = "none";
        }

        window.onclick = function(event) {
            var modal = document.getElementById('myModal');
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }