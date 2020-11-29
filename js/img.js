function change()
        {
            var image = document.getElementById('picture');
      
            if(image.src.match("../image/iiit1.jpg"))
                image.src = "../image/iiit2.jpg";
            else if(image.src.match("../image/iiit2.jpg"))
                image.src = '../image/iiit3.jpg';
            else if(image.src.match("../image/iiit3.jpg"))
                image.src = '../image/iiit4.jpg';
            else if(image.src.match("../image/iiit4.jpg"))
                image.src = '../image/iiit5.jpg';
            else if(image.src.match("../image/iiit5.jpg"))
                image.src = '../image/iiit1.jpg';  
        }