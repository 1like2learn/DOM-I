const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

{//example
// Example: Update the img src for the logo

const logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])
console.log(document)
}//example
{//pictures

const headerImg = document.getElementById('cta-img')
headerImg.setAttribute('src', siteContent['cta']['img-src'])

const contentImg = document.getElementById('middle-img')
contentImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

}//pictures
{//navbar

const nav = document.querySelector('header nav')
const navLinks = nav.querySelectorAll('a')
navLinks.forEach( item => {
  item.style.color = 'green'
})
const navLink1 = {
  href: '#',
  textContents: 'Whoo Boy',
}
const newNavLink1 = document.createElement('a')
newNavLink1.href = navLink1.href
newNavLink1.textContents = navLink1.textContents

nav.appendChild(newNavLink1)
console.log(newNavLink1)

navLinks[0].textContent= siteContent.nav['nav-item-1']
navLinks[1].textContent= siteContent.nav['nav-item-2']
navLinks[2].textContent= siteContent.nav['nav-item-3']
navLinks[3].textContent= siteContent.nav['nav-item-4']
navLinks[4].textContent= siteContent.nav['nav-item-5']
navLinks[5].textContent= siteContent.nav['nav-item-6']



}//navbar
{//header
  
const h1 = document.getElementsByTagName('h1')
h1[0].textContent = siteContent.cta.h1

const button = document.getElementsByTagName('button')
button[0].textContent = siteContent.cta.button

}//header
{//main-content

const mainH4s = document.querySelectorAll('.text-content h4')

mainH4s[0].textContent = siteContent["main-content"]["features-h4"]
mainH4s[1].textContent = siteContent['main-content']['about-h4']
mainH4s[2].textContent = siteContent['main-content']['services-h4']
mainH4s[3].textContent = siteContent["main-content"]['product-h4']
mainH4s[4].textContent = siteContent["main-content"]["vision-h4"]

const mainPs = document.querySelectorAll('.text-content p')

mainPs[0].textContent = siteContent['main-content']["features-content"]
mainPs[1].textContent = siteContent['main-content']['about-content']
mainPs[2].textContent = siteContent['main-content']['services-content']
mainPs[3].textContent = siteContent["main-content"]["product-content"]
mainPs[4].textContent = siteContent["main-content"]["vision-content"]

}//main-content
{//contact

  const contactH4 = document.querySelector('.contact h4')
  contactH4.textContent = siteContent.contact["contact-h4"]
  const contactItems = document.querySelectorAll('.contact p')
  contactItems[0].textContent = siteContent.contact.address
  contactItems[1].textContent = siteContent.contact.phone
  contactItems[2].textContent = siteContent.contact.email

}//contact
{//footer

  const copy = document.querySelector('footer p')
  copy.textContent = siteContent.footer.copyright
  
}//footer
