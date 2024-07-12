// Now we are creating the java code 
const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const project = document.querySelector('#project')

const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectContent = document.querySelector('#project-content')







































about.addEventListener('click', () => { 
  const aboutBox = new WinBox({ 
    title: 'About Me',
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent, 
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
contact.addEventListener('click', () => {  
  const contactBox = new WinBox({ 
    title: 'contact Me',
    width: '400px',
    height: '400px',
    top: 90,
    right: 50,
    bottom: 50,
    left: 50,
    mount: contactContent, 
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
project.addEventListener('click', () => { 
  const ProjectBox = new WinBox({  
    title: 'My project',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 50,
    mount: projectContent, 
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})


