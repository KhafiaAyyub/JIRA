let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let addFlag = false;
let mainCont = document.querySelector(".main-cont");
let textareaCont = document.querySelector(".textarea-cont");
let colors= ["lightpink","lightblue","lightgreen","black"];
let modalPriorityColors = colors[colors.length-1]; //black default color
let allPriorityColors = document.querySelectorAll(".priority-color");

// Listener for modal priority coloring - toggling border color
allPriorityColors.forEach((colorElem, idx) => {
    colorElem.addEventListener("click", (e) => {
        allPriorityColors.forEach((priorityColorElem, idx) => {
            priorityColorElem.classList.remove("border");
        })
        colorElem.classList.add("border");

        // modalPriorityColor = colorElem.classList[0];
    })
}) 

addBtn.addEventListener("click", (e) => {
    // Display Modal
    // Generate ticket

    // AddFlag, true -> Modal Display
    // AddFlag, False -> Modal None
    addFlag = !addFlag;
    if (addFlag) {
        modalCont.style.display = "flex";
    }
    else {
        modalCont.style.display = "none";
    }
})

modalCont.addEventListener("keydown",(e) => {
    let key = e.key;
    if(key == "Shift"){
        createTicket();
        modalCont.style.display = "none";
        textareaCont.value = "";

    }
})

function createTicket(ticketColor, ticketTask, ticketID){
    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class","ticket-cont");
    ticketCont.innerHTML = `
        <div class="ticket-color"></div>
        <div class="ticket-id">Sample_ID</div>
        <div class="task-area">Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Non harum perferendis doloribus, error optio
        dolore inventore maxime.</div>`;
        mainCont.appendChild(ticketCont);
}



        // Modify data in localStorage (priority color change)
        ticketsArr[ticketIdx].ticketColor = newTicketColor;
        localStorage.setItem("jira_tickets", JSON.stringify(ticketsArr));
    })
}

function getTikcetIdx(id) {
    let ticketIdx = ticketsArr.findIndex((ticketObj) => {
        return ticketObj.ticketID === id;
    })
    return ticketIdx;
}

function setModalToDefault() {
    modalCont.style.display = "none";
    textareaCont.value = "";
    modalPriorityColor = colors[colors.length - 1];
    allPriorityColors.forEach((priorityColorElem, idx) => {
        priorityColorElem.classList.remove("border");
    })
    allPriorityColors[allPriorityColors.length - 1].classList.add("border");
}