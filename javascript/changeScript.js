var i = 0
function change1()
            {
                if (i === 0)
                {
                    document.getElementById('slideshow1').src = "static/tesla.png"
                    i = 1;
                    // https://www.google.com/url?sa=i&url=https%3A%2F%2Fmarketrealist.com%2F2019%2F08%2Ftesla-autopilot-troubles-go-way-beyond-crashes%2F&psig=AOvVaw1WOcCIhMT8qV496nfdtSXb&ust=1667346921298000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPio07nVi_sCFQAAAAAdAAAAABAT
                }
                else if (i === 1)
                {
                    document.getElementById('slideshow1').src = 'static/alexa.png'
                    i = 0;
                    // https://commons.wikimedia.org/wiki/File:Alexa_(40770465691).jpg                }
            }
        }

window.setInterval(change1, 1000);

function changePic1()
            {
                document.getElementById('slideshow1').src = "static/tesla1.png"
                if (i === 0)
                {
                    document.getElementById('slideshow1').src = "static/tesla.png"
                    i = 1;
                    // https://www.google.com/url?sa=i&url=https%3A%2F%2Fmarketrealist.com%2F2019%2F08%2Ftesla-autopilot-troubles-go-way-beyond-crashes%2F&psig=AOvVaw1WOcCIhMT8qV496nfdtSXb&ust=1667346921298000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPio07nVi_sCFQAAAAAdAAAAABAT
                }
                else if (i === 1)
                {
                    document.getElementById('slideshow1').src = 'static/alexa.png'
                    i = 0;
                    // https://commons.wikimedia.org/wiki/File:Alexa_(40770465691).jpg                }
            }
            }
