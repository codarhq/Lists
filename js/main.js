let addItem = document.querySelector('.add-item')
let parentList = document.querySelector('.list-items')
let searchElements = document.querySelector('.search-item')

addItem.addEventListener('click', add)
searchElements.addEventListener('keyup', filterElements)

function add(e){
    e.preventDefault()

    // Get the text input value
    let listItem = document.querySelector('.text').value

    // Create a list element and append the text as a child node
    let li = document.createElement('li')

    // Styling list item
    li.style.fontSize = '20px'
    li.style.borderBottom = '2px solid #868585'
    li.style.paddingBottom = '1rem'
    li.style.maxWidth = '20rem'
    li.style.marginTop = '16px'


    // Add the text as a child node
       li.appendChild(document.createTextNode(listItem))
    //    console.log(li)

        // li.appendChild(document.createElement('a'))
        // let anchor = document.createElement('a')
        // // setAttribute()
        // anchor.setAttribute('href', '#')
        // console.log(anchor)
    
    // Create a button element and append as a child to the list items
    let deleteBtn = document.createElement('button')
    deleteBtn.appendChild(document.createTextNode('x'))
    deleteBtn.className = 'delete'
    deleteBtn.addEventListener('click', removeItem)

    // Styling the button
    deleteBtn.style.backgroundColor = 'red'
    deleteBtn.style.float = 'right'
    deleteBtn.style.color = 'white'
    deleteBtn.style.padding = '10px'
    deleteBtn.style.borderRadius = '2px'
    deleteBtn.style.border = '0'
    deleteBtn.style.cursor = 'pointer'


    // Append delete button to the list item
    li.appendChild(deleteBtn)

    // Append the list item to the parent list
    parentList.appendChild(li);
}

// Adding delete functionality

function removeItem(e){
    if(e.target.classList.contains('delete')){
       let li = e.target.parentElement;
       parentList.removeChild(li)
    }
}

// Filtering through elements
function filterElements(e){
    let searchValue = e.target.value.toLowerCase();
    // console.log(searchValue);

    // select all elements from the undordered list
    let items = document.getElementsByTagName('li') // This would return an HTML Collection
    // console.log(items)

    // convert to an array using Array.from() method
    Array.from(items).forEach((item) => {
        // console.log(item)
        // <li></li>
        let first = item.firstChild.textContent;
        // console.log(typeof first)
        if(first.toLowerCase().indexOf(searchValue) != -1){
           item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
}

// Assignment
// Create a quotes generator




