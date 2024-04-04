document.querySelector("input[type=submit]").addEventListener("click", function(e){
    let standing = document.querySelectorAll("input[name=standing]")
    let gradDate = document.querySelectorAll("input[name=gradDate]")

    let i = 0;
    let check_standing_selection = false;
    let check_grad_date_selection = false;

    while (i < standing.length) {
        if (standing[i].checked) {
            check_standing_selection = true;
        }
        i++;
    }
    
    i = 0;
    while (i < gradDate.length) {
        if (gradDate[i].checked) {
            check_grad_date_selection = true;
        }
        i++;
    }

    if (!(check_standing_selection && check_grad_date_selection)) {
        e.preventDefault()
        console.log("Error! Must select values for both forms.")
    }
})
    
