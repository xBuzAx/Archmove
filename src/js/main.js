const nav = document.querySelector('.nav')
const inputSearch = document.querySelector('.nav__search-input')
const imgSearch = document.querySelector('.nav__search-img')
const burgerBtn = document.querySelector('.nav__burger-button')
const mobileMenu = document.querySelector('.nav__mobile-list')
const mobileMenuItem = document.querySelectorAll('.nav__mobile-item')

const menuReference = document.querySelectorAll('.nav__desktop-link')
const menuReferenceLast = document.querySelector('.nav__desktop-link:last-of-type')
const sections = document.querySelectorAll('.nav-menu')

const handleSearch = () => {
    inputSearch.classList.toggle('nav__search-input--active')
    imgSearch.classList.toggle('nav__search-img--active')
}

const removeSearching = (e) => {
    if(e.target != inputSearch) {
        inputSearch.classList.remove('nav__search-input--active')
        imgSearch.classList.remove('nav__search-img--active')
    } else {
        handleSearch()
    }
}

const scrollFunction = () => {
    if(window.scrollY > 10) {
        nav.style.boxShadow = '1px 1px 15px rgba(0,0,0,.2)'
    } else {
        nav.style.boxShadow = 'none'
    }
}

const activeMobileMenu = () => {
    mobileMenu.classList.toggle('nav__mobile-active')
}

const closeMobileMenu = () => {
    if(window.innerWidth >= 768) {
        mobileMenu.classList.remove('nav__mobile-active')
    }
}


// =======================================================

const handleScrollSpy = () => {
    if(document.body.classList.contains('body')) {
        const sectionsArr = []
        sections.forEach(section => {
            if(window.scrollY <= section.offsetTop + section.offsetHeight - nav.offsetHeight) {
                sectionsArr.push(section)
                const activeSection = document.querySelector(`[href*="${sectionsArr[0].id}"]`)

                menuReference.forEach(item => item.classList.remove('active'))
                activeSection.classList.add('active')
            }
            
            if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 20) {
                menuReference.forEach(item => item.classList.remove('active'))
                menuReferenceLast.classList.add('active')
            }
        })
    }   
}

const scrollNav = () => {
    scrollFunction()
    handleScrollSpy()
}
// =======================================================

window.addEventListener('click', removeSearching)
window.addEventListener('scroll', scrollNav)
window.addEventListener('resize', closeMobileMenu)
burgerBtn.addEventListener('click', activeMobileMenu)
mobileMenuItem.forEach(li => {
    li.addEventListener('click', () => {
        mobileMenu.classList.remove('nav__mobile-active')
    })
})


