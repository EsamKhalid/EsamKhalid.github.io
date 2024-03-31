
function sortElements(){
    const list = document.getElementById("column");
    const sortableArr = document.getElementsByClassName("sortable");
    const selectValue = document.getElementById("sort-projects").value;

    const dates = [];

    //populate dates array
    for(let i = 0; i < sortableArr.length; i++){
        dates.push(new Date(sortableArr.item(i).getAttribute("data-date")).getTime());
    }

    //ascending
    if(selectValue == "Date-Ascending"){
        dates.sort(function(a,b){return a - b});
    }
    //descending
    else if(selectValue == "Date-Descending"){
        dates.sort(function(a,b){return b - a});;
    }



    const tempArr = [];

    for(let i = 0; i < sortableArr.length; i++){
        
        const d = new Date(sortableArr.item(i).getAttribute("data-date"));
        //gets index of selected item
        const dindex = dates.indexOf(d.getTime());
        //if the index is already populated (another element with the same date)
        if(tempArr[dindex] != undefined){
            //add it into the index above
            tempArr[dindex + 1] = sortableArr.item(i);
        }
        else{
            tempArr[dindex] = sortableArr.item(i);
        }
        
    }

    //appends the sorted items in order into the list div
    for(let i = 0; i < dates.length; i++){
        if(tempArr[i] != undefined){
            list.appendChild(tempArr[i]);
        }
    }
}