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
    mount: aboutContent, //have to change this one  --whomi8
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {  //have to change this one  --whomi8
  const contactBox = new WinBox({  //have to change this one  --whomi8
    title: 'contact Me',
    // modal: true, --whomi8
    width: '400px',
    height: '400px',
    top: 90,
    right: 50,
    bottom: 50,
    left: 50,
    mount: contactContent, //have to change this one --whomi8 
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

project.addEventListener('click', () => { //have to change this one --whomi8 
  const ProjectBox = new WinBox({ //have to change this one  --whomi8 
    title: 'My project',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 50,
    mount: projectContent, //have to change this one --whomi8 
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})


