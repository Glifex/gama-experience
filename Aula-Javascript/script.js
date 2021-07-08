const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = ['name', 'js', 'html', 'css']

// newListForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     const listName = newListInput.value
//     if (listName === null || listName === '') return
//     cosnt list = createList(listName);
//     newListInput.value = null
//     lists.push(lists)
//     render()

// })

function render() {
    lists.forEach(function (list) {
            const item = document.createElement('li')
            item.classList.add('item')
            item.innerText = list
            listContainer.appendChild(item)

        }
    }

    render()