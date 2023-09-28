
export function generateConsoleMessage<T>(prop: T) {
   const currentH1Tag: HTMLElement = document.getElementsByTagName('h1')[0];
   currentH1Tag.innerHTML="THIS IS TYPESCRIPT";

   if (document) {
    const divTag = document.createElement('div');
    const ulTag = document.createElement('ul');
    const liTags:HTMLElement[] = [];
    if(prop) {
        Object.entries(prop).forEach((key, value) => {
            console.log('current key', key);
            const liTag = document.createElement('li');
            liTag.innerHTML = `${key[0]}: ${key[1]}` ;
            liTags.push(liTag)
        })
    }

    ulTag.append(...liTags);
    divTag.appendChild(ulTag);
    document.body.appendChild(divTag);
   }
}
