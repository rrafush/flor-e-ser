gsap.to(".bgIlustra", {duration: 3,rotation: 5, repeat: -1, scaleY:0.95, scaleX:0.9, yoyo:true, transformOrigin: 'center'})
gsap.to(".cabelo", {duration: 2.5,rotation: 5, repeat: -1, scaleY:0.95, scaleX:1.1, yoyo:true, transformOrigin: 'center'})
gsap.from(".ramo", {scale: 0, transformOrigin: 'bottom', stagger: { amount:2, from: 'random'}})
gsap.from(".folha", {scale:0, transformOrigin:'bottom', stagger: {amount: 2, from: 'random'} })
gsap.from(".flor", {scale:0, transformOrigin: 'center', stagger: {amount:2.5, from: 'random'}})
gsap.to(".flor", {ease: Power1. easeInOut, duration:1, rotation: 30, repeat: -1, yoyo:true, transformOrigin:'center'})





