
/*
Red circle target: x: 20px, y: 300px;
Blue circle target: x: 400px, y: 300px;
Green circle target: x: 400px, y: 20px;
*/

const promise = new Promise((resolve, reject) => {
    const result =  translateOneByOne()
    resolve(result)
})

promise
    .then(() => {
        setTimeout(() => {
            translateAllAtOnce()
            
        }, 2000);
    
})

async function  translateOneByOne () {
    try {
        await moveElement(document.querySelector("ul.marks li:nth-child(1)"), { x: 20, y: 300 })
        await moveElement(document.querySelector("ul.marks li:nth-child(2)"), { x: 400, y: 300 })
        await moveElement(document.querySelector("ul.marks li:nth-child(3)"), { x: 400, y: 20 })  
        document.querySelector("ul.marks li:nth-child(1)").style.transform = "none";
        document.querySelector("ul.marks li:nth-child(2)").style.transform = "none";
        document.querySelector("ul.marks li:nth-child(3)").style.transform = "none";
    } catch (error) {
        console.log("oups! error", error)
        
    }
}

function translateAllAtOnce() {
    const promise1 = moveElement(document.querySelector("ul.marks li:nth-child(1)"), { x: 20, y: 300 });
    const promise2 = moveElement(document.querySelector("ul.marks li:nth-child(2)"), { x: 400, y: 300 });
    const promise3 = moveElement(document.querySelector("ul.marks li:nth-child(3)"), { x: 400, y: 20 });
    Promise.all([promise1, promise2, promise3])
        .then(() => {
            console.log("well done")
        })
        .catch((error) => {
            console.log("something went wrong,", error)

        })


    
}














/*
function getElements() {
    const redBox = document.querySelector("ul.marks li:nth-child(1)");
    const blueBox = document.querySelector("ul.marks li:nth-child(2)");
    const greenBox = document.querySelector("ul.marks li:nth-child(3)");
    const span = document.querySelector('span');

    return {
        redBox,
        blueBox,
        greenBox,
        span
    }
}

function init() {

    const elements = getElements();

    const bluePromise = (x = 400, y = 300) => moveElement(elements.blueBox, { x, y });
    const redPromise = (x = 20, y = 300) => moveElement(elements.redBox, { x, y });
    const greenPromise = (x = 400, y = 20) => moveElement(elements.greenBox, { x, y });

    function thumbsUp(showBool) {
        elements.span.classList[showBool ? 'add' : 'remove']('shown')
    }

    async function reset() {
        await bluePromise(0, 0);
        await redPromise(0, 0);
        await greenPromise(0, 0);
    }

    async function translateOneByOne() {
        await bluePromise();
        await redPromise();
        await greenPromise();
    }

    async function translateAllAtOnce() {
        return Promise.all([bluePromise(), redPromise(), greenPromise()])
    }

    async function animateBoth() {
        await translateOneByOne();
        thumbsUp(true);
        await reset();
        thumbsUp(false);
        await translateAllAtOnce();
        thumbsUp(true);
    }

    animateBoth();

}

// Without this animation doesnt run after page refresh in Chrome??? Firefox works without.
setTimeout(() => {
    init();
})
*/
  