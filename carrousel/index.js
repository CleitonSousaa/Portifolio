let count = 1;
        document.getElementById("radio1").checked = true;
        
        setInterval( function(){
            nextImage();
        },4000)

        function nextImage(){
            count++;
            if(count>4){
                count=1;
            }
            document.getElementById("radio"+count).checked = true;
        }



        const carroucel = document.querySelector(".slides");

        let isDragStart = false, prevPageX, prevScrollLeft;

        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX;
            prevScrollLeft = carroucel.prevScrollLeft;
        }

        const dragging = (e) => {
            if(!isDragStart) return;
            e.preventDefault();
            let positionDiff = e.pageX - prevPageX;
            carroucel.scrollLeft = prevScrollLeft - positionDiff;
        }

        const dragStop = () => {
            let isDragStart = false;
        }
        
        carroucel.addEventListener('mousedown', dragStart);
        carroucel.addEventListener('mousemove', dragging);
        carroucel.addEventListener('mouseup', dragStop);