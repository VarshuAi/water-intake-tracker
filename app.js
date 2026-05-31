
            let water = 0;
            const val = document.getElementById('water-val');
            window.addWater = function() {
                water += 250;
                val.innerText = water;
                if(water >= 2000) {
                    alert("Hydration target achieved!");
                }
            }
        