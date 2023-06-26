let btn = document.getElementById('toggleBtn')
        let bulb = document.getElementById('bulb')
        document.addEventListener('click', toggleBulb)

        function toggleBulb(e) {
            if (btn.textContent.includes('ON')) {
                bulb.src = "img/bulbOn.jpg"
                btn.textContent = "TURN OFF"
            } else {
                bulb.src = "img/Bulb Off.jpg"
                btn.textContent = "TURN ON"
            }
        }