function handleClick(){
    const x = document.querySelectorAll(".seats");
    console.log(x)
    x.forEach((button) => {
        button.addEventListener('click',()=>{
            const imageTag = button.querySelector('img');
            let imageTag1 = imageTag.src;
            console.log(imageTag1);
            
            if(imageTag1 == "http://127.0.0.1:5500/MovieTicket/couchAvailable.svg"){
                imageTag.src = "http://127.0.0.1:5500/MovieTicket/couchSelected.svg";
                imageTag.alt = "couchSelected";
                let pTag = document.getElementById('total').textContent;
                let total = parseInt(pTag);
                total += 20;
                document.getElementById('total').textContent = total;
                let pTag1 = document.getElementById('ticket').textContent;
                let ticket = parseInt(pTag1);
                ticket += 1;
                document.getElementById('ticket').textContent = ticket;
                console.log(pTag,pTag1);
                
            }else{
                imageTag.src = "http://127.0.0.1:5500/MovieTicket/couchAvailable.svg";
                imageTag.alt = "couchAvailable";
                let pTag2 = document.getElementById('total').textContent;
                let total = parseInt(pTag2);
                total -= 20;
                document.getElementById('total').textContent = total;
                let pTag3 = document.getElementById('ticket').textContent;
                let ticket = parseInt(pTag3);
                ticket -= 1;
                document.getElementById('ticket').textContent = ticket;
            }
        })        

    })

}